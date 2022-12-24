import React from "react";
import style from "./About.module.css";
import img from "../about.jpg";

export default function About(props) {
    return (
        <div className={style.containerAbout}>
            <figure>
                <img src={img} alt="Matias Chanquia"/>
            </figure>
            <div className={style.sobre}>
                <h2>Sobre la web:</h2>
                <p>Esta aplicación web permite buscar gifs por texto y se mostrarán 10 gifs en pantalla. Haciendo click en el nombre del gif se puede ver el gif en mayor tamaño. Añádí un loading al buscar los gifs y también para la carga de los propios gifs.</p>
                <h2>Sobre mi:</h2>
                <p>Soy Matias Chanquia de Córdoba, Argentina, tengo 21 años y soy desarrollador frontend. Amante de la programación desde el 2020 que empecé con Python.</p>
                <p>Mi email es: <a href="mailto:matiaschanquianahuel@gmail.com">matiaschanquianahuel@gmail.com</a></p>
            </div>
        </div>
    );
}