const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const cookieParser = require('cookie-parser');

module.exports.registerUser = async (req, res) => {
    try {
        const { username, email, password, role = "user" } = req.body;

        // Validate required fields
        if (!username || !email || !password) {
            return res.status(400).json({ message: "Username, email, and password are required" });
        }

        const isUserExists = await User.findOne(
            {
                $or: [
                    { username },
                    { email }
                ]
            })
        if (isUserExists) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashPswrd = await bcrypt.hash(password, 10);
        const user = new User({
            username, email, password: hashPswrd, role
        })
        await user.save();
        const token = jwt.sign({ id: user._id, role: user.role },
            process.env.SECRET_KEY);
        res.status(201).json({
            message: "User created successfully",
            user: { id: user._id, username: user.username, email: user.email, role: user.role },
            token
        })
    } catch (err) {
        res.status(500).json({ message: "Error registering user", error: err.message });
    }

}

module.exports.Login = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.findOne({
            $or: [
                { username },
                { email }
            ]
        })
        if (!user) {
            return res.status(409).json("Not valid credentials")
        }
        const validPswrd = await bcrypt.compare(password, user.password);
        if (!validPswrd) {
            return res.status(409).json("Not valid credentials")
        }

        const token = jwt.sign({ id: user._id, role: user.role },
            process.env.SECRET_KEY);
             res.cookie('token', token);


        res.status(200).json({
            message: "user Logged in sucessfuly",
            user: { username: user.username, email: user.email, role: user.role },
            token
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json("error while login", err);
    }

}
module.exports.Logout = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: "User logged out successfully" });
}