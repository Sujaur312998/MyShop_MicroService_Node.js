import { Product } from "../model/product.model";

export interface ICatalogRepository {
    create(data: Product): Promise<Product>;
    update(data: Product): Promise<Product>;
    delete(id: any): Promise<{}>;
    find(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
}