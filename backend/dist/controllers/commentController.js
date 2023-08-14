"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class CommentController {
    constructor(commentService) {
        this.getAllCommentsByVideoId = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const videoId = req.params.videoId;
            try {
                const result = yield this.commentService.readAllCommentsByVideoId(videoId);
                res.status(result.status).json(result);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
        this.postNewComment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { username, comment } = req.body;
            if (!username || !comment) {
                res.status(400).json({
                    status: "fail",
                    message: "username and comment can not be empty"
                });
            }
            const videoId = req.params.videoId;
            try {
                const result = yield this.commentService.postNewComment(videoId, { username, comment });
                res.status(result.status).json(result);
            }
            catch (error) {
                res.status(400).json({
                    status: "fail",
                    message: error
                });
            }
        });
        this.commentService = commentService;
    }
}
exports.default = CommentController;
//# sourceMappingURL=commentController.js.map