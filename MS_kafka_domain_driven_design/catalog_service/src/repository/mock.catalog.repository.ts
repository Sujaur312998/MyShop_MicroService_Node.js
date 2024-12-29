import { ICatalogRepository } from "../interface/catalog.repository.interface";
import { Product } from "../model/product.model";

export class MockCatelogRepository implements ICatalogRepository{
    create(data: Product): Promise<Product> {
        const mockProduct:Product={
            id:123,
            ...data
        } as Product
        return Promise.resolve(mockProduct)
        // throw new Error("Method not implemented.");
    }
    update(data: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    delete(id: any): Promise<{}> {
        throw new Error("Method not implemented.");
    }
    find(): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: number): Promise<Product> {
        throw new Error("Method not implemented.");
    }
}