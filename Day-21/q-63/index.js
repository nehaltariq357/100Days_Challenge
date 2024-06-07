// Creating a custom type (type alias) for shapes that could be circles or rectangles
// Describing a circle using our Shape type
let circle = {
    kind: "circle",
    radius: 5,
};
// Describing a rectangle using our Shape type
let rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20,
};
// Showing what we described
console.log(circle);
console.log(rectangle);
export {};
// We made a flexible program that can describe different shapes in detail.
