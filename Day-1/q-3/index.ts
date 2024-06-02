let myName = "Nehal"

// lowerCase

let lowercase= myName.toLocaleLowerCase()

//upperCase

let upperCase = myName.toLocaleUpperCase()

//titleCase 

let titleCase = myName.charAt(0).toLocaleUpperCase() + myName.slice(1).toLocaleLowerCase()

//calling

console.log(lowercase)
console.log(upperCase)
console.log(titleCase)