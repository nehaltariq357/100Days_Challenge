// making a list (enum) for different types of vehicles
var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["car"] = 0] = "car";
    vehicleType[vehicleType["truck"] = 1] = "truck";
    vehicleType[vehicleType["motorcycle"] = 2] = "motorcycle";
})(vehicleType || (vehicleType = {}));
// showing one type of vehicle from the list
console.log(vehicleType.car); // it shows 0 because enums start counting from 0
export {};
// here we're just checking what number the car category got in our list
