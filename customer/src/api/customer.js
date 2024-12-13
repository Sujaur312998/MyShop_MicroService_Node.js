const CustomerService = require("../service/customer-service");
const userAuth = require("./middleware/auth");

module.exports = (app) => {
  const service = new CustomerService();

  app.post("/login", async (req, res, next) => {
    const { email, password } = req.body;
    const { data } = await service.SignIn({ email, password });
    res.json(data);
  });

  app.post("/signup", async (req, res, next) => {
    const { email, password, phone } = req.body;
    const { data } = await service.SignUp({ email, password, phone });
    res.json(data);
  });

  app.post("/address", userAuth, async (req, res) => {
    const { _id } = req.user;
    const { street, postalCode, city, country } = req.body;

    const { data } = await service.AddAddress(_id, {
      street,
      postalCode,
      city,
      country,
    });
    res.json(data);
  });

  app.get("/whoami", (req, res, next) => {
    return res.status(200).json({ msg: "/customer : I am Customer Service" });
  });
};
