import cors from "cors";
import "dotenv/config";
import express, { Application, Request, Response } from "express";
import { connectCloudinary } from "./config/cloudinary.config";
import { connectDb } from "./config/db.config";
import orderRoutes from "./routes/order.route";
import restaurantRoute from "./routes/restaurant.admin.route";
import myRestaurantRoute from "./routes/restaurant.route";
import myUserRoute from "./routes/user.route";

const app: Application = express();

app.use(cors());

app.use("/api/order/checkout/webhook", express.raw({ type: "*/*" }));

app.use(express.json());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "OK!" });
});

app.use("/api/my/user", myUserRoute);
app.use("/api/my/restaurant", myRestaurantRoute);
app.use("/api/restaurant", restaurantRoute);
app.use("/api/order", orderRoutes);

connectDb();
connectCloudinary();

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Server started on localhost:${port}`);
});
