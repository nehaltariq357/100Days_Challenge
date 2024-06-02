let laptops = [
  {
    make: "Dell",
    model: "XPS 15",
    year: 2021,
  },
  {
    make: "Apple",
    model: "Macbook pro",
    year: 2020,
  },
  {
    make: "HP",
    model: "Spectre x360",
    year: 2021,
  },
];
// destructing

let [laptop1, , laptop3] = laptops;

console.log(laptop1, laptop3);
