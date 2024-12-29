import { ICatalogRepository } from "../interface/catalog.repository.interface";

export class CatalogService {

    private _repository: ICatalogRepository;

    constructor(repository: ICatalogRepository) {
        this._repository = repository
    }

    async createProduct(input: any) {
        // Create a new product
        const data= await this._repository.create(input)
        console.log(data);

        if(!data.id){
            throw new Error('Unable to create product')
        }
        return data
        
    }

    async updateProduct(input: any) {
        // Update a product

    }

    getProductList(limit: number, offset: number) {
        // Get a list of products   

    }

    getProductById(id: number) {
        // Get a product by id

    }

    deleteProduct(id: number) {
        // Delete a product

    }
}