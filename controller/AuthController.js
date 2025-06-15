import { JWT_SECRET } from "../config/config.js";
import UserModel from "../model/UserModel.js";
import jwt from "jsonwebtoken"

// Register Controller

// Register Controller
export const RegisterController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Direct save without hashing (not secure but simple)
        const user = new UserModel({ email, password });
        await user.save();

        return res.status(201).json({ message: "User created successfully" });

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};


// Login Controller
export const LoginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check user exists
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Password Match (direct comparison)
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate Token
        const token = jwt.sign(
            { id: user._id, email: user.email },
            JWT_SECRET,
            { expiresIn: "1d" }
        );

        return res.status(200).json({ token });

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};











