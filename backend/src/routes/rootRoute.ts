import { Application, Router } from "express";
import CommentController from "../controllers/commentController";
import ProductController from "../controllers/productController";
import VideoController from "../controllers/videoController";
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
        const commentController: CommentController = new CommentController(new CommentService());
        const videoController: VideoController = new VideoController(new VideoService());
        const productController: ProductController = new ProductController(new ProductService());

        router.get("/videos", videoController.getAllVideos);
        router.get("/videos/:videoId/comments", commentController.getAllCommentsByVideoId);
        router.post("/videos/:videoId/comments", commentController.postNewComment);
        router.get("/products/videos/:videoId", productController.getAllProductsByVideoId);
        
        this.app.use('/api', router);
    }
}