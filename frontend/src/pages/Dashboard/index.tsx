import React, { useState, useEffect } from "react";
import { Wrapper, Container, FlatList,ItemList } from './styles';

const Dashboard: React.FC = () => {


  return(
   
    <>
    <Wrapper>
      <Container>
      <form onSubmit={()=> this}>
          <span>SEU NOME</span>
          <input name="name" type="name" placeholder="" />
          <span>SUA EMAIL</span>
          <input name="email" type="email" placeholder="exemplo@gmail.com" />
          <span>CPF</span>
          <input name="cpf" type="cpf" placeholder="" />
          <span>Data de Nascimento</span>
          <input name="birthdate" type="date" placeholder="30/01/1900" />
          <span>Salário</span>
          <input name="salary" type="salary" placeholder="" />
          <button type="submit">Registrar
          </button>
        </form>
      </Container>
    </Wrapper>
    <FlatList>
      <ItemList></ItemList>
    </FlatList>
    </>
  )
}
  export default Dashboard;