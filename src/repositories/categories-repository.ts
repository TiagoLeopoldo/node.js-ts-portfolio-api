import fs from "fs";
import path from "path";
import { PortfolioDataModel } from "../models/categories-model";

const pathData = path.join(
  __dirname,
  "categories-profile.json",
);

export const repositoryCategories = async (): Promise<PortfolioDataModel> => {
  const rawData = fs.readFileSync(pathData, "utf-8");
  let jsonFile = JSON.parse(rawData);

  return jsonFile;
};
