let movieTitle: string = "Amadeus"
movieTitle = "    Arrival Of The Fittest   "
// movieTitle: number = 9 
console.log('Movie Title:', movieTitle.replace(/\s/g, '').toUpperCase());

let numCatLives: number = 9
numCatLives++

console.log('Number of cat lives:', numCatLives)

let gameOver: boolean = false
console.log('Game Over:', gameOver)

// Type Inference

// Assumes this is a string
let tvShow = "The Expanse"
// tvShow = false

// The ANY type
let thing: any = "hello"
thing = 12
thing = false
thing = {}
thing = []
thing = () => {}
thing = <HTMLInputElement>document.getElementById("input")

// The UNKNOWN type
const movies = ["Amadeus", "The Godfather", "The Dark Knight"]

// string OR undefined
let foundMovie
let foundMovie2: any
for (let movie of movies) {
    if (movie === "Amadeus") {
        foundMovie = 12
    }
}

foundMovie2()
foundMovie2 = 12