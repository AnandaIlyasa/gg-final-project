import Product from "../models/entity/product";
import Result from "../models/result";
import productSchema from "../schemas/productSchema";
import videoSchema from "../schemas/videoSchema";

export default class ProductService {

    readAllProductsByVideoId = async (videoId: string): Promise<Result<Product[]>> => {
        const foundVideo = await videoSchema.findById(videoId);
        if(foundVideo === null) {
            throw new Error(`readAllProductsByVideoId video not found`);
        }
        const productIds = foundVideo.productIds;
        const allProducts = await productSchema.find();
        const matchedProducts = allProducts.filter((product) => {
            if(product._id === undefined) {
                return false;
            }
            return productIds.includes(product._id);
        })
        return new Result<Product[]>(200, `readAllProductsByVideoId succeed`, matchedProducts);
    }
}