export const AuthVerify = (req, res, next) => {
  const token = req.headers['token'];
  jwt.verify(token, "secret-key", (err, decoded) => {
    if (err) return res.status(401).json({ status: "unauthorized" });
    req.user = decoded.userId;
    next();
  });
}
