import { getRepository, Repository } from "typeorm";
import { Shareholder } from "../../entities/Shareholder";

import {
  ICreateShareholderDTO,
  IShareholdersRepository,
} from "../IShareholdersRepository";

class ShareholdersRepository implements IShareholdersRepository {
  private repository: Repository<Shareholder>;

  constructor() {
    this.repository = getRepository(Shareholder);
  }

  async create({
    name,
    email,
    cpf,
    birthdate,
    salary,
  }: ICreateShareholderDTO): Promise<void> {
    const shareholder = this.repository.create({
      name,
      email,
      cpf,
      birthdate,
      salary,
    });

    await this.repository.save(shareholder);
  }

  async findByName(cpf: string): Promise<Shareholder> {
    const shareholder = await this.repository.findOne({ cpf });
    return shareholder;
  }
  async findById(id: string): Promise<Shareholder> {
    const shareholder = await this.repository.findOne({ id });
    return shareholder;
  }

  async list(): Promise<Shareholder[]> {
    const shareholders = await this.repository.find();
    return shareholders;
  }

  async update(
    id,
    { name, email, birthdate, salary }: ICreateShareholderDTO
  ): Promise<Shareholder|void> {
     await this.repository.findOne(id);

    const shareholder = await this.repository.update(id, {
      name,
      email,
      birthdate,
      salary,
      updated_at: new Date()
    });

    await this.repository.save({id ,shareholder})
  }

  async delete(id): Promise<void> {
    await this.repository.findOne(id)

    await this.repository.delete(id)
  }
}
export { ShareholdersRepository };
