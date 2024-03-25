import cors from "cors";
import "dotenv/config";
import express, { Application, Request, Response } from "express";
import { connectCloudinary } from "./config/cloudinary.config";
import { connectDb } from "./config/db.config";
import myRestaurantRoute from "./routes/restaurant.route";
import myUserRoute from "./routes/user.route";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "OK!" });
});

app.use("/api/my/user", myUserRoute);
app.use("/api/my/restaurant", myRestaurantRoute);

connectDb();
connectCloudinary();

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Server started on localhost:${port}`);
});
