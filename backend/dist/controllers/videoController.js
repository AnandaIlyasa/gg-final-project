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
class VideoController {
    constructor(videoService) {
        this.getAllVideos = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.videoService.readAllVideos();
                res.status(result.status).json(result);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
        this.getVideoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.videoId;
            try {
                const result = yield this.videoService.readOneVideoById(id);
                res.status(result.status).json(result);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
        this.videoService = videoService;
    }
}
exports.default = VideoController;
//# sourceMappingURL=videoController.js.map