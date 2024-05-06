import { Router, Request, Response } from "express";
import axios from "axios";
import { groupUsersByDepartment } from "../utils/groupUsers";
import type { User } from "../utils/groupUsers";

const router = Router();

// https://dummyjson.com/users

router.get("/", async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get<{ users: User[] }>(
      `https://dummyjson.com/users`
    );

    const resultUsers = groupUsersByDepartment(data?.users);

    res.json(resultUsers);
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Internal Server Error",
    });
  }
});

export default router;
