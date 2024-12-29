import { ICatalogRepository } from "../interface/catalog.repository.interface";

export class CatalogService {

    private _repository: ICatalogRepository;

    constructor(repository: ICatalogRepository) {
        this._repository = repository
    }

    createProduct(input: any) {
        // Create a new product

    }

    updateProduct(input: any) {
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