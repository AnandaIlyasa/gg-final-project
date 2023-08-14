"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentController_1 = __importDefault(require("../controllers/commentController"));
const productController_1 = __importDefault(require("../controllers/productController"));
const videoController_1 = __importDefault(require("../controllers/videoController"));
const commentService_1 = __importDefault(require("../services/commentService"));
const productService_1 = __importDefault(require("../services/productService"));
const videoService_1 = __importDefault(require("../services/videoService"));
class RootRoute {
    constructor(app) {
        this.app = app;
    }
    registerRoutes() {
        const router = (0, express_1.Router)();
        const commentController = new commentController_1.default(new commentService_1.default());
        const videoController = new videoController_1.default(new videoService_1.default());
        const productController = new productController_1.default(new productService_1.default());
        router.get("/videos", videoController.getAllVideos);
        router.get("/videos/:videoId", videoController.getVideoById);
        router.get("/videos/:videoId/comments", commentController.getAllCommentsByVideoId);
        router.post("/videos/:videoId/comments", commentController.postNewComment);
        router.get("/products/videos/:videoId", productController.getAllProductsByVideoId);
        this.app.use('/', router);
    }
}
exports.default = RootRoute;
//# sourceMappingURL=rootRoute.js.map