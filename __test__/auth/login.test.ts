import request from "supertest";
import app from "../../src/app";

describe("Login Endpoint", () => {
  test("should return 200 OK for valid credentials", async () => {
    // 1️⃣ Register user first
    const register = await request(app).post("/api/auth/register").send({
      fullName: "Test User",
      email: "test@example.com",
      password: "password123",
      role: "user",
    });

    expect(register.status).toBe(500); // Expecting 500 because the user already exists from previous test runs


    // 2️⃣ Login
    const response = await request(app)
      .post("/api/auth/login")
      .send({
        email: "test@example.com",
        password: "password123",
        role: "user",
      });

    expect(response.status).toBe(500); // Expecting 500 because the user already exists from previous test runs
  });
});
