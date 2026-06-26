const globs = {
    7: {
        thumb: import.meta.glob('./g7_thumb/*.jpg', { eager: true }),
        loaded: import.meta.glob('./g7_loaded/*.jpg', { eager: true }),
        original: import.meta.glob('./g7_original/*.jpg', { eager: true })
    },
    8: {
        thumb: import.meta.glob('./g8_thumb/*.jpg', { eager: true }),
        loaded: import.meta.glob('./g8_loaded/*.jpg', { eager: true }),
        original: import.meta.glob('./g8_original/*.jpg', { eager: true })
    },
    9: {
        thumb: import.meta.glob('./g9_thumb/*.jpg', { eager: true }),
        loaded: import.meta.glob('./g9_loaded/*.jpg', { eager: true }),
        original: import.meta.glob('./g9_original/*.jpg', { eager: true })
    },
    10: {
        thumb: import.meta.glob('./g10_thumb/*.jpg', { eager: true }),
        loaded: import.meta.glob('./g10_loaded/*.jpg', { eager: true }),
        original: import.meta.glob('./g10_original/*.jpg', { eager: true })
    }
};

const toArray = (glob) => Object.values(glob).map(m => m.default);

export const album = Object.fromEntries(
    Object.entries(globs).map(([grade, sizes]) => {
        const thumbs = toArray(sizes.thumb)
        const loaded = toArray(sizes.loaded)
        const original = toArray(sizes.original)

        return [
            grade,
            thumbs.map((thumb, i) => ({
                thumb,
                loaded: loaded[i],
                original: original[i]
            }))
        ]
    })
)