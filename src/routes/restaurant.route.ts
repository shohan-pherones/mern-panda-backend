import express, { Router } from "express";
import { upload } from "../utils/multer.util";
import { createMyRestaurant } from "../controllers/restaurant.controller";

const router: Router = express.Router();

router.post("/", upload.single("imageFile"), createMyRestaurant);

export default router;
