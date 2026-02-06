import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: process.env.NODE_ENV === "test" ? [] : ["query", "error"],
});

beforeAll(async () => {
  await prisma.$connect();
});

afterEach(async () => {
  // Disable FK checks
  await prisma.$executeRawUnsafe(`SET FOREIGN_KEY_CHECKS = 0;`);

  const tableNames = await prisma.$queryRaw<
    { table_name: string }[]
  >`
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = DATABASE();
  `;

  for (const { table_name } of tableNames) {
    await prisma.$executeRawUnsafe(`TRUNCATE TABLE \`${table_name}\`;`);
  }

  // Enable FK checks
  await prisma.$executeRawUnsafe(`SET FOREIGN_KEY_CHECKS = 1;`);
});

afterAll(async () => {
  await prisma.$disconnect();
});

(global as any).prisma = prisma;
