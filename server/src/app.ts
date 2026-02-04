import express from "express";
import helmet from "helmet";
import routes from "./routes";
import cors from "cors";

import { apiLimiter } from "./middlewares/rateLimit.middleware";

const app = express();

app.use(cors(
  {
    origin: "http://localhost:3000",
    // credentials: true // Allow cookies to be sent
    
  }
));
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  }),
);
app.use(express.json());
app.use(apiLimiter);

app.use("/api", routes);

export default app;
