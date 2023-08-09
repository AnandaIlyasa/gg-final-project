import { useState, useEffect } from "react";

export default function VideoList() {
    const [videoList, setVideoList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3070/api/videos")
            .then((response) => {
                return response.json();
            }).then((data) => {
                console.log("data: ", data);
                setVideoList(data);
            }).catch((error) => {
                console.log("error fetching profile: ", error);
            })
    }, []);

    return (
        <div>
            main page
        </div>
    )
}