import { Router } from "express";

import { CreateShareholderController } from "../modules/shareholders/useCases/createShareholder/CreateShareholderController";
import { ListShareholderController } from "../modules/shareholders/useCases/listShareholder/ListShareholderController"
import { UpdateShareholderController } from "../modules/shareholders/useCases/updateShareholder/UpdateShareholderController";
import { DeleteShareholderController } from "../modules/shareholders/useCases/deleteShareholder/DeleteShareholderController";

const shareholdersRoutes = Router();

const createShareholderController = new CreateShareholderController();
const listShareholderController = new ListShareholderController();
const updateShareholderController = new UpdateShareholderController()
const deleteShareholderController = new DeleteShareholderController()

shareholdersRoutes.get("/", listShareholderController.handle);
shareholdersRoutes.post("/", createShareholderController.handle);
shareholdersRoutes.put("/:id", updateShareholderController.handle)
shareholdersRoutes.delete("/:id", deleteShareholderController.handle)


export { shareholdersRoutes };
