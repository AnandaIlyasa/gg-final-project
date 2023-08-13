import Comment from "../models/entity/comment";
import Product from "../models/entity/product";
import Video from "../models/entity/video";
import ProductSchema from "../schemas/productSchema";
import { VideoCommentSchema, CommentSchema } from "../schemas/videoSchema";

export default async function migrate() {
    await VideoCommentSchema.deleteMany({});
    await ProductSchema.deleteMany({});

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
    const productIds = await ProductSchema.insertMany([
        new Product(productLinks[0], "Shampo Clear", 90500,"https://images.tokopedia.net/img/cache/100-square/hDjmkQ/2023/2/15/6916bb11-1c3f-4886-b9e7-529d83fec752.png.webp?ect=3g"),
        new Product(productLinks[1], "Dettol Antiseptik", 165000, "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2023/8/4/7ba097e0-4a85-4c67-b614-6e4e39439b5f.png.webp?ect=3g"),
        new Product(productLinks[2], "Kacang Garuda", 36000, "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2023/6/15/2b62511a-616a-4d77-a975-1da7fa7d0da0.jpg.webp?ect=4g"),
        new Product(productLinks[3], "Gery Snack", 35200, "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2023/6/14/6424d7f1-ac15-49d2-9031-f0f67be10f21.jpg.webp?ect=4g"),
        new Product(productLinks[4], "Biskuat Snack", 20000, "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2021/11/8/fb7774f1-6c9f-421f-a0e1-0e607988c9de.png.webp?ect=4g"),
        new Product(productLinks[1], "Dettol Antiseptik", 165000, "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2023/8/4/7ba097e0-4a85-4c67-b614-6e4e39439b5f.png.webp?ect=3g"),
        new Product(productLinks[2], "Kacang Garuda", 36000, "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2023/6/15/2b62511a-616a-4d77-a975-1da7fa7d0da0.jpg.webp?ect=4g"),
        new Product(productLinks[3], "Gery Snack", 35200, "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2023/6/14/6424d7f1-ac15-49d2-9031-f0f67be10f21.jpg.webp?ect=4g"),
        new Product(productLinks[4], "Biskuat Snack", 20000, "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2021/11/8/fb7774f1-6c9f-421f-a0e1-0e607988c9de.png.webp?ect=4g"),
        new Product(productLinks[1], "Dettol Antiseptik", 165000, "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2023/8/4/7ba097e0-4a85-4c67-b614-6e4e39439b5f.png.webp?ect=3g"),
        new Product(productLinks[2], "Kacang Garuda", 36000, "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2023/6/15/2b62511a-616a-4d77-a975-1da7fa7d0da0.jpg.webp?ect=4g"),
        new Product(productLinks[3], "Gery Snack", 35200, "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2023/6/14/6424d7f1-ac15-49d2-9031-f0f67be10f21.jpg.webp?ect=4g"),
        new Product(productLinks[4], "Biskuat Snack", 20000, "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2021/11/8/fb7774f1-6c9f-421f-a0e1-0e607988c9de.png.webp?ect=4g"),
    ])
    return productIds;
}

async function insertVideos(productIds: any) {
    const embedUrl = `https://www.youtube.com/embed/SYTWWUoYUMg`
    const thumbnailUrls = [
        "https://i.ytimg.com/vi/SYTWWUoYUMg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAepl-XL0j-phx8lo4opns1gpPi5g",
        "https://i.ytimg.com/vi/upWr18yghsE/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARgPIGUoSjAP&rs=AOn4CLBWfJp5nLBmgBcfo204IWkB1hIkSQ",
        "https://i.ytimg.com/vi/-7GQIAm_IHE/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhgIGUoSTAP&rs=AOn4CLAbTeTbLSBDkSKctEW47eU8aBCYbA",
        "https://i.ytimg.com/vi/yjeRjf-UICM/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhlIF0oTzAP&rs=AOn4CLCW0gtnIDmyyMRqdnOJ212KzArXZw",
        "https://i.ytimg.com/vi/D63yDoKM1FE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFeCzj5HSvbSuUX0kjj_QBuOMvPg",
    ]
    const comments = [
        new CommentSchema(new Comment("User 1", "Comment 1", new Date())),
        new CommentSchema(new Comment("User 2", "Comment 2", new Date())),
        new CommentSchema(new Comment("User 3", "Comment 3", new Date())),
        new CommentSchema(new Comment("User 4", "Comment 4", new Date())),
        new CommentSchema(new Comment("User 5", "Comment 5", new Date())),
        new CommentSchema(new Comment("User 6", "Comment 6", new Date())),
        new CommentSchema(new Comment("User 7", "Comment 7", new Date())),
        new CommentSchema(new Comment("User 8", "Comment 8", new Date())),
        new CommentSchema(new Comment("User 9", "Comment 9", new Date())),
        new CommentSchema(new Comment("User 10", "Comment 10", new Date())),
    ]
    await VideoCommentSchema.insertMany([
        new Video(embedUrl, thumbnailUrls[0], productIds.map((p: any) => p._id), comments),
        new Video(embedUrl, thumbnailUrls[1], productIds.map((p: any) => p._id), comments),
        new Video(embedUrl, thumbnailUrls[2], productIds.map((p: any) => p._id), comments),
        new Video(embedUrl, thumbnailUrls[3], productIds.map((p: any) => p._id), comments),
        new Video(embedUrl, thumbnailUrls[4], productIds.map((p: any) => p._id), comments),
        new Video(embedUrl, thumbnailUrls[0], productIds.map((p: any) => p._id), comments),
        new Video(embedUrl, thumbnailUrls[1], productIds.map((p: any) => p._id), comments),
        new Video(embedUrl, thumbnailUrls[2], productIds.map((p: any) => p._id), comments),
        new Video(embedUrl, thumbnailUrls[3], productIds.map((p: any) => p._id), comments),
        new Video(embedUrl, thumbnailUrls[4], productIds.map((p: any) => p._id), comments),
    ])
}