"use strict";
let usernames = ["admin", "user1", "user2", "user3", "user4"];
usernames.forEach((user) => {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
});
