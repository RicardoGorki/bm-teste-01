import React, { useState, useEffect } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import Modal from "react-modal";
import api from "../../services/api";

import {
  Wrapper,
  Container,
  FlatList,
  ItemList,
  ModalProvider,
} from "./styles";

const customStyles = {
  content: {
    width: "400px",
    height: "460px",
    padding: "0",
    transform: "translate(100%, 20%)",
  },
};

type Shareholder = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  birthdate: Date;
  salary: number;
  created_at: Date;
  updated_at: Date;
};

const Dashboard: React.FC = () => {
  const [shareholders, setShareholders] = useState<Shareholder[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [salary, setSalary] = useState("");

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(id: string) {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    async function loadShareholders(): Promise<Shareholder[] | void> {
      api.get("/shareholders").then((response) => {
        setShareholders(response.data);
      });
    }
    loadShareholders();
  }, [shareholders]);

  async function handleSubmit(e: any) {
    e.preventDefault();

    const data = {
      name,
      email,
      cpf,
      birthdate,
      salary,
    };

    try {
      const response = await api.post("shareholders", data);
    } catch (err) {
      alert("Erro no cadastro tente novamente.");
    }
    setName("");
    setEmail("");
    setCpf("");
    setBirthdate("");
    setSalary("");
  }

  async function handleDelete(id: string) {
    try {
      await api.delete(`shareholders/${id}`);
      setShareholders(
        shareholders.filter((shareholder) => shareholder.id !== id)
      );
    } catch (err) {
      alert("Erro ao deletar caso, tente novamente.");
    }
  }

  async function handleUpdate(id: any) {

    
    const data = {
      name,
      email,
      cpf,
      birthdate,
      salary,
    };

  
    try {

      const response = await api.put(`shareholders/${id}`, data);
    } catch (err) {
      alert("Erro no cadastro tente novamente.");
    }
    setName("");
    setEmail("");
    setCpf("");
    setBirthdate("");
    setSalary("");

  }

  return (
    <>
      <Wrapper>
        <Container>
          <form onSubmit={handleSubmit}>
            <span>Nome</span>
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span>Email</span>
            <input
              name="email"
              type="email"
              placeholder="exemplo@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>CPF</span>
            <input
              name="cpf"
              type="cpf"
              placeholder=""
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <span>Data de Nascimento</span>
            <input
              name="birthdate"
              type="date"
              placeholder="30/01/1900"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
            <span>Salário</span>
            <input
              name="salary"
              type="salary"
              placeholder=""
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
            <button type="submit">Registrar</button>
          </form>
        </Container>
      </Wrapper>
      <FlatList>
        <ItemList>
          <table>
            <thead>
              <tr className="menu">
                <th>Nome</th>
                <th>Email</th>
                <th>Cpf</th>
                <th>Data de Nascimento</th>
                <th>Salário</th>
                <th>Data Criação</th>
                <th>Ultima Alteração</th>
              </tr>
            </thead>
            <tbody className="menu-content">
              {shareholders.map((shareholder) => (
                <tr key={shareholder.id}>
                  <td>{shareholder.name}</td>
                  <td>{shareholder.email}</td>
                  <td>{shareholder.cpf}</td>
                  <td>{shareholder.birthdate}</td>
                  <td>{shareholder.salary}</td>
                  <td>{shareholder.created_at}</td>
                  <td>{shareholder.updated_at}</td>
                  <button
                    onClick={() => openModal(shareholder.id)}
                    type="button"
                  >
                    <FiEdit2 size={18} color="##969cb3" />
                  </button>
                  <button onClick={() => handleDelete(shareholder.id)}>
                    <FiTrash2 size={18} color="##969cb3" />
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </ItemList>
      </FlatList>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <ModalProvider>
          <form onSubmit={handleUpdate}>
            {shareholders.map((shareholder) => (
              <tr key={shareholder.id}>
                <span>{shareholder.name}</span>
                <input
                  name="name"
                  value={shareholder.name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  placeholder="exemplo@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span>Data de Nascimento</span>
                <input
                  name="birthdate"
                  type="date"
                  placeholder="30/01/1900"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                />
                <span>Salário</span>
                <input
                  name="salary"
                  type="salary"
                  placeholder=""
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />

                <button type="submit">Atualizar</button>
              </tr>
            ))}
          </form>
        </ModalProvider>
      </Modal>
    </>
  );
};
export default Dashboard;
