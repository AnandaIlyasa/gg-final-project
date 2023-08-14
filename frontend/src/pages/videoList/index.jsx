import useFetch from "../../hooks/useFetch";
import "./style.css";
import { Grid, GridItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Header from "../components/header";

export default function VideoList() {
    const [videoList] = useFetch(`${import.meta.env.VITE_API_URL}/videos`, { method: "GET" });

    console.log(`check env: ${import.meta.env.VITE_API_URL}`)
    console.log(`videoList: `, videoList)
    
    return (
        <div className="container">
            <Header />
            <Grid id="video-grid" templateColumns='repeat(6, 1fr)' gap={3}>
                {videoList?.data?.map(video => (
                    <li key={video._id}>
                        <GridItem w='100%' h='26rem'>
                            <Link className="video-item" to={`/channel/${video._id}`}>
                                <img className="thumbnail" src={video.thumbnailUrl} alt="" />
                            </Link>
                        </GridItem>
                    </li>
                ))}
            </Grid>
        </div>
    )
}