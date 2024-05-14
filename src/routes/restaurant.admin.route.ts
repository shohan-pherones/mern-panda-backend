import express, { Router } from "express";
import { param } from "express-validator";
import {
  getRestaurant,
  searchRestaurant,
} from "../controllers/restaurant.admin.controller";

const router: Router = express.Router();

router.get(
  "/:restaurantId",
  param("restaurantId")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Restaurant ID parameter must be a valid string"),
  getRestaurant
);

router.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City parameter must be a valid string"),
  searchRestaurant
);

export default router;
