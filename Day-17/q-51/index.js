// Original function for calculating the area of a rectangle
function calculateArea(h, w) {
    return h * w;
}
// Refactored into an arrow function
const calculateAreaArrow = (h, w) => {
    return h * w;
};
console.log(calculateAreaArrow(5, 6));
export {};
