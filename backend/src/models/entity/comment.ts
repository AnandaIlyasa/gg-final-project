export default class Comment {
    _id: string | undefined;
    username: string;
    comment: string;
    timestamp: Date;

    constructor(username: string, comment: string, timestamp: Date, _id?: string) {
        this._id = _id;
        this.username = username;
        this.comment = comment;
        this.timestamp = timestamp;
    }
}