// a Map is a collection of key value pairs where both keys and values can be of any type.each key is a Map is must be unique

// creating Map

const countries = new Map();

// adding entries by .set

countries.set("pakistan", "islamabad");
countries.set("france", "paris");
countries.set("japan", "tokyo");

// retriving values by .get as a argument

const pakCapistal = countries.get("pakistan");
console.log(`capital of pakistan is ${pakCapistal}`);

// checking for a key

const isPak = countries.has("pakistan");
console.log(`does Map hs pakistan ${isPak}`);

// removing entries by .delete as a argument

countries.delete("france");
console.log(countries.has("france"));

// clearing the Map by .clear

//countries.clear()

console.log(countries.size);

// getting the size of a Map by .size

console.log(countries.size);

// iterating over the Map

// using foreach

countries.forEach((value, key) => {
  console.log(`${key}:${value}`);
});

// using for...of loop

for (let [key, value] of countries) {
  console.log(`${key}:${value}`);
}
