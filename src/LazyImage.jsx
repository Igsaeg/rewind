import { useState, useEffect, useRef } from 'react';
import styles from './LazyImage.module.css';

export default function LazyImage({ thumbSrc, smallSrc, mediumSrc, largeSrc, alt }) {
    const [src, setSrc] = useState(thumbSrc);
    const [loaded, setLoaded] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            const isHighSpeed = navigator.connection?.effectiveType === '4g';
            setSrc(isHighSpeed ? largeSrc : mediumSrc);
            observer.disconnect();
        }
        }, { rootMargin: '50px', threshold: 0.01 });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [mediumSrc, largeSrc]);

    return (
        <div className={styles.imageWrapper}>
            <img
                ref={ref}
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                onLoad={() => setLoaded(true)}
                className={loaded ? styles.imageLoaded : styles.imagePlaceholder}
            />
        </div>
    );
}
