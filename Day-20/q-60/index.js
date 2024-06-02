// this profile sets itself up and can share info about the user
let userProfile = (function () {
    let name = "john";
    let age = 30;
    // this part shares the user's details
    return {
        displayInfo: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        },
    };
})();
// asking the profile to tell us about the user
userProfile.displayInfo(); // it says the user's name and age
export {};
// we made a self-setup profile that can talk about the user.
