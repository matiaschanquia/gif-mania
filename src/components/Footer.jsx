import React from "react";
import style from "./Footer.module.css";

export default function Footer(props) {
    return (
        <footer className={style.footer}>
            <div className={style.redes}>
                <a href="https://www.linkedin.com/in/matias-chanquia/" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo linkedin"/></a>
                <a href="https://github.com/matiaschanquia" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo github"/></a>
            </div>
            <p>&copy; Copyright Gif Manía API - Matias Chanquia Dev</p>
            <p>Powered by <a className={style.linkGiphy} href="https://giphy.com/" target="_blank" rel="noreferrer">GIPHY</a></p>
        </footer>
    )
}