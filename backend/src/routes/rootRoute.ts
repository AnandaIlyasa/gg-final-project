import { Application, Router } from "express";
import CommentController from "../controllers/commentController";
import ProductController from "../controllers/productController";
import VideoController from "../controllers/videoController";
import ProductRepository from "../repositories/productRepository";
import VideoRepository from "../repositories/videoRepository";
import productSchema from "../schemas/productSchema";
import videoSchema from "../schemas/videoSchema";
import CommentService from "../services/commentService";
import ProductService from "../services/productService";
import VideoService from "../services/videoService";

export default class RootRoute {
    app: Application;
    router: Router;

    constructor(app: Application, router: Router) {
        this.app = app;
        this.router = router;
    }

    registerRoutes() {
        const router = Router();        
        router.get("/videos", VideoController.getAllVideos);
        router.get("/videos/:videoId/comments", CommentController.getAllCommentsByVideoId);
        router.post("/videos/:videoId/comments", CommentController.postNewComment);
        router.get("/products/videos/:videoId", ProductController.getAllProductsByVideoId);
        this.app.use('/api', router);
    }
}