import { useParams, Link } from "react-router-dom"
import { Heading } from '@chakra-ui/react';

export default function Header() {
    const { videoId } = useParams();
    return (
        <div className="header">
            <Link to={videoId ? "/" : "."}>
                {
                    videoId ? 
                    <Heading as="h2" size="lg"><span className="fa fa-arrow-left"></span> Channels</Heading> : 
                    <Heading as="h2" size="lg">Tokped Play</Heading>
                }
            </Link>
        </div>
    )
}