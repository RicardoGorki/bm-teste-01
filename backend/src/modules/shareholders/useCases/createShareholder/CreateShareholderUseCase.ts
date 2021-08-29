import { inject, injectable } from "tsyringe";
import { IShareholdersRepository } from "../../repositories/IShareholdersRepository";

interface IRequest {
  name: string;
  email: string;
  cpf: string;
  birthdate: Date;
  salary: number;
}

@injectable()
class CreateShareholderUseCase {
  constructor(
    @inject("ShareholdersRepository")
    private shareholdersRepository: IShareholdersRepository
  ) {}

  async execute({
    name,
    email,
    cpf,
    birthdate,
    salary,
  }: IRequest): Promise<void> {
    const shareholderAlreadyExists =
      await this.shareholdersRepository.findByName(cpf);

    if (shareholderAlreadyExists) {
      throw new Error("CPF já cadastrado!");
    }

    this.shareholdersRepository.create({ name, email, cpf, birthdate, salary });
  }
}

export { CreateShareholderUseCase };
