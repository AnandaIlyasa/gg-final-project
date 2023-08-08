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
const comment_1 = __importDefault(require("../models/comment"));
const videoRepository_1 = __importDefault(require("../repositories/videoRepository"));
class CommentService {
    static readAllByVideoId(videoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundVideo = yield videoRepository_1.default.readById(videoId);
            const foundComments = foundVideo.comments;
            return foundComments;
        });
    }
    static postNewComment(videoId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundVideo = yield videoRepository_1.default.readById(videoId);
            if (foundVideo === undefined) {
                throw new Error(`video with id ${videoId} is not found`);
            }
            const newComment = new comment_1.default(payload.username, payload.comment, new Date());
            yield videoRepository_1.default.addNewComment(videoId, newComment);
        });
    }
}
exports.default = CommentService;
//# sourceMappingURL=commentService.js.map