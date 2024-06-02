let magicains: string[] = ["Alice", "David", "Chris"];

function show_magicians(magicain: string[]) {
  magicain.forEach((magicain) => {
    console.log(`The Great ${magicain}`);
  });
}
show_magicians(magicains);
