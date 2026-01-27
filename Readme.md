
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
Run the server in development mode:
```bash
npm run start:dev
```

Run the server with file watching:
```bash
npm run start:watch
```

### Build
Generate the production build:
```bash
npm run dist
```

Run the built server:
```bash
npm run start:dist
```

### Scripts Overview
- `start:dev` → Run with tsx and environment variables  
- `start:watch` → Run with tsx in watch mode  
- `dist` → Build with tsup  
- `start:dist` → Build and run production server  

## Technologies
- Node.js (native HTTP)  
- TypeScript  
- tsx  
- tsup  
- NPM  

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

2026 Tiago Leopoldo

---