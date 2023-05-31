import insertStaticData from "@/components/functions/addDataFunction";
import { Product } from "@/models/products.js";
import connectMongo from "@/utils/connectMongoDB";

export default async function getProducts(req, res) {
  if (req.method === "POST") {
    try {
      console.log("Connecting to DB");
      await connectMongo();
      console.log("Connected to DB");

      await insertStaticData(req, res)
    } catch (error) {
      res.status(201).json({ message: `${error.message}` });
    }
  } else if (req.method === "GET") {
    try {
      console.log("Connecting to DB");
      await connectMongo();
      console.log("Connected to DB");

      const { categoryId } = req.query
      const productsData = await Product.find({
        productCategory: categoryId
      });

      res
        .status(201)
        .json({ message: "Data successfully loaded", data: productsData });
    } catch (error) {
      res.status(201).json({ message: `${error.message}` });
    }
  }
}
