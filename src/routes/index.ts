import { Router } from "express";
import usersRouter from "./users.routes";

// Create a new Router instance
const router = Router();

router.use("/groupUsers", usersRouter);

export default router;
