import Result from "../models/result";
import Video from "../models/entity/video";
import { VideoCommentSchema } from "../schemas/videoSchema";

export default class VideoService {

    async readOneVideoById(id: string): Promise<Result<Video | null>> {
        const foundVideo: Video | null = await VideoCommentSchema.findById({_id: id});
        if(foundVideo === null) {
            throw new Error(`readOneVideoById video not found`);
        }
        return new Result<Video>(200, `readOneVideoById succeed`, foundVideo);
    }
    
    async readAllVideos(): Promise<Result<Video[]>> {
        const allVideos = await VideoCommentSchema.find();
        return new Result<Video[]>(200, `readAllVideos succeed`, allVideos);
    }
}