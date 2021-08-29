import { container } from "tsyringe";

import { IShareholdersRepository } from "../../modules/shareholders/repositories/IShareholdersRepository";
import { ShareholdersRepository } from "../../modules/shareholders/repositories/implementations/ShareholdersRepository";
import { IStocksRepository } from "../../modules/stocks/repositories/IStocksRepository"
import { StocksRepository } from "../../modules/stocks/repositories/implementations/StocksRepository"


container.registerSingleton<IShareholdersRepository>(
  "ShareholdersRepository",
  ShareholdersRepository
);

container.registerSingleton<IStocksRepository>(
  "StocksRepository", StocksRepository
)

