import React, { useState, useEffect } from "react";
import { useCallback } from "react";

import api from "../../services/api";

import { Wrapper, Container, FlatList, ItemList } from "./styles";

interface Stocks {
  id: string;
  investment: string;
  acquisition_price: string;
  acquisition: Date;
  quantity: number;
  sale: Date;
  sale_price: number;
  profit: number;
  status: "bought" | "sold",
  created_at: Date;
  updated_at: Date;
}

const Stockmarket: React.FC = () => {
  const [stocks, setStocks] = useState<Stocks[]>([]);

  useEffect(() => {
    async function loadStocks(): Promise<Stocks[] | void> {
      api.get("/stocks").then((response) => {
        setStocks(response.data);
      });
    }
    loadStocks();
  }, [stocks]);

  return (
    <>
      <Wrapper>
        <Container>
          <form onClick={() => api}>
            <span>Investimento</span>
            <input placeholder="" />
            <span>Preço unitário dá ação</span>
            <input name="email" placeholder="" />
            <button type="submit">Comprar</button>
          </form>
        </Container>
        <Container>
          <form onClick={() => api}>
            <span>Data da Venda</span>
            <input name="name" type="name" placeholder="" />
            <span>Preço unitário dá ação</span>
            <input name="email" type="email" placeholder="exemplo@gmail.com" />
            <button type="submit">Vender</button>
          </form>
        </Container>
      </Wrapper>
      <FlatList>
        <ItemList>
          <table>
            <thead>
              <tr className="menu">
                <th>Investimento</th>
                <th>Data da Compra</th>
                <th>Preço Unitário</th>
                <th>Quantidade</th>
                <th>Data da Venda</th>
                <th>Preço de Venda</th>
                <th>Lucro</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="menu-content">
              {stocks.map((stock) => (
                <tr key={stock.id}>
                  <td>{stock.investment}</td>
                  <td>{stock.acquisition}</td>
                  <td>{stock.acquisition_price}</td>
                  <td>{stock.quantity}</td>
                  <td>{stock.sale}</td>
                  <td>{stock.sale_price}</td>
                  <td>{stock.profit}</td>
                  <td>{stock.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ItemList>
      </FlatList>
    </>
  );
};
export default Stockmarket;
