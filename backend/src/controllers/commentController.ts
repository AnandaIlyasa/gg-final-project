import { Request, Response } from "express";
import CommentService from "../services/commentService";

export default class CommentController {

    static async getAllCommentsByVideoId(req: Request, res: Response) {
        const videoId = req.params.videoId;
        try {
            const foundComments = await CommentService.readAllByVideoId(videoId);
            const response = foundComments.map((comment) => {
                return {
                    username: comment.username,
                    comment: comment.comment,
                    timestamp: comment.timestamp
                }
            });
            res.status(200).json({
                comments: response
            });
        } catch (error) {
            res.status(400).send(`can not get all comments in video with id ${videoId}: ${error}`);
        }
    }

    static async postNewComment(req: Request, res: Response) {
        const { username, comment } = req.body;
        if(!username) {
            res.status(400).json({
                status: "fail",
                message: "username can not be empty"
            })
            return
        }
        if(!comment) {
            res.status(400).json({
                status: "fail",
                message: "comment can not be empty"
            })
            return
        }
        const videoId = req.params.videoId;
        try {
            const postedComment = await CommentService.postNewComment(videoId, {username, comment});
            res.status(200).json({
                status: "success",
                comment: postedComment
            });
        } catch (error) {
            res.status(400).json({
                status: "fail",
                message: `failed posting a new comment in video with id ${videoId}: ${error}`
            });
        }
    }
}