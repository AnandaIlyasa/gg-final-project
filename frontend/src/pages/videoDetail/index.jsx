import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Header from "../components/header";
import { Flex, Heading } from '@chakra-ui/react'
import "./style.css";
import Comments from "./components/comments";
import { useState } from "react";
import Products from "./components/products";
import EmbedVideo from "./components/embedVideo";

export default function VideoDetail() {
    const { videoId } = useParams();
    const [products] = useFetch(`http://localhost:3070/api/products/videos/${videoId}`, { method: "GET" });
    const [currentVideo] = useFetch(`http://localhost:3070/api/videos/${videoId}`, { method: "GET" });
    const [comments, setComments] = useFetch(`http://localhost:3070/api/videos/${videoId}/comments`, { method: "GET" });
    const [form, setForm] = useState({
        username: "",
        comment: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(
                `http://localhost:3070/api/videos/${videoId}/comments`,
                {
                    method: "POST",
                    body: JSON.stringify({...form}),
                }
            );
            const response = await res.json();
            if (res.status === 200) {
                setForm({
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    
    return (
        <div className="container">
            <Header />
            <Flex id="wrapper" flexDirection="row" justifyContent="start" gap={3} height="86vh">
                <Flex id="product-video-container" flexDirection="column" justifyContent="start" gap={3}>
                    <EmbedVideo embedUrl={currentVideo?.data?.embedUrl} />
                    <Products products={products}/>
                </Flex>
                <Flex id="comments-wrapper" flexDirection="column">
                    <Heading size="lg">Comments</Heading>
                    <Comments comments={comments}/>
                    <form id="comment-form" onSubmit={handleSubmit}>
                        <input id="username" type="text" onChange={handleInputChange} placeholder="username" name="username" value={form.username} required />
                        <input id="comment" type="text" onChange={handleInputChange} placeholder="comment" name="comment" value={form.comment} required />
                        <br />
                        <button type="submit">Send</button>
                    </form>
                </Flex>
            </Flex>
        </div>
    )
}