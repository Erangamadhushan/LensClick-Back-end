# Project Setup

## Requirements
- Node.js >= 20
- MySQL >= 8
- npm

## Tech Stack
- Node.js + Express
- TypeScript
- Prisma ORM
- MySQL

## Environment Variables

Create a `.env` file in the root:

```env
NODE_ENV=development
PORT=5000

DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/db_name"

JWT_SECRET=your-secret
JWT_EXPIRES_IN=1d

CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx
```

## Installation
```bash
npm install
```

## Prisma Setup
```bash
npx prisma generate
npx prisma migrate dev
```

## Run in Development
```bash
npm run dev
```

## Run Tests
```bash
npm test
```

## 📜 Scripts
| Script                    | Description              |
| ------------------------- | ------------------------ |
| `npm run dev`             | Start development server |
| `npm run build`           | Compile TypeScript       |
| `npm start`               | Run production build     |
| `npm test`                | Run test suite           |
| `npx prisma generate` | Generate Prisma client   |
