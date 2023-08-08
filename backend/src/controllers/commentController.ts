import { Request, Response } from "express";
import CommentService from "../services/commentService";

export default class CommentController {
    commentService: CommentService;

    constructor(commentService: CommentService) {
        this.commentService = commentService;
    }

    getAllCommentsByVideoId = async (req: Request, res: Response) => {
        const videoId = req.params.videoId;
        try {
            const result = await this.commentService.readAllCommentsByVideoId(videoId);
            res.status(result.status).json(result);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    postNewComment = async (req: Request, res: Response) => {
        const { username, comment } = req.body;
        if(!username || !comment) {
            res.status(400).json({
                status: "fail",
                message: "username and comment can not be empty"
            })
        }
        const videoId = req.params.videoId;
        try {
            const result = await this.commentService.postNewComment(videoId, {username, comment});
            res.status(result.status).json(result);
        } catch (error) {
            res.status(400).json({
                status: "fail",
                message: error
            });
        }
    }
}