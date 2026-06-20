const g7 = import.meta.glob('./g7/*.jpg', { eager: true });
const g8 = import.meta.glob('./g8/*.jpg', { eager: true });
const g9 = import.meta.glob('./g9/*.jpg', { eager: true });
const g10 = import.meta.glob('./g10/*.jpg', { eager: true });

const toArray = (glob) => Object.values(glob).map(m => m.default);

export const album = {
    7: toArray(g7),
    8: toArray(g8),
    9: toArray(g9),
    10: toArray(g10),
};