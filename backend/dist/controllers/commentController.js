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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commentService_1 = __importDefault(require("../services/commentService"));
class CommentController {
    static getAllCommentsByVideoId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const videoId = req.params.videoId;
            try {
                const foundComments = yield commentService_1.default.readAllByVideoId(videoId);
                const response = foundComments.map((comment) => {
                    return {
                        username: comment.username,
                        comment: comment.comment,
                        timestamp: comment.timestamp
                    };
                });
                res.status(200).json(response);
            }
            catch (error) {
                res.status(500).send(`can not get all comments in video with id ${videoId}: ${error}`);
            }
        });
    }
    static postNewComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, comment } = req.body;
            if (!username) {
                res.status(400).json({
                    status: "fail",
                    message: "username can not be empty"
                });
                return;
            }
            if (!comment) {
                res.status(400).json({
                    status: "fail",
                    message: "comment can not be empty"
                });
                return;
            }
            const videoId = req.params.videoId;
            try {
                yield commentService_1.default.postNewComment(videoId, { username, comment });
                res.status(200).json({
                    status: "success"
                });
            }
            catch (error) {
                res.status(400).json({
                    status: "fail",
                    message: `failed posting a new comment in video with id ${videoId}: ${error}`
                });
            }
        });
    }
}
exports.default = CommentController;
//# sourceMappingURL=commentController.js.map