import { inject, injectable } from "tsyringe";

import { Shareholder } from "../../entities/Shareholder";

import { IShareholdersRepository } from "../../repositories/IShareholdersRepository";

@injectable()
class UpdateShareholderUseCase {
  constructor(
    @inject("ShareholdersRepository")
    private shareholdersRepository: IShareholdersRepository
  ) {}

  async execute(id,{ name, email, birthdate, salary }): Promise<Shareholder> {
    const shareholder = await this.shareholdersRepository.findById(id)

    if(!shareholder) throw new Error("User do not exists")

    await this.shareholdersRepository.update(id,{
      name,
      email,
      birthdate,
      salary
    })
    return shareholder
}
}

export { UpdateShareholderUseCase }
