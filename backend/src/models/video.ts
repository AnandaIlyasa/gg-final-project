import Comment from "./comment";

export default class Video {
    _id: string | undefined;
    embedUrl: string;
    thumbnailUrl: string;
    productIds: Array<string>;
    comments: Array<Comment>;
    
    constructor(embedUrl: string, thumbnailUrl: string, productIds: Array<string>, comments: Array<Comment>, _id?: string) {
        this._id = _id;
        this.embedUrl = embedUrl;
        this.thumbnailUrl = thumbnailUrl;
        this.productIds = productIds;
        this.comments = comments;
    }
}