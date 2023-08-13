import Comment from "../models/entity/comment";
import Result from "../models/result";
import { VideoCommentSchema } from "../schemas/videoSchema";

export default class CommentService {
    async readAllCommentsByVideoId(videoId: string): Promise<Result<Comment[]>> {
        const foundVideo = await VideoCommentSchema.findById({_id: videoId});
        if(foundVideo === null) {
            throw new Error(`readAllCommentsByVideoId video not found`);
        }
        const foundComments = foundVideo.comments;
        return new Result<Comment[]>(200, `readAllCommentsByVideoId succeed`, foundComments);
    }
    
    async postNewComment(videoId: string, payload: {username: string, comment: string}): Promise<Result<Comment | null>> {
        const foundVideo = await VideoCommentSchema.findById({_id: videoId});
        if(foundVideo === null) {
            throw new Error(`postNewComment video not found`);
        }
        const newComment = new Comment(payload.username, payload.comment, new Date());
        foundVideo.comments.push(newComment);
        const postedCommentId = await foundVideo.save();
        if(postedCommentId === undefined) {
            throw new Error(`postNewComment fail saving comment`);
        }
        newComment._id = postedCommentId._id;
        return new Result<Comment>(200, `postNewComment succeed`, newComment);
    }
}