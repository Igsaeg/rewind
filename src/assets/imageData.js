const globs = {
  7: {
    thumb: import.meta.glob('./g7_thumb/*.jpg', { eager: true }),
    small: import.meta.glob('./g7_small/*.jpg', { eager: true }),
    medium: import.meta.glob('./g7_medium/*.jpg', { eager: true }),
    large: import.meta.glob('./g7_large/*.jpg', { eager: true })
  },
  8: {
    thumb: import.meta.glob('./g8_thumb/*.jpg', { eager: true }),
    small: import.meta.glob('./g8_small/*.jpg', { eager: true }),
    medium: import.meta.glob('./g8_medium/*.jpg', { eager: true }),
    large: import.meta.glob('./g8_large/*.jpg', { eager: true })
  },
  9: {
    thumb: import.meta.glob('./g9_thumb/*.jpg', { eager: true }),
    small: import.meta.glob('./g9_small/*.jpg', { eager: true }),
    medium: import.meta.glob('./g9_medium/*.jpg', { eager: true }),
    large: import.meta.glob('./g9_large/*.jpg', { eager: true })
  },
  10: {
    thumb: import.meta.glob('./g10_thumb/*.jpg', { eager: true }),
    small: import.meta.glob('./g10_small/*.jpg', { eager: true }),
    medium: import.meta.glob('./g10_medium/*.jpg', { eager: true }),
    large: import.meta.glob('./g10_large/*.jpg', { eager: true })
  }
};

const toArray = (glob) => Object.values(glob).map(m => m.default);

export const album = Object.fromEntries(
  Object.entries(globs).map(([grade, sizes]) => [
    grade,
    toArray(sizes.thumb).map((thumb, i) => ({
      thumb: toArray(sizes.thumb)[i],
      small: toArray(sizes.small)[i],
      medium: toArray(sizes.medium)[i],
      large: toArray(sizes.large)[i]
    }))
  ])
);