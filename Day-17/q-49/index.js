const logHobbies = (...hobbies) => {
    hobbies.forEach(hobbies => {
        console.log(`i enjoy ${hobbies}`);
    });
};
logHobbies("reading", "coding", "cycling");
export {};
