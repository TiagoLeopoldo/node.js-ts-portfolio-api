import { IncomingMessage, ServerResponse } from "http";
import { serviceListCategories } from "../services/list-categories-service";
import { Routes } from "../routes/routes";
import { StatusCode } from "../utils/status-code";
import { ResponseListModel } from "../models/response-list-model";

export const categoriesController = async (
  request: IncomingMessage,
  response: ServerResponse,
) => {
  const content: ResponseListModel = await serviceListCategories();

  switch (request.url) {
    case Routes.LIST:
      response.writeHead(content.statusCode, { "content-type": "application/json" });
      response.end(JSON.stringify(content.body));
      break;

    case Routes.PERSONAL_INFOS:
      response.writeHead(content.statusCode, { "content-type": "application/json" });
      response.end(JSON.stringify(content.body?.personalInfos));
      break;

    case Routes.SKILLS:
      response.writeHead(content.statusCode, { "content-type": "application/json" });
      response.end(JSON.stringify(content.body?.skills));
      break;

    case Routes.LANGUAGES:
      response.writeHead(content.statusCode, { "content-type": "application/json" });
      response.end(JSON.stringify(content.body?.languages));
      break;

    case Routes.PORTFOLIO:
      response.writeHead(content.statusCode, { "content-type": "application/json" });
      response.end(JSON.stringify(content.body?.portfolio));
      break;

    case Routes.PROFESSIONAL_EXPERIENCES:
      response.writeHead(content.statusCode, { "content-type": "application/json" });
      response.end(JSON.stringify(content.body?.professionalExperiences));
      break;

    case Routes.ACADEMIC:
      response.writeHead(content.statusCode, { "content-type": "application/json" });
      response.end(JSON.stringify(content.body?.academic));
      break;

    default:
      response.writeHead(StatusCode.NOTFOUND, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ error: "Rota não encontrada" }));
      break;
  }
};
