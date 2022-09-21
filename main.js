// Exercise 1
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(person3.pizza)
console.log(person3.tacos)
console.log(person3.burgers)
console.log(person3.ice_cream)

// Exercise 2

function Person(name,age){
    this.name = name
    this.age = age

    this.printInfo = (sport) => {
    console.log(`This is the ${sport} star ${this.name}, they are ${this.age}.`)
    }
}

const newPerson = new Person('John', 26)
const newPerson2 = new Person('Jane', 27)
console.log(newPerson.printInfo('basketball'))


// Exercise 3

const greaterThanTen = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(num > 10 == 0){
                resolve('Small Word')        
            } else {
                reject('Big Word')
            }
        }, 100)
    })
}
const response = greaterThanTen()
setTimeout(() => {
    console.log(response)}, 200)