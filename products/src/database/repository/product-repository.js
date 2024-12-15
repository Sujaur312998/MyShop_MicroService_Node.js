const { ProductModel } = require("../model");

class ProductRepository {
  // Create Product
  async CreateProducts(ProductInput) {
    
    const product = new ProductModel(ProductInput);
    const productResult = await product.save();
    return productResult;
  }

  //All Products
  async Products() {
    return await ProductModel.find();
  }

  //Find by ID
  async FindById(id) {
    return await ProductModel.findById(id);
  }

  //Find by Category
  async FindByCategory(category) {
    const products = await ProductModel.find({ type: category });
    return products;
  }

  //FindSelected Products
  async FindSelectedProducts(selectedIds) {
    const products = await ProductModel.find()
      .where("_id")
      .in(selectedIds.map((_id) => _id))
      .exec();
    return products;
  }
}

module.exports = ProductRepository;
