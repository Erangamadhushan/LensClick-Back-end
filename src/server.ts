import app from "./app";
import env from "./config/env";

const PORT = Number(env.PORT) || 4000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
