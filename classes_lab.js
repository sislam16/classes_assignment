// # Class Exercises
//
// (1 - 6 are the same as on the previous lab, but creating classes using ES6 syntax instead of constructor functions)
//
// ## Question 1
//
// a. Write a class called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.
// b. Write a method in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.

class Person{
  constructor(firstName, middleName, lastName){
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
  }
  fullName(){
    return `${this.firstName} ${this.middleName} ${this.lastName}`
  }
}

let asher = new Person('Asher', 'Sean', 'Rivera')
let olive = new Person('Olive', 'Zaire', 'Thomas')

console.log(asher.firstName) // part A
console.log(asher.fullName()) // part B



// ## Question 2
//
// a. Create a class called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
// b. Add a method to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7

class Book{
  constructor(title, author, rating){
    this.title = title;
    this.author = author;
    this.rating = rating;
  }
  isGood(){
    if(this.rating >= 7){
      return true
    }
    return false
  }
}
let book1 = new Book('Becoming', 'Michelle Obama', 8)
let book2 = new Book('Where The Crawdads Sing', 'Delia Owens', 7)
let book3 = new Book('The New Girl', 'Daniel Silva', 5)

console.log(book3)// part A
console.log(book3.isGood()) //part B

// ## Question 3
//
// a. Create a `Dog` class with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
// b. Add a method called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"
// c. Add a method called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"
// d. Add a method called `toString` that returns a description of the dog:

class Dog{
  constructor(name, breed, mood, hungry){
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.hungry = hungry;
  }
  playFetch(){
    this.hungry = true;
    this.mood = "playful";
    console.log(`${this.name}: Ruff!`)
  }
  feed(){
    if(this.hungry === true){
      this.hungry = false;
      console.log('Woof!')
    }else{
      console.log("The dog doesn't look hungry")
    }
  }
  toString(){
    console.log(`${this.name}, is a ${this.mood} black ${this.breed}.`)
  }
}

let nico = new Dog('Nico', 'Pug', 'Happy', true)
console.log(nico) // part A
nico.playFetch() // part B
nico.feed() // part C
nico.toString() // part D

// ## Question 4
//
// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:
//
// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273
//
// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.
// b. Make a class called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.
//
// ```js
// let outsideTempt = new Celsius(10.0)
// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
// ```
// c. Give `Celsius` a method called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).
let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin: 273.15
}

class Celsius{
  constructor(celsius){
    this.celsius = celsius
  }
  getFahrenheitTemp(){
    return (this.celsius * (1.8))+ 32
  }
  getKelvinTemp(){
    return (this.celsius + 273.15)
  }
  isBelowFreezing(){
    if(outsideTempt.celsius > freezingPoint.celsius){
      return false
    }
      return true
  }
}
let outsideTempt = new Celsius(10)
console.log(outsideTempt.celsius)
console.log(outsideTempt.getKelvinTemp())
console.log(outsideTempt.getFahrenheitTemp())
console.log(outsideTempt.isBelowFreezing())

// ## Question 5
//
// a. Create a class called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`
// b. Create an method inside `Movie` called `blurb` that returns a formatted string describing the movie.
// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."
class Movie{
  constructor(name, year, genre, cast, description){
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast;
    this.description = description;
  }
  blurb(){
    return (`${this.name} came out in ${this.year}. ${this.description} `)
  }
}

let coco = new Movie('Coco', 2017, 'Adventure', ['Anthony Gonzalez', 'Gael Garcia Bernal', 'Benjamin Bratt', 'Alanna Ubach', 'Renee Victor'],  'It is about an aspiring musician Miguel, confronts his family\'s ancestral ban on music and travels to the Land of the Dead to find his great-great-grandfather, a legendary singer.')

console.log(coco) // part A
console.log(coco.blurb()) // part B

// ## Question 6
//
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.
//
// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.
//
// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)
//
// [Vectors at mathisfun.com](https://www.mathsisfun.com/algebra/vectors.html)
//
// ```js
// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
// console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}
//
// var v3 = new Vector(3, 4)
// console.log(v3.getLength());
// // => 5
// ```

class Vector{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  plus(vector){
    return  `{ x:${this.x + vector.x}, y:${this.y +vector.y}}`
  }
  minus(newVector){
    return `{x:${this.x - newVector.x}, y:${this.y -newVector.y}}`
  }
  getLength(){
    return Math.sqrt((this.x * this.x) + (this.y * this.y));

  }
}
let v1 = new Vector(1, 2)
let v2 = new Vector (2,3)
let v3 = new Vector(3,4)
console.log(v2)
console.log(v1.plus(v2));
console.log(v1.minus(v2));
console.log(v3.getLength())

// ## Question 7
//
// a. Make a class called `Car` with properties `make` and `model`.  Create an instance of a `Car`
 class Car{
   constructor(make, model){
     this.make = make;
     this.model = model;
   }

 }

 let audi = new Car('Audi', 'Q8')
 console.log(audi)
// // b. Make a class called `Bike` with properties `gears` and `hasBell`.  Create an instance of `Bike`
class Bike{
  constructor(gears, hasBell){
    this.gears = gears;
    this.hasBell = hasBell;
  }

}

let bike1 = new Bike(1 ,true)
console.log(bike1)
// c. Give each class a static method called `numberOfWheels` that returns the number of wheels (2 for bikes, 4 for cars).  Why does it make sense for this to be a static method instead of an instance method?
//
// ## Question 8
//
// a. Make a class called `Vehicle` with properties `color` and `name`.  Give it a method called `makeSound` which logs "WHHOOSSSH" to the console
class Vehicle{
  constructor(color, name){
    this.color = color;
    this.name = name;
  }
  makeSound(){
    console.log('WHHOOSSSH!')
  }
}
// b. Modify your `Car` and `Bike` classes from Question 7 to extend the `Vehicle` class.
class Car extends Vehicle{
  constructor(name, color, make, model){
    super(color,name)
  }
}
// c. Create a new `Bike` instance that has a `color` of "green" and `name` "Bikey McBikeface"
class Bike extends Vehicle{
  constructor(name, color, gears, hasBell){
    super(color,name)
  }
}
// d. Create a new `Car` instance that has a `color` of "red" and `name` "Carry McCarface"
