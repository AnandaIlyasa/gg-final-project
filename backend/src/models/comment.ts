export default class Comment {
    username: string;
    comment: string;
    timestamp: Date;

    constructor(username: string, comment: string, timestamp: Date) {
        this.username = username;
        this.comment = comment;
        this.timestamp = timestamp;
    }
}