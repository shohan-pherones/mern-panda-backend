import express, { Router } from "express";
import {
  createCurrentUser,
  getCurrentUser,
  updateCurrentUser,
} from "../controllers/user.controller";
import { validateMyUserRequest } from "../dto/user.dto";
import { jwtCheck, jwtParse } from "../middlewares/auth.middleware";

const router: Router = express.Router();

router.get("/", jwtCheck, jwtParse, getCurrentUser);
router.post("/", jwtCheck, createCurrentUser);
router.put("/", jwtCheck, jwtParse, validateMyUserRequest, updateCurrentUser);

export default router;
