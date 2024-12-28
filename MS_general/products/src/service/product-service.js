const ProductRepository= require('../database/repository/product-repository')

const {FormateData}= require('../utils')


class ProductService{
    constructor(){
        this.repository= new ProductRepository()
    }

    async CreateNewProduct(ProductInput){
        const ProductResult= await this.repository.CreateProducts(ProductInput)
        return FormateData(ProductResult)
    }

}


module.exports= ProductService