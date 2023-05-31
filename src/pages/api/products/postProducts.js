import insertStaticData from "@/components/functions/addDataFunction";
import { Product } from "@/models/products.js";
import connectMongo from "@/utils/connectMongoDB";

export default async function addProducts(req, res) {
  if (req.method === "POST") {
    try {
      console.log("Connecting to DB");
      await connectMongo();
      console.log("Connected to DB");

      await insertStaticData(req, res)
    } catch (error) {
      res.status(201).json({ message: `${error.message}` });
    }
  }
}
