import { Router } from "express";
import { shareholdersRoutes } from "./shareholders.routes";
import { stocksRoutes } from "./stocks.routes";

const router = Router();

router.use("/shareholders", shareholdersRoutes);
router.use("/stocks", stocksRoutes);

export { router };
