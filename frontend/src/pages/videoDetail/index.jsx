import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Header from "../components/header";
import { Flex, Heading } from '@chakra-ui/react'
import "./style.css";
import Comments from "./components/comments";
import Products from "./components/products";
import EmbedVideo from "./components/embedVideo";
import useForm from "../../hooks/useForm";
import CommentForm from "./components/commentForm";

export default function VideoDetail() {
    const { videoId } = useParams();
    const [products] = useFetch(`${import.meta.env.VITE_API_URL}/products/videos/${videoId}`, { method: "GET" });
    const [currentVideo] = useFetch(`${import.meta.env.VITE_API_URL}/videos/${videoId}`, { method: "GET" });
    const [comments, setComments] = useFetch(`${import.meta.env.VITE_API_URL}/videos/${videoId}/comments`, { method: "GET" });
    const [formData, setFormData, handleInputChange] = useForm({
        username: "",
        comment: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/videos/${videoId}/comments`,
                {
                    method: "POST",
                    body: JSON.stringify({...formData}),
                }
            );
            const response = await res.json();
            if (res.status === 200) {
                setFormData({
                    username: "",
                    comment: ""
                })
                setComments({
                    ...comments,
                    data: [...comments.data, response.data]
                })
            } else {
                alert("post comment failed: ", response);
            }
        } catch (error) {
            alert("post comment error: ", error)
        }
    };
    
    return (
        <div id="channel-container">
            <Header />
            <Flex id="wrapper" flexDirection="row" justifyContent="start" gap={3} height="86vh">
                <Flex id="product-video-container" flexDirection="column" justifyContent="start" gap={3}>
                    <EmbedVideo embedUrl={currentVideo?.data?.embedUrl} />
                    <Products products={products}/>
                </Flex>
                <Flex id="comments-wrapper" flexDirection="column">
                    <Heading as="h8" size="lg">Comments</Heading>
                    <Comments comments={comments}/>
                    <CommentForm 
                        formData={formData} 
                        handleSubmit={handleSubmit} 
                        handleInputChange={handleInputChange} 
                    />
                </Flex>
            </Flex>
        </div>
    )
}