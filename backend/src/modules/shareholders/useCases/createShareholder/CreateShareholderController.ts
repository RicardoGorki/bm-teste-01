import { Response, Request } from "express";
import { container } from "tsyringe";
import { CreateShareholderUseCase } from "./CreateShareholderUseCase";

class CreateShareholderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, cpf, birthdate, salary } = request.body;

    const createShareholderUseCase = container.resolve(
      CreateShareholderUseCase
    );

    await createShareholderUseCase.execute({
      name,
      email,
      cpf,
      birthdate,
      salary,
    });
    return response.status(201).send();
  }
}

export { CreateShareholderController };
