import express from "express";
import {
  createCurrentUser,
  updateCurrentUser,
} from "../controllers/user.controller";
import { validateMyUserRequest } from "../dto/user.dto";
import { jwtCheck, jwtParse } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/", jwtCheck, createCurrentUser);
router.put("/", jwtCheck, jwtParse, validateMyUserRequest, updateCurrentUser);

export default router;
