
---
# Node.js TS Portfolio Service (read-only)

## Project Description
A REST API built with **Node.js** and **TypeScript** to provide centralized portfolio information in a **read-only** format.  
This API exposes personal data, professional experiences, projects, skills, academic background, and languages in JSON.  
Note: The API is REST-based but read-only, since it only implements the **GET** method.

## Domain
Read-only server that delivers portfolio information for consumption by client applications.

## Features
- List portfolio information by categories:
  - Professional Experiences
  - Projects
  - Skills (Hard and Soft)
  - Academic Background
  - Languages
- Filter specific categories through dedicated routes.
- Responses in JSON format.

## Endpoints
- `GET /api/list` → Returns all portfolio information  
- `GET /api/personalInfo` → Returns personal information  
- `GET /api/list/skills` → Returns skills (hard and soft)  
- `GET /api/list/languages` → Returns languages  
- `GET /api/list/portfolio` → Returns portfolio projects  
- `GET /api/list/professionalExperiences` → Returns professional experiences  
- `GET /api/list/academic` → Returns academic background  

## Example Response (`GET /api/list`)
```json
{
  "name": "Name",
  "photo": "GitHub photo link",
  "job": "Focus area",
  "linkedin": "https://www.linkedin.com/in/your-link",
  "location": "Your location",
  "phone": "(21) xxxxx-xxxx",
  "email": "your@mail.com",
  "skills": {
    "hardSkills": [
      { "id": "1", "name": "JavaScript", "logo": "icon-link" },
      { "id": "2", "name": "React", "logo": "icon-link" }
    ],
    "softSkills": [
      { "id": "1", "name": "Communication" },
      { "id": "2", "name": "Teamwork" },
      { "id": "3", "name": "Problem solving" }
    ]
  },
  "languages": [
    { "id": "1", "language": "Portuguese BR (Native)" },
    { "id": "2", "language": "English (Advanced)" }
  ],
  "portfolio": {
    "projects": [
      {
        "id": "1",
        "name": "Project Name",
        "description": "Description here",
        "repository": "Repository link",
        "deploy": "Demo link",
        "repo": true
      }
    ]
  },
  "professionalExperience": {
    "experiences": [
      {
        "id": "1",
        "name": "Role - Company",
        "period": "month year - month year",
        "description": "Description here."
      }
    ]
  },
  "academic": {
    "course": [
      {
        "id": "1",
        "name": "Course and Institution",
        "period": "month year - month year"
      }
    ]
  }
}
```

## Example Response (`GET /api/academic`)
```json
{
  "academic": {
    "course": [
      {
        "id": "1",
        "name": "Course and Institution",
        "period": "month year - month year"
      }
    ]
  }
}
```

## Status Codes
- `200 OK` → Successful request with data  
- `204 No Content` → Successful request, no data available  
- `404 Not Found` → Route not found  

## Installation & Usage

### Requirements
- Node.js v18+  
- NPM  

### Clone the Repository
```bash
git clone https://github.com/TiagoLeopoldo/node-ts-portfolio-api.git
cd node-ts-portfolio-api
npm install
```

### Development
Run the server in development mode (using `.env` for local port):
```bash
npm run start:dev
```

Run the server with file watching:
```bash
npm run start:watch
```

### Build
Generate the production build (with assets copied):
```bash
npm run dist
```

Run the built server locally:
```bash
npm run start:dist
```

### Scripts Overview
- `start:dev` → Run `local-server.ts` with tsx and environment variables  
- `start:watch` → Run `local-server.ts` with tsx in watch mode  
- `dist` → Build with tsup and copy JSON assets  
- `start:dist` → Build and run production server from `dist`  
- `vercel` → Run `server.ts` (export-only handler) for deployment compatibility  

## Local vs Vercel
- **Local development** uses `local-server.ts` with `http.createServer(app)` and `.env` for port configuration.  
- **Vercel deployment** uses `server.ts`, which exports `app` directly as a serverless handler. No `PORT` is required in production.

## Technologies
- Node.js (native HTTP)  
- TypeScript  
- tsx  
- tsup  
- dotenv  
- NPM  
- Vercel (serverless deployment)  

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

2026 Tiago Leopoldo

---