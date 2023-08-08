import Comment from "../models/comment";
import Product from "../models/product";
import Video from "../models/video";
import productSchema from "../schemas/productSchema";
import videoSchema from "../schemas/videoSchema";

export default async function migrate() {
    const productIds = await insertProducts();
    await insertVideos(productIds);
}

async function insertProducts(): Promise<any[]> {
    const productLinks = [
        "https://www.tokopedia.com/unilever/clear-men-anti-dandruff-shampo-anti-ketombe-ice-cool-menthol-660ml",
        "https://www.tokopedia.com/dettolstore/dettol-cairan-antiseptik-1l",
        "https://www.tokopedia.com/garudafood/garuda-kacang-kulit",
        "https://www.tokopedia.com/garudafood/gery-saluut-malkist-coklat",
        "https://www.tokopedia.com/mondelez/biskuat-biskuit-coklat-134-4-g-3-pcs?extParam=ivf%3Dfalse%26whid%3D13355454&src=topads",
    ]
    const productIds = await productSchema.insertMany([
        new Product(productLinks[0], "Shampo Clear", 90500),
        new Product(productLinks[1], "Dettol Antiseptik", 165000),
        new Product(productLinks[2], "Kacang Garuda", 36000),
        new Product(productLinks[3], "Gery Snack", 35200),
        new Product(productLinks[4], "Biskuat Snack", 20000),
    ])
    return productIds;
}

async function insertVideos(productIds: any) {
    const embedUrl = `<iframe width="560" height="315" src="https://www.youtube.com/embed/SYTWWUoYUMg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    const thumbnailUrls = [
        "https://i.ytimg.com/vi/SYTWWUoYUMg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAepl-XL0j-phx8lo4opns1gpPi5g",
        "https://i.ytimg.com/vi/upWr18yghsE/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARgPIGUoSjAP&rs=AOn4CLBWfJp5nLBmgBcfo204IWkB1hIkSQ",
        "https://i.ytimg.com/vi/-7GQIAm_IHE/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhgIGUoSTAP&rs=AOn4CLAbTeTbLSBDkSKctEW47eU8aBCYbA",
        "https://i.ytimg.com/vi/yjeRjf-UICM/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhlIF0oTzAP&rs=AOn4CLCW0gtnIDmyyMRqdnOJ212KzArXZw",
        "https://i.ytimg.com/vi/D63yDoKM1FE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFeCzj5HSvbSuUX0kjj_QBuOMvPg",
    ]
    const comments = [
        new Comment("User 1", "Comment 1", new Date()),
        new Comment("User 2", "Comment 2", new Date()),
    ]
    await videoSchema.insertMany([
        new Video(embedUrl, thumbnailUrls[0], [productIds[0]._id, productIds[1]._id], [comments[0], comments[1]]),
        new Video(embedUrl, thumbnailUrls[1], [productIds[1]._id, productIds[2]._id], [comments[0], comments[1]]),
        new Video(embedUrl, thumbnailUrls[2], [productIds[2]._id, productIds[3]._id], [comments[0], comments[1]]),
        new Video(embedUrl, thumbnailUrls[3], [productIds[3]._id, productIds[4]._id], [comments[0], comments[1]]),
        new Video(embedUrl, thumbnailUrls[4], [productIds[4]._id, productIds[0]._id], [comments[0], comments[1]]),
    ])
}