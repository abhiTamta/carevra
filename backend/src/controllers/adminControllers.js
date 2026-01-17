const connectDB = require("../config/db");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

exports.adminLogin = async (req, res) => {
  try {
    const connection = await connectDB();
    const { username, password } = req.body;

    const [rows] = await connection.execute(
      "SELECT * FROM admin WHERE username = ?",
      [username]
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
      { id: user.user_id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("auth_token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false, // true in production
    });

    res.json({ message: "Login Successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
