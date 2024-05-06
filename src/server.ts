import "module-alias/register";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./routes";

const app: Application = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use routes
app.use("/", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World from TypeScript!");
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
