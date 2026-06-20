const grades = [7, 8, 9, 10];
const sizes = ['thumb', 'small', 'medium', 'large'];

const loadImages = () => {
  const result = {};
  
  grades.forEach(grade => {
    const sizeImages = sizes.map(size => 
      Object.values(import.meta.glob(`./${grade}${size}/*.jpg`, { eager: true }))
        .map(m => m.default)
    );
    
    result[grade] = sizeImages[0].map((thumb, i) => ({
      thumb: sizeImages[0][i],
      small: sizeImages[1][i],
      medium: sizeImages[2][i],
      large: sizeImages[3][i]
    }));
  });
  
  return result;
};

export const album = loadImages();