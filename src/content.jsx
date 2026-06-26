import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styles from "./content.module.css"
import { album } from "./assets/imageData.js"

function LazyImage({ imageSet, index, selected, setActiveImageSrc }) {
    const [src, setSrc] = useState(imageSet.thumb)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return

            const fullImage = new Image()
            fullImage.src = imageSet.loaded

            fullImage.onload = () => {
                setSrc(imageSet.loaded)
            }

            observer.disconnect()
        }, { threshold: 0.01 })

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [imageSet.loaded, imageSet.thumb, selected])

    return (
        <img
            key={`${selected}-${index}`}
            ref={ref}
            src={src}
            alt={`Image ${index}`}
            decoding="async"
            loading="lazy"
            className={styles.image}
            onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setActiveImageSrc(imageSet.original)
            }}
        />
    )
}

export default function Content({ selected }) {
    const [activeImageSrc, setActiveImageSrc] = useState(null)
    const contentRef = useRef(null)

    useEffect(() => {
        if (contentRef.current) { contentRef.current.scrollTop = 0 }
    }, [selected])

    return (
        <div className={styles.content} ref={contentRef}>
            <div key={selected}>
                {album[selected].map((imageSet, i) => (
                    <LazyImage
                        key={`${selected}-${i}`}
                        imageSet={imageSet}
                        index={i}
                        selected={selected}
                        setActiveImageSrc={setActiveImageSrc}
                    />
                ))}
            </div>

            {activeImageSrc && createPortal(
                <div className={styles.modal} onClick={() => setActiveImageSrc(null)}>
                    <img src={activeImageSrc} alt="" onClick={(e) => e.stopPropagation()} />
                </div>,
                document.body
            )}
        </div>
    )
}