"use strict";
let magicians = ["Alice", "David", "Chris"];
const show_magicians = (magician) => {
    magician.forEach(magician => {
        console.log(magician);
    });
};
const make_great = (magician) => {
    let greatMagicians = [];
    magician.forEach(magician => {
        greatMagicians.push(`${magician} the great`);
    });
    return greatMagicians;
};
let greatMagicians = make_great(magicians.slice());
show_magicians(magicians); //show original names
show_magicians(greatMagicians); //show modified names
