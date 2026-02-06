import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config({
  //path: ".env.test",
  path: process.env.NODE_ENV === "test" ? ".env.test" : undefined,
  override: true,
  debug: false,
});


const prisma = new PrismaClient({
  log: process.env.NODE_ENV === "test" ? [] : ["query", "error"],
});

beforeAll(async () => {
  await prisma.$connect();
});

afterEach(async () => {
  await prisma.$executeRawUnsafe(`SET FOREIGN_KEY_CHECKS = 0;`);

  const tables = await prisma.$queryRaw<
    { table_name: string | null }[]
  >`
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = DATABASE()
      AND table_type = 'BASE TABLE';
  `;

  for (const row of tables) {
    if (!row.table_name) continue; // 🔑 FIX

    await prisma.$executeRawUnsafe(
      `TRUNCATE TABLE \`${row.table_name}\`;`
    );
  }

  await prisma.$executeRawUnsafe(`SET FOREIGN_KEY_CHECKS = 1;`);
});

afterAll(async () => {
  await prisma.$disconnect();
});

(global as any).prisma = prisma;
