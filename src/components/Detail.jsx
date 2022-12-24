import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail(props) {
    const [gif, setGif] = useState("");
    const { id } = useParams();

    useEffect(() => {
        setGif(`https://media2.giphy.com/media/${id}/200.gif?cid=73083877z0kg16gqylu8kk368j5zw8z1ebclyfxi1uyke1q0&rid=200.gif&ct=g`);
    }, [id]);
    return (
        <div>

        </div>
    )
}