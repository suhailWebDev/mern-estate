import User from "../models/users.models.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res,next) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword=bcryptjs.hashSync(password,10);

        // Create new user
        const newUser = new User({ username, email, password:hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      next(error);
    }
};
