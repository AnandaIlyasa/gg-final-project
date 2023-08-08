import { Request, Response } from "express";
import VideoService from "../services/videoService";
export default class VideoController {
    videoService: VideoService;

    constructor(videoService: VideoService) {
        this.videoService = videoService;
    }

    getAllVideos = async (_req: Request, res: Response) => {
        try {
            const result = await this.videoService.readAllVideos();
            res.status(result.status).json(result);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    getVideoById = async (req: Request, res: Response) => {
        const id = req.params.id;
        try {
            const result = await this.videoService.readOneVideoById(id);
            res.status(result.status).json(result);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}