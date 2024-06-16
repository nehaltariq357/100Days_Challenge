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

const myFunc =(callback:any,name:string)=>{
callback(name)
}

const youFunc =(name:string)=>{
console.log(`my name is ${name}`)
}

myFunc(youFunc,"nehal")



// This function accepts a callback function and invokes it with given arguments
function executeCallback(
  callback: (arg1: number, arg2: number) => void,
  arg1: number,
  arg2: number
) {
  callback(arg1, arg2); // Invokes the callback with the specified arguments
}

// Example callback function that adds two numbers
const add = (a: number, b: number) => {
  console.log(a + b); // Outputs the sum of a and b
};

executeCallback(add, 5, 3); // Outputs: 8
// Demonstrates invoking a callback function with arguments to perform an addition.

// continue from here

const main = (
  callback: (one: number, two: number) => void,
  one: number,
  two: number
) => {
  callback(one, two);
};

const sum = (a: number, b: number) => {
  console.log(a + b);
};

main(sum, 4, 4);

// practice

const main2 = (
  callback: (one: number, two: number, three: number) => void,
  one: number,
  two: number,
  three: number
) => {
  callback(one, two, three);
};

const sum2 = (a: number, b: number, c: number) => {
  console.log(a + b + c);
};

main2(sum2, 8, 2, 2);






