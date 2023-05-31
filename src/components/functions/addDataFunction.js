import { products } from "@/data/data";
import { Product } from "@/models/products";

export default async function insertStaticData(req, res) {
    try {
      await Product.insertMany(products); // Insert the static data into the database using the Product model
  
      res.status(200).json({ message: "Static data inserted successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }