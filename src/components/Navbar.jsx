import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";


export default function Navbar(props) {
    const [nameGif, setNameGif] = useState("");

    const changeHandler = (e) => {
        setNameGif(e.target.value)
    }

    return(
        <header className={style.header}>
            <h1>Gif Mania</h1>
            <div>
                <nav className={style.nav}>
                    <ul>
                        <li>
                            <NavLink to="/home" className={({ isActive }) => isActive ? style.linkActive : ""}>
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => isActive ? style.linkActive : ""}>
                                <span>Sobre</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <form className={style.form} onSubmit={(e) => props.clickHandlerAdd(nameGif, e)}>
                    <input type="text" placeholder="Ingrese un texto" onChange={changeHandler}/>
                    <button type="submit">Buscar</button>
                </form>
            </div>
        </header>
    );
}