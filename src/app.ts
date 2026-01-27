import * as http from "http";
import { categoriesController } from "./controllers/categories-controller";
import { HttpMethod } from "./utils/http-methods";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse,
) => {
  if (request.method === HttpMethod.GET) {
    await categoriesController(request, response);
  } else {
    response.writeHead(405, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: "Método não permitido" }));
  }
};
