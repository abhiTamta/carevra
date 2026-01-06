const connectDB = require("../config/db");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

// User Login
exports.userLogin = async (req, res) => {
  try {
    const connection = await connectDB();
    const { identifier, password } = req.body;
    const [rows] = await connection.execute(
      "SELECT * FROM users WHERE username = ? OR email = ? OR phone = ?",
      [identifier, identifier, identifier]
    );

    if (!rows.length) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const user = rows[0];

    const md5Hash = crypto.createHash("md5").update(password).digest("hex");

    if (md5Hash !== user.password) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
        phone: user.phone,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login Successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

exports.userRegister = async (req, res) => {
  try {
    const connection = await connectDB();
    const { username, email, phone, password } = req.body;

    if (!username || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const md5Hash = crypto.createHash("md5").update(password).digest("hex");
    await connection.execute(
      "INSERT INTO users (username, email, phone, password) VALUES (?, ?, ?, ?)",
      [username, email, phone, md5Hash]
    );
    res.json({ message: "User Registered Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
