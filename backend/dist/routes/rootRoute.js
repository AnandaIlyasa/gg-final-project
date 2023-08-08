"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentController_1 = __importDefault(require("../controllers/commentController"));
const productController_1 = __importDefault(require("../controllers/productController"));
const videoController_1 = __importDefault(require("../controllers/videoController"));
class RootRoute {
    constructor(app, router) {
        this.app = app;
        this.router = router;
    }
    registerRoutes() {
        const router = (0, express_1.Router)();
        router.get("/videos", videoController_1.default.getAllVideos);
        router.get("/videos/:videoId/comments", commentController_1.default.getAllCommentsByVideoId);
        router.post("/videos/:videoId/comments", commentController_1.default.postNewComment);
        router.get("/products/:videoId", productController_1.default.getAllProductsByVideoId);
        this.app.use('/api', router);
    }
}
exports.default = RootRoute;
//# sourceMappingURL=rootRoute.js.map