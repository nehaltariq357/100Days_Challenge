// Original function for calculating the area of a rectangle
function calculateArea(h: number, w: number) {
  return h * w;
}

// Refactored into an arrow function

const calculateAreaArrow = (h: number, w: number) => {
  return h * w;
};

console.log(calculateAreaArrow(5, 6));
