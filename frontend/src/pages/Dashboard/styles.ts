import styled from "styled-components";

export const Wrapper = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  height: 450px;
  text-align: center;
  padding: 15px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;

  form{
    display: flex;
    flex-direction: column;

    input{
      width: 300px;
      height: 45px;
      font-size: 12px;
      line-height: 15px;
      background: #ffffff 0% 0% no-repeat padding-box;
      align-self: center;
      border: 1px solid #dddddd;
      border-radius: 4px;
      color: #999999;
      padding: 0 15px;
      margin: 0 0 8px;
      &:hover {
        color: rgba(0, 0, 0, 0.7);
      }
    }
    button {
      align-self: center;
      width: 200px;
      height: 45px;
      font-weight: bold;
      font-size: 16px;
      margin-top: 5px;
      color: #fff;
      background: #b1b1b1 0% 0% no-repeat padding-box;
      border: 0;
      border-radius: 4px;
      transition: 0.2s;
      &:hover {
        color: rgba(0, 0, 0, 0.7);
      }
    }
  }
`;

export const FlatList = styled.div`
  max-height: 100%;
  max-width: 100%;
  padding: 20px;
  box-shadow: 0px 0px 2px;
  display: flex;
  justify-content: center;
`;

export const ItemList = styled.div`
  width: 700px;
  max-width: 100%;
  height: 400px;
  max-height: 100%;
  padding: 30px;
  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;
`;
