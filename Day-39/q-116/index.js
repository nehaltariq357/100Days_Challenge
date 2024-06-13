const logSeason = (month) => {
    switch (month.toLowerCase() // Convert month to lowercase to handle case insensitivity
    ) {
        case "december":
        case "january":
        case "february":
            console.log("Winter");
            break;
        case "march":
        case "april":
        case "may":
            console.log("Spring"); // Capitalized for consistency
            break;
        case "june":
        case "july":
        case "august":
            console.log("Summer"); // Capitalized for consistency
            break;
        case "september":
        case "october": // Fixed typo from "octuber" to "october"
        case "november":
            console.log("Fall"); // Capitalized for consistency
            break;
        default:
            console.log("Invalid month");
            break;
    }
};
// Testing the function
logSeason("November"); // "Fall"
logSeason("JUNE"); // "Summer" (Case insensitive check)
logSeason("octuber"); // "Invalid month" (Typo case)
logSeason("feburary"); // "Invalid month" (Typo case)
logSeason("May"); // "Spring"
export {};
