import { Shareholder } from "../entities/Shareholder";

interface ICreateShareholderDTO {
  name: string;
  email: string;
  cpf: string;
  birthdate: Date;
  salary: number;

}

interface IShareholdersRepository {
  create({name, email, cpf, birthdate, salary}: ICreateShareholderDTO): Promise<void>
  findByName(cpf: string): Promise<Shareholder>
  list(): Promise<Shareholder[]>
  update(id: string,{name, email, birthdate, salary}): Promise<Shareholder | void>
  findById(id: string): Promise<Shareholder>
  delete(id: string): Promise<void>
}


export { IShareholdersRepository, ICreateShareholderDTO }
