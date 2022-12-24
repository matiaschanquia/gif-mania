import React from "react";
import Gif from "./Gif";
import style from "./Gifs.module.css";

export default function Gifs(props) {
    return (
        <div className={style.containerGifs}>
            {
                props.gifs.length === 0 ? <h2 className={style.sinBusqueda}>Realice una búsqueda de gifs.</h2> : <></>
            }
            {
                props.gifs.map(({ images,  title, id }) => <Gif images={images} title={title} key={id} id={id} />)
            }
        </div>
    );
}