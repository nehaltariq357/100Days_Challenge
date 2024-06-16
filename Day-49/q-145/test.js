// function main (callback:any,newName:string){
// callback(newName)
// }
// const arrow = (name:string)=>{
// console.log(`hello ${name}`)
// }
// main(arrow,"Nehal")
// exp-2
// const main2 = (callback2: any, name: string) => {
//   callback2(name);
// };
// const main3 = (name: string) => {
//   console.log(`hello ${name}`);
// };
// main2(main3, "nehal");
// exp3
const myFunc = (callback, name) => {
    callback(name);
};
const youFunc = (name) => {
    console.log(`my name is ${name}`);
};
myFunc(youFunc, "nehal");
// This function accepts a callback function and invokes it with given arguments
function executeCallback(callback, arg1, arg2) {
    callback(arg1, arg2); // Invokes the callback with the specified arguments
}
// Example callback function that adds two numbers
const add = (a, b) => {
    console.log(a + b); // Outputs the sum of a and b
};
executeCallback(add, 5, 3); // Outputs: 8
// Demonstrates invoking a callback function with arguments to perform an addition.
// continue from here
const main = (callback, one, two) => {
    callback(one, two);
};
const sum = (a, b) => {
    console.log(a + b);
};
main(sum, 4, 4);
// practice
const main2 = (callback, one, two, three) => {
    callback(one, two, three);
};
const sum2 = (a, b, c) => {
    console.log(a + b + c);
};
main2(sum2, 8, 2, 2);
export {};
