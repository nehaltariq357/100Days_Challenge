
const make_sandwitch = (...item: string[]) => {
    return `${item.join(", ")}`
}
console.log(make_sandwitch("ham", "cheese"))
console.log(make_sandwitch("turkey", "lettuce", "tomato"))
console.log(make_sandwitch("avocado", "sprouts", "musturd", "mayo"))

