# Architecture Overview

## Tech Stack
- Node.js
- Express (TypeScript)
- Prisma ORM
- MySQL
- JWT Authentication

## High-Level Architecture
```bash
Client
  ↓ HTTP (REST)
Express Server
  ↓
Modules (Business Logic)
  ↓
Prisma ORM
  ↓
MySQL Database
```

## Folder Structure Explained

### src/server.ts
Application entry point.  
Starts the HTTP server and listens on the configured port.

### src/app.ts
Responsible for:
- Initializing Express
- Registering middlewares
- Attaching routes

### src/routes.ts
Central route registry.
Combines routes from all modules into a single router.

### src/modules/
Feature-based modules.
Each module contains:
- Routes
- Controllers
- Services
- Validators

Purpose:
- Clear separation of concerns
- Easy scalability

### src/middlewares/
Global and route-specific middlewares:
- Authentication (JWT)
- Request validation (Zod)
- Error handling
- Security

### src/config/
Centralized configuration:
- Environment variables
- Application constants

### src/utils/
Reusable helper functions:
- Token helpers
- Response helpers
- Common utilities
- AsyncHandle helper

### prisma/
- Prisma schema
- Migrations
- Generated client
