import Product from "../models/product";
import ProductRepository from "../repositories/productRepository";
import VideoRepository from "../repositories/videoRepository";

export default class ProductService {

    static async readAllByVideoId(videoId: string): Promise<Product[]> {
        const foundVideo = await VideoRepository.readById(videoId);
        const productIds = foundVideo.productIds;
        const allProducts = await ProductRepository.readAll();
        const foundProducts = allProducts.filter((product) => {
            if(product._id === undefined) {
                return false;
            }
            return productIds.includes(product._id);
        })
        return foundProducts;
    }
}