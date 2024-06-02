
function make_car(manufacture: string, model: string, ...options: [string, any][]) {
    let car = { manufacture, model }
    //@ts-ignore
    options.forEach(([key, value]) => car[key] = value)
    return car
}

console.log(make_car("toyota", "corolla", ["color", "red"], ["year", 2020]))
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));


