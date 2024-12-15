const userAuth = require("./middleware/auth");
const ProructService = require("../service/product-service");

module.exports = (app) => {
  const service = new ProructService();

  app.post("/create-new-product", userAuth, async (req, res, next) => {
    const ProductInput = req.body;
    const { data } = await service.CreateNewProduct(ProductInput);
    res.json(data);
  });

  app.get("/whoami", (req, res, next) => {
    return res.status(200).json({ msg: "/product : I am product Service" });
  });
};
