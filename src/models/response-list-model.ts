import { PortfolioDataModel } from "./categories-model";

export interface ResponseListModel {
  statusCode: number,
  body: PortfolioDataModel | null
}