import styles from "./header.module.css"
import pfp from "./assets/pfp.png";
import Sun from "./assets/svg/sun.jsx";
import Moon from "./assets/svg/moon.jsx";
import React from "./assets/svg/react.jsx";
import Vite from "./assets/svg/vite.jsx";
import GHPages from "./assets/svg/ghpages.jsx";

import { useState, useEffect } from "react";
import { createPortal } from 'react-dom';

function Modal({ theme }) {
    return (
        <div className={styles.modal}>
            <div className={styles.container} onClick={(e) => e.stopPropagation()}>
                <div className={styles.flex}>
                    <a href="https://github.com/Igsaeg/"><img src={pfp} alt="" /></a>
                    <div>
                        <h2>Hi, I'm <a href="https://github.com/Igsaeg/">Igsaeg</a> 👋</h2>
                        <p>I made this.</p>
                    </div>
                </div>
                <div className={styles.divider}></div>
                <p>Rewind is a digital memory album for our G7 to G10 years — built so we'd never forget those times.</p>
                <div className={styles.pillflex}>
                    <div>
                        <React />
                        <p>React</p>
                    </div>
                    <div>
                        <Vite />
                        <p>Vite</p>
                    </div>
                    <div>
                        <GHPages />
                        <p>GitHub Pages</p>
                    </div>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.flex2}>
                    <p>Made with {theme === "light" ? "🖤": "🤍"} · 2026</p>
                    <p><a href="https://github.com/Igsaeg/rewind">view source</a></p>
                </div>
            </div>
        </div>
    )
}

export default function Header() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const [isModalOpen, setModal] = useState(false)

    return (
        <header className={styles.header}>
            <div>
                <h3>Rewind</h3>
            </div>
            <div>
                <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                    {(theme === "light") ? <Sun /> : <Moon />}
                </button>
                <button
                    onClick={() => setModal(isModalOpen ? false : true)}
                    className={isModalOpen ? styles.active : ""}
                >
                    <img src={pfp} alt="" />
                </button>
            </div>
            {isModalOpen && createPortal(<Modal theme={theme} />, document.body)}
        </header>
    );
}