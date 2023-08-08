import Comment from "../models/comment";
import Video from "../models/video";
import VideoRepository from "../repositories/videoRepository";

export default class CommentService {
    static async readAllByVideoId(videoId: string): Promise<Comment[]> {
        const foundVideo = await VideoRepository.readById(videoId);
        const foundComments = foundVideo.comments;
        return foundComments;
    }
    
    static async postNewComment(videoId: string, payload: {username: string, comment: string}): Promise<Comment> {
        const foundVideo = await VideoRepository.readById(videoId);
        if(foundVideo === undefined) {
            throw new Error(`video with id ${videoId} is not found`);
        }
        const newComment = new Comment(payload.username, payload.comment, new Date());
        const postedComment = await VideoRepository.addNewComment(videoId, newComment);
        return postedComment;
    }
}