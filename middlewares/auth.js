const jwt = require("jsonwebtoken");
require("dotenv/config");

module.exports = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    res.json({ message: "Acces denied no token provided." });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.json({ message: "Invalid token" });
  }
};