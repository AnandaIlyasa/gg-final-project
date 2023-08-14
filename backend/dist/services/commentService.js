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
const comment_1 = __importDefault(require("../models/entity/comment"));
const result_1 = __importDefault(require("../models/result"));
const videoSchema_1 = require("../schemas/videoSchema");
class CommentService {
    readAllCommentsByVideoId(videoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundVideo = yield videoSchema_1.VideoCommentSchema.findById({ _id: videoId });
            if (foundVideo === null) {
                throw new Error(`readAllCommentsByVideoId video not found`);
            }
            const foundComments = foundVideo.comments;
            return new result_1.default(200, `readAllCommentsByVideoId succeed`, foundComments);
        });
    }
    postNewComment(videoId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundVideo = yield videoSchema_1.VideoCommentSchema.findById({ _id: videoId });
            if (foundVideo === null) {
                throw new Error(`postNewComment video not found`);
            }
            const newComment = new comment_1.default(payload.username, payload.comment, new Date());
            foundVideo.comments.push(newComment);
            const postedCommentId = yield foundVideo.save();
            if (postedCommentId === undefined) {
                throw new Error(`postNewComment fail saving comment`);
            }
            newComment._id = postedCommentId._id;
            return new result_1.default(200, `postNewComment succeed`, newComment);
        });
    }
}
exports.default = CommentService;
//# sourceMappingURL=commentService.js.map