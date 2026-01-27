import { PortfolioDataModel } from "../models/categories-model";
import { ResponseListModel } from "../models/response-list-model";
import { repositoryCategories } from "../repositories/categories-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListCategories = async (): Promise<ResponseListModel> => {

  const data = await repositoryCategories();

  if (Object.keys(data).length !== 0) {
    return {
      statusCode: StatusCode.OK,
      body: data
    };
  };

  return {
    statusCode: StatusCode.NOCONTENT,
    body: null
  }
};
