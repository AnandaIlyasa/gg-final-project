import { model, Schema } from "mongoose";
import Comment from "../models/comment";
import Video from "../models/video";

const commentSchema = new Schema<Comment>({
    username: {
        type: Schema.Types.String,
        required: true,
    },
    comment: {
        type: Schema.Types.String,
        required: true,
    },
    timestamp: {
        type: Schema.Types.Date,
        required: true,
    }
});

const videoCommentSchema = new Schema<Video>({
    embedUrl: {
        type: Schema.Types.String,
        required: true,
    },
    thumbnailUrl: {
        type: Schema.Types.String,
        required: true,
    },
    productIds: {
        type: [Schema.Types.String],
    },
    comments: {
        type: [commentSchema],
    }
},
{
    versionKey: false
});

export default model<Video>('videos', videoCommentSchema);