import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateShareholderUseCase } from "./UpdateShareholderUseCase";

class UpdateShareholderController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { name, email, birthdate, salary } = request.body;

    const updateShareholderUseCase = container.resolve(
      UpdateShareholderUseCase
    );

    await updateShareholderUseCase.execute( id,{ name, email, birthdate, salary});
    return response.status(201).json({name, email, birthdate, salary});
    }
}

export { UpdateShareholderController }
