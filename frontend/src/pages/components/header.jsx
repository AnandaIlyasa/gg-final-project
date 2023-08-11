import { useParams, Link } from "react-router-dom"
import { Heading } from '@chakra-ui/react';

export default function Header() {
    const { videoId } = useParams();
    return (
        <>
            { videoId ?  <DetailPageHeader /> : <MainPageHeader />}
        </>
    )
}

function MainPageHeader() {
    return (
        <div className="header">
            <Heading as="h2" size="md">Tokped Play</Heading>
        </div>
    )
}

function DetailPageHeader() {
    return (
        <div className="header">
            <Link to="/">
                <Heading as="h2" size="md"><span className="fa fa-arrow-left"></span>Channels</Heading>
            </Link>
        </div>
    )
} 