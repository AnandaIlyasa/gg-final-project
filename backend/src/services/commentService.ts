import Comment from "../models/entity/comment";
import Result from "../models/result";
import videoSchema from "../schemas/videoSchema";

export default class CommentService {
    async readAllCommentsByVideoId(videoId: string): Promise<Result<Comment[]>> {
        const foundVideo = await videoSchema.findById({_id: videoId});
        if(foundVideo === null) {
            throw new Error(`readAllCommentsByVideoId video not found`);
        }
        const foundComments = foundVideo.comments;
        return new Result<Comment[]>(200, `readAllCommentsByVideoId succeed`, foundComments);
    }
    
    async postNewComment(videoId: string, payload: {username: string, comment: string}): Promise<Result<Comment | null>> {
        const foundVideo = await videoSchema.findById({_id: videoId});
        if(foundVideo === null) {
            throw new Error(`postNewComment video not found`);
        }
        const newComment = new Comment(payload.username, payload.comment, new Date());
        foundVideo.comments.push(newComment);
        const postedComment = await foundVideo.save();
        if(postedComment === undefined) {
            throw new Error(`postNewComment fail saving comment`);
        }
        return new Result<Comment>(200, `postNewComment succeed`, newComment);
    }
}