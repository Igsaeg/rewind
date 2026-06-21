import styles from "./sidebar.module.css";

import { useState } from "react";

const grades = [7, 8, 9, 10];

export default function SideBar({ selected, setSelected }) {
    return (
        <nav className={styles.nav}>
            {grades.map((grade, i) => (
                <>
                    <button
                        key={grade}
                        className={`${selected === grade ? styles.selected : ""} ${selected > grade ? styles.past : ""}`}
                        onClick={() => setSelected(grade)}
                        
                    >
                        {grade}
                    </button>
                </>
            ))}
        </nav>
    );
}