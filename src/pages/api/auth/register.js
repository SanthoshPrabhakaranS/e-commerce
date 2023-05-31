import { User } from "@/models/user.js";
import connectMongo from "@/utils/connectMongoDB";
import bcrypt from "bcrypt";

export default async function register(req, res) {
  try {
    console.log("Connecting to DB");
    await connectMongo();
    console.log("Connected to DB");

    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: `${error.message}` });
  }
}
