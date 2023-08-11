import useFetch from "../../hooks/useFetch";
import "./style.css";
import { Grid, GridItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Header from "../components/header";

export default function VideoList() {
    const [videoList, videoListError, videoListLoading] = useFetch("http://localhost:3070/api/videos", { method: "GET" });

    return (
        <div className="container">
            <Header />
            <Grid templateColumns='repeat(6, 1fr)' gap={3} padding='1rem 1rem'>
                {videoList?.data?.map(video => (
                    <li key={video._id}>
                        <GridItem w='100%' h='26rem'>
                            <Link to={`/channel/${video._id}`}>
                                <img className="thumbnail" src={video.thumbnailUrl} alt="" />
                            </Link>
                        </GridItem>
                    </li>
                ))}
            </Grid>
        </div>
    )
}