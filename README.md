# LensClick-Back-end

A scalable and modular **REST API backend** built with **Node.js, Express, TypeScript, Prisma ORM, and MySQL**.  
Designed following real-world backend practices with clear separation of concerns, documentation-first mindset, and test support.

---

## ✨ Features

- Modular architecture (feature-based)
- Type-safe database access using Prisma
- JWT-based authentication
- Request validation with Zod
- Secure HTTP headers with Helmet
- Rate limiting for APIs
- File uploads using Multer (Cloudinary ready)
- Automated testing with Jest & Supertest
- Environment-based configuration

---

## 🛠 Tech Stack

- **Runtime** : Node.js
- **Framework** : Express 5
- **Language** : TypeScript
- **ORM** : Prisma
- **DB** : MySQL
- **Auth** : JWT + bcrypt
- **Validation** : Zod
- **Uploads** : Multer + Cloudinary
- **Security** : Helmet, Rate limit
- **Testing** : Jest + Supertest

---

## 📁 Project Structure

```
src/
├─ app.ts # Express app configuration
├─ server.ts # Application entry point
├─ routes.ts # Central route registry
├─ config/ # Environment & config
├─ middlewares/ # Auth, validation, errors
├─ modules/ # Feature-based modules
├─ utils/ # Shared utilities
|─ prisma/
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 20
- MySQL >= 8
- npm

---

### Installation

```bash
npm install
```

Environment Variables

Create a `.env` file in the project root:

```bash
DATABASE_URL="mysql://root:root@localhost:3306/photography_db"

PORT=4000
JWT_SECRET=xxxx
JWT_EXPIRES_IN=1d
ALBUM_TOKEN_SECRET=xxxx
ALBUM_TOKEN_EXPIRES_IN=30d

CLOUDINARY_CLOUD_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx

```

Test environments use:
- `.env.test`
- `.env.test.v1`

## Prisma Setup

### Generate Prisma client:

```bash
npx prisma generate
```

### Run migrations:
```bash
npx prisma migrate dev
```

### Run in Development
```bash
npm run dev
```

### Build & Run in Production
```bash
npm run build
npm start
```

## 🧪 Testing

### Run all tests:
```bash
npm test
```

### Watch mode:
```bash
npx run test:watch
```

## 📜 Scripts
| Script                    | Description              |
| ------------------------- | ------------------------ |
| `npm run dev`             | Start development server |
| `npm run build`           | Compile TypeScript       |
| `npm start`               | Run production build     |
| `npm test`                | Run test suite           |
| `npx prisma generate` | Generate Prisma client   |

## 📚 Documentation

Detailed documentation is available in the `docs/` directory:

- [Setup Guide](./docs/setup.md)
- [Architecture Overview](./docs/architecture.md)
- [API Reference](./docs/api.md)
- [Architecture Decision](./docs/decisions/)
- [Troubleshooting](./docs/troubleshooting.md)


## 🧠 Documentation Philosophy

### This project follows a documentation-first approach:

- Major architectural decisions are documented
- APIs are documented independently of code
- Common issues and fixes are recorded
- Docs evolve with the codebase

## 🤝 Contributing

- Fork the repository
- Create a new branch (feature/my-feature)
- Commit your changes
- Open a Pull Request


