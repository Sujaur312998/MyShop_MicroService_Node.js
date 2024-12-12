module.exports = (app) => {
  app.get("/whoami", (req, res, next) => {
    return res.status(200).json({ msg: "/shopping : I am shopping Service" });
  });
};
