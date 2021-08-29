import { Response, Request } from "express";
import { container } from "tsyringe";
import { DeleteShareholderUseCase } from "./DeleteShareholderUseCase";

class DeleteShareholderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;

    const deleteShareholderUseCase = container.resolve(
      DeleteShareholderUseCase
    );

    await deleteShareholderUseCase.execute(id);

    return response.status(201).send();
  }
}

export { DeleteShareholderController };
