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
                        <svg viewBox="0 11 20 13" key={`line-${i}`} className={selected > grade ? styles['past-line'] : ""} fill="none">
                            <path
                                d="M10,0 C2,6 18,12 10,18 C2,24 18,30 10,40"
                                strokeWidth="0.8"
                                strokeLinecap="round"
                            />
                        </svg>
                    )}
                </>
            ))}
        </nav>
    );
}