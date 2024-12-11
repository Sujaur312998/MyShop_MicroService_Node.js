module.exports = (app) => {
  app.get("/whoami", (req, res, next) => {
    return res.status(200).json({ msg: "/customer : I am Customer Service" });
  });
};
