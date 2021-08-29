import { inject, injectable } from "tsyringe";
import { IShareholdersRepository } from "../../repositories/IShareholdersRepository";


@injectable()
class DeleteShareholderUseCase {
  constructor(
    @inject("ShareholdersRepository")
    private shareholdersRepository: IShareholdersRepository
  ) {}

  async execute(id: string): Promise<void> {
    const shareholderAlreadyExists =
      await this.shareholdersRepository.findById(id);

    if (!shareholderAlreadyExists) {
      throw new Error("Shareholder inexistente!");
    }

    this.shareholdersRepository.delete(id)
  }
}

export { DeleteShareholderUseCase };
