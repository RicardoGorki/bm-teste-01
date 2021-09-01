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
  const [updateShareholders, setUpdateShareholders] = useState<Shareholder>({} as Shareholder);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [salary, setSalary] = useState("");
  const [updateName, setUpdateName] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const [updateBirthdate, setUpdateBirthdate] = useState("");
  const [updateSalary, setUpdateSalary] = useState("");

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(id: string) {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    const loadShareholders = async () => { 
      const {data} = await api.get("/shareholders");
        setShareholders(data);
    }
    loadShareholders()
  }, []);

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

  async function handleUpdate(shareholder: Shareholder|any) {
    try {
      const updatedSharedholder = await api.put(`shareholders/${updateShareholders.id}`, {
        ...updateShareholders, ...shareholder, });
     
        const updatedShareholders = shareholders.map((s) => s.id !== updatedSharedholder.data.id ? s : updatedSharedholder.data,)
     
        setShareholders(updatedShareholders)
    } catch (err) {
      alert("Erro no cadastro tente novamente.");
    }

    
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
            <span>Nome</span>
            <input
              name="name"
              value={updateName}
              onChange={(e) => setUpdateName(e.target.value)}
            />
            <span>Email</span>
            <input
              name="email"
              type="email"
              placeholder="exemplo@gmail.com"
              value={updateEmail}
              onChange={(e) => setUpdateEmail(e.target.value)}
            />
            <span>Data de Nascimento</span>
            <input
              name="birthdate"
              type="date"
              placeholder="30/01/1900"
              value={updateBirthdate}
              onChange={(e) => setUpdateBirthdate(e.target.value)}
            />
            <span>Salário</span>
            <input
              name="salary"
              type="salary"
              placeholder=""
              value={updateSalary}
              onChange={(e) => setUpdateSalary(e.target.value)}
            />
            <button type="submit">Atualizar</button>
          </form>
        </ModalProvider>
      </Modal>
    </>
  );
};
export default Dashboard;
