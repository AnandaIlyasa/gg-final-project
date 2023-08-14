import useFetch from "../../hooks/useFetch";
import "./style.css";
import { Grid, GridItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Header from "../components/header";

export default function VideoList() {
    const [videoList] = useFetch(`${import.meta.env.VITE_API_URL}/videos`, { method: "GET" });
    
    return (
        <div id="channel-list-container">
            <Header />
            <Grid id="channel-grid" templateColumns='repeat(6, 1fr)' gap={3}>
                {videoList?.data?.map(video => (
                    <li key={video._id}>
                        <GridItem w='100%' h='26rem'>
                            <Link className="channel-item" to={`/channel/${video._id}`}>
                                <img className="thumbnail" src={video.thumbnailUrl} alt="" />
                            </Link>
                        </GridItem>
                    </li>
                ))}
            </Grid>
        </div>
    )
}