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

                    {i < grades.length - 1 && (
                        <svg viewBox="5 11 10 10" key={`line-${i}`} className={selected > grade ? styles['past-line'] : ""} fill="none">
                            <path
                                d="M10,11 C7,14 13,17 10,20 C7,23 13,26 10,29"
                                strokeWidth="0.6"
                                strokeLinecap="round"
                            />
                        </svg>
                    )}
                </>
            ))}
        </nav>
    );
}