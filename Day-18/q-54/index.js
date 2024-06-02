// a way to make a flexible list
const createObjectWithDynamicKey = (key, value) => {
    let dynamicObject = {};
    // // setting up a section in the list with a changeable name
    //@ts-ignore
    dynamicObject[key] = value;
    return dynamicObject;
};
// using the flexible list setup for a user's preference
let userPreference = createObjectWithDynamicKey("theme", "dark");
// showing user's choice
console.log(userPreference);
export {};
