import { Request, Response } from "express";
import ProductService from "../services/productService";

export default class ProductController {
    
    static async getAllProductsByVideoId(req: Request, res: Response) {
        const videoId = req.params.videoId;
        try {
            const foundProducts = await ProductService.readAllByVideoId(videoId);
            const response = foundProducts.map((product) => {
                return {
                    productId: product._id,
                    productLink: product.productLink,
                    title: product.title,
                    price: product.price
                }
            })
            res.status(200).json({
                products: response
            });
        } catch (error) {
            res.status(400).send(`can not get all products in video with id ${videoId}: ${error}`);
        }
    }
}
