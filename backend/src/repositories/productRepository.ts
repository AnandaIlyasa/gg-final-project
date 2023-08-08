import Product from "../models/product";
import productSchema from "../schemas/productSchema";

export default class ProductRepository {

    static async readAll(): Promise<Product[]> {
        const productList: Product[] | null = await productSchema.find();
        if(productList === null) {
            throw new Error(`error loading all products`);
        }
        return productList;
    }

    static async create(product: Product): Promise<Product> {
        await productSchema.create(product)
        return product;
    }

    static async readById(id: string): Promise<Product> {
        const foundproduct: Product | null = await productSchema.findById({_id: id});
        if(foundproduct === null) {
            throw new Error(`product with id ${id} is not found`);
        }
        return foundproduct;
    }

    static async updateById(id: string, newproduct: Product) {
        productSchema.updateOne({_id: id}, {newproduct});
    }

    static async deleteById(id: string) {
        productSchema.findByIdAndDelete(id);
    }
}