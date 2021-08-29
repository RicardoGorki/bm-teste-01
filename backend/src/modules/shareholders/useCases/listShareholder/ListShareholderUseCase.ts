import { inject, injectable } from "tsyringe";

import { Shareholder } from "../../entities/Shareholder";

import { IShareholdersRepository } from "../../repositories/IShareholdersRepository";

@injectable()
class ListShareholderUseCase {
  constructor(
    @inject("ShareholdersRepository")
    private shareholdersRepository: IShareholdersRepository
  ) {}

  async execute(): Promise<Shareholder[]> {
    const shareholders = await this.shareholdersRepository.list()

    return shareholders
  }
}

export { ListShareholderUseCase }
