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
function greet(person: string = "stranger") {
    return `Hello there, ${person}!`
}

console.log(greet())