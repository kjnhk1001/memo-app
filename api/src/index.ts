import express from "express";
import cors from "cors";
import apiRoutes from "./routes";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
