import { useEffect, useRef } from "react"
import styles from "./content.module.css"
import { album } from "./assets/imageData.js"
import LazyImage from "./LazyImage.jsx"

export default function Content({ selected }) {
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, [selected]);

    return (
        <div className={styles.content} ref={contentRef}>
            <div key={selected}>
                {album[selected].map((imageSet, i) => (
                    <LazyImage
                        key={`${selected}-${i}`}
                        thumbSrc={imageSet.thumb}
                        smallSrc={imageSet.small}
                        mediumSrc={imageSet.medium}
                        largeSrc={imageSet.large}
                        alt={`Image ${i}`}
                    />
                ))}
            </div>
        </div>
    );
}