import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Header from "../components/header";
import "./style.css";

export default function VideoDetail() {
    const { videoId } = useParams();
    const [products, productsError, productsLoading] = useFetch(`http://localhost:3070/api/products/videos/${videoId}`, { method: "GET" });
    const [comments, commentsError, commentsLoading] = useFetch(`http://localhost:3070/api/videos/${videoId}/comments`, { method: "GET" });

    console.log("products: ", products)
    console.log("comments: ", comments)

    return (
        <div className="container">
            <Header />
        </div>
    )
}