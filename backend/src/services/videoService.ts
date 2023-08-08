import Video from "../models/video";
import VideoRepository from "../repositories/videoRepository";

export default class VideoService {

    static async readOneById(id: string): Promise<Video> {
        const foundVideo = await VideoRepository.readById(id);
        return foundVideo;
    }
    
    static async readAll(): Promise<Video[]> {
        const allVideos = await VideoRepository.readAll();
        return allVideos;
    }
}