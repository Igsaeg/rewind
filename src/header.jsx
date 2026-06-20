import styles from "./header.module.css"

import pfp from "./assets/pfp.png";
import Sun from "./assets/sun.jsx";
import Moon from "./assets/moon.jsx";

import { useState, useEffect } from "react";

export default function Header() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <header className={styles.header}>
            <div>
                <h3>Rewind</h3>
            </div>
            <div>
                <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                    {(theme === "light") ? <Sun /> : <Moon />}
                </button>
                <button>
                    <img src={pfp} alt="" />
                </button>
            </div>
        </header>
    );
}