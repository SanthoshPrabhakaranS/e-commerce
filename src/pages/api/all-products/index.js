import insertStaticData from "@/components/functions/addDataFunction";
import { Product } from "@/models/products.js";
import connectMongo from "@/utils/connectMongoDB";

export default async function getProducts(req, res) {
  if (req.method === "GET") {
    try {
      console.log("Connecting to DB");
      await connectMongo();
      console.log("Connected to DB");

      const productsData = await Product.find({});

      res.json({ message: "Data successfully loaded", data: productsData });
    } catch (error) {
      res.status(201).json({ message: `${error.message}` });
    }
  }
}
