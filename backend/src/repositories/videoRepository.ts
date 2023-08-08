import Comment from "../models/comment";
import Video from "../models/video";
import videoSchema from "../schemas/videoSchema";
export default class VideoRepository {

    static async readAll(): Promise<Video[]> {
        const videoList: Video[] | null = await videoSchema.find();
        if(videoList === null) {
            throw new Error(`error loading all videos`);
        }
        return videoList;
    }

    static async create(video: Video): Promise<Video> {
        await videoSchema.create(video)
        return video;
    }

    static async readById(id: string): Promise<Video> {
        const foundVideo: Video | null = await videoSchema.findById({_id: id});
        if(foundVideo === null) {
            throw new Error(`video with id ${id} is not found`);
        }
        return foundVideo;
    }

    static async addNewComment(id: string, newComment: Comment): Promise<Comment> {
        const foundVideo = await videoSchema.findOne({_id: id});
        foundVideo?.comments.push(newComment);
        await foundVideo?.save();
        return newComment;
    }

    static async deleteById(id: string) {
        videoSchema.findByIdAndDelete(id);
    }
}