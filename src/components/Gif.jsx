import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Gif.module.css";

export default function Gif(props) {
    const [loading, setLoading] = useState(true);

    const loadHandler = () => {
        setLoading(false)
    }
    return (
        <div className={style.containerGif}>
            <NavLink to={`/gif/${props.id}`}>
                <h3 className={style.title}>{ props.title.length > 0 ? props.title : "Gif sin título"}</h3>
            </NavLink>
            <img onLoad={loadHandler} className={loading ? style.isLoading : ""}  src={ props.images.fixed_height.url } alt={ props.title } />
            {
                loading ? <img className={style.loadingImg} src="https://cdn-icons-png.flaticon.com/512/3305/3305803.png" alt="loading img" /> : <></>
            }
        </div>
    );
}