// This function sees if both inputs are true
function checkBothTrue(val1, val2) {
    // Only says true if both val1 and val2 are true
    return val1 && val2;
}
// Trying it with true and false
console.log(checkBothTrue(true, false)); // Shows false
export {};
// It checks two things, but since one is false, the answer is false.
