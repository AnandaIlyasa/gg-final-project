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
const result_1 = __importDefault(require("../models/result"));
const videoSchema_1 = require("../schemas/videoSchema");
class VideoService {
    readOneVideoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundVideo = yield videoSchema_1.VideoCommentSchema.findById({ _id: id });
            if (foundVideo === null) {
                throw new Error(`readOneVideoById video not found`);
            }
            return new result_1.default(200, `readOneVideoById succeed`, foundVideo);
        });
    }
    readAllVideos() {
        return __awaiter(this, void 0, void 0, function* () {
            const allVideos = yield videoSchema_1.VideoCommentSchema.find();
            return new result_1.default(200, `readAllVideos succeed`, allVideos);
        });
    }
}
exports.default = VideoService;
//# sourceMappingURL=videoService.js.map