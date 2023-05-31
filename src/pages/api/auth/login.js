import { User } from "@/models/user.js";
import connectMongo from "@/utils/connectMongoDB";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export default async function login(req, res) {
  try {
    console.log("Connecting to DB");
    await connectMongo();
    console.log("Connected to DB");

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(200).json({ message: "User does not exist!" });
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword)
      return res.status(200).json({ message: "Invalid credentials!" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.status(201).json({ token, userId: user._id, username: user.name });

  } catch (error) {
    res.status(500).json({ message: `${error.message}` });
  }
}
