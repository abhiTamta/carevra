const jwt = require("jsonwebtoken");
const { id } = require("zod/locales");

exports.adminUser = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Authorization header missing or malformed" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    res.json({
      id: decoded.user_id,
      username: decoded.username,
      role: decoded.role,
    });
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
