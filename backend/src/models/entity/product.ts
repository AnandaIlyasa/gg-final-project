export default class Product {
    _id: string | undefined;
    productLink: string;
    title: string;
    price: number;
    imgUrl: string;
    
    constructor(productLink: string, title: string, price: number, imgUrl: string, _id?: string) {
        this._id = _id;
        this.productLink = productLink;
        this.title = title;
        this.price = price;
        this.imgUrl = imgUrl;
    }
}