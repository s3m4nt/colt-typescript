function square(num: number, txt: string) {
    const sum = num * num
    const phrase = txt.toUpperCase()
    
    return `${sum} -- ${phrase}`
}

console.log(square(25,'hello all the people of the world'))

const doSomething = (person: string, age: number, isFunny: boolean) => {
    return `Hello ${person}, you are ${age} years old and ${isFunny ? "are funny!" : "not funny!!"}`
}

console.log(doSomething("Tonya Harding", 35, false))

//
// using default function parameters
//
function greet(person: string = "stranger"):string {
    return `Hello there, ${person}!`
}

console.log(greet())

//////// 
// stating an OR type
///////
function rando(num: number | string): string | number {
    if (Math.random() > 0.5) {
        return num.toString()
    }
    return num
}
console.log(`Rando function: ${rando("stringy!")}`)

//////// 
// anonymous functions
///////
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
colors.map((color:string): string => {
    return color.toUpperCase()
})
console.log(`Anonymous functions - to ANY:  ${colors}`)