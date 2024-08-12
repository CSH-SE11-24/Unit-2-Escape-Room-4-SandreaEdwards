const prompt = require('prompt-sync')()


const age = prompt("whats your age?")
parseInt(age)
if (age >= 18){
  console.log("you can vote!")
}else {
  console.log("you can't vote.")
}

let guess = prompt("password: ")

while (guess !== "SE11"){
  console.log(guess)
}

let competencies = ["if/else", "while", "for", "functions", "objects"]

for(let i=1; i<5; i++){
  console.log(i)
}











