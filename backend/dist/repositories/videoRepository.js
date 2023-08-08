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
const videoSchema_1 = __importDefault(require("../schemas/videoSchema"));
class VideoRepository {
    static readAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const videoList = yield videoSchema_1.default.find();
            if (videoList === null) {
                throw new Error(`error loading all videos`);
            }
            return videoList;
        });
    }
    static create(video) {
        return __awaiter(this, void 0, void 0, function* () {
            yield videoSchema_1.default.create(video);
            return video;
        });
    }
    static readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundVideo = yield videoSchema_1.default.findById({ _id: id });
            if (foundVideo === null) {
                throw new Error(`video with id ${id} is not found`);
            }
            return foundVideo;
        });
    }
    static addNewComment(id, newComment) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundVideo = yield videoSchema_1.default.findOne({ _id: id });
            foundVideo === null || foundVideo === void 0 ? void 0 : foundVideo.comments.push(newComment);
            yield (foundVideo === null || foundVideo === void 0 ? void 0 : foundVideo.save());
        });
    }
    static deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            videoSchema_1.default.findByIdAndDelete(id);
        });
    }
}
exports.default = VideoRepository;
//# sourceMappingURL=videoRepository.js.map