import { Request, Response } from "express";
import ProductService from "../services/productService";

export default class ProductController {
    productService: ProductService;

    constructor(productService: ProductService) {
        this.productService = productService;
    }
    
    getAllProductsByVideoId = async (req: Request, res: Response) => {
        const videoId = req.params.videoId;
        try {
            const result = await this.productService.readAllProductsByVideoId(videoId);
            res.status(result.status).json(result);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}
