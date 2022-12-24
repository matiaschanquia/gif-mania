import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./Detail.module.css";

export default function Detail(props) {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setGif(`https://media2.giphy.com/media/${id}/200.gif?cid=73083877z0kg16gqylu8kk368j5zw8z1ebclyfxi1uyke1q0&rid=200.gif&ct=g`);
    }, [id]);

    const loadHandler = () => {
        setLoading(false)
    }

    const backToHome = () => {
        navigate("/home")
    }
    return (
        <div className={style.containerDetail}>
            <button onClick={backToHome} className={style.btnBack}>Volver</button>
            <figure className={loading ? style.isLoading : style.containerGif}>
                <img onLoad={loadHandler} src={gif} alt={id} />
            </figure>
            {
                loading ? <div className={style.loading}> <img src="https://cdn-icons-png.flaticon.com/512/3305/3305803.png" alt="loading"/> </div> : <></>
            }
        </div>

    )
}