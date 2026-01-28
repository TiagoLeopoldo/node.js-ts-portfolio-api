import * as http from "http";
import { categoriesController } from "./controllers/categories-controller";
import { HttpMethod } from "./utils/http-methods";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse,
) => {
  
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");

  response.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=300"
  );

  if (request.method === "OPTIONS") {
    response.writeHead(200);
    return response.end();
  }

  if (request.method === HttpMethod.GET) {
    await categoriesController(request, response);
  } else {
    response.writeHead(405, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: "Método não permitido" }));
  }
};
