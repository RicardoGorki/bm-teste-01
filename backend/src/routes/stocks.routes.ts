import { Router } from "express";

import { CreateStocksController } from "../modules/stocks/useCases/createStocks/CreateStocksController"
import { UpdateStocksController } from "../modules/stocks/useCases/updateStocks/UpdateStocksController"
import { ListStocksController } from "../modules/stocks/useCases/listStocks/ListStocksController";

const stocksRoutes = Router();

const listStocksController = new ListStocksController()
const createStocksController = new CreateStocksController();
const updateStocksController = new UpdateStocksController()

stocksRoutes.get("/", listStocksController.handle)
stocksRoutes.post("/", createStocksController.handle);
stocksRoutes.put("/:id", updateStocksController.handle)

export { stocksRoutes };
