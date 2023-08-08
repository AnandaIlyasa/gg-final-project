import { Request, Response } from "express";
import VideoService from "../services/videoService";
export default class VideoController {

    static async getAllVideos(_req: Request, res: Response) {
        try {
            const allVideos = await VideoService.readAll();
            const response = allVideos.map((video) => {
                return {
                    videoId: video._id,
                    thumbnailUrl: video.thumbnailUrl
                }
            })
            res.status(200).json({
                videos: response
            });
        } catch (error) {
            res.status(500).send(`can not get all videos: ${error}`);
        }
    }

    static async getVideoById(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const foundVideo = await VideoService.readOneById(id);
            const response = {
                videoId: foundVideo._id,
                thumbnailUrl: foundVideo.thumbnailUrl,
                embedUrl: foundVideo.embedUrl
            }
            res.status(200).json(response);
        } catch (error) {
            res.status(400).send(`can not get video with id ${id}: ${error}`);
        }
    }
}