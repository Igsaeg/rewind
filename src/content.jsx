import { useEffect, useRef } from "react"
import styles from "./content.module.css"
import { album } from "./assets/imageData.js"

export default function Content({ selected }) {
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, [selected]);

    return (
        <div className={styles.content} ref={contentRef}>
            <div>
                {album[selected].map((img, i) => (
                    <img key={i} src={img} />
                ))}
            </div>
        </div>
    );
}