var people = ["Lars", "Søren", "Peter", "Kristian", "Tobias", "Bo", "Jan", "Jon"]

// var result = people.filter(function (e) {
//     if(e.length <= 3) return e
// })
// console.log(result)
// ----------------------

// var result = people.map(function (current) {
//     return current.toUpperCase()
// })
// console.log(result)

// ----------------------

// var myFilter = function (array, callback) {
//     for(var i = 0; i < array.length; i++){
//         if(array[i].length <= 3) callback(array[i])
//     }
//
// }
//
// myFilter(people, function (name) {
//     console.log(name)
// })

// ----------------------

// var myForEach = function (array, callback) {
//     for(i = 0; i < array.length; i++){
//         callback(array[i])
//     }
// }
// myForEach(people, function (name) {
//     console.log(name)
// })

// ----------------------

// var myMap = function (array, callback) {
//     for(i = 0; i < array.length; i++){
//         callback(array[i].toUpperCase())
//     }
// }
//
// myMap(people, function (name) {
//     console.log(name)
// })
// ----------------------

// Array.prototype.myFilter = function () {
//     result2 = []
//     for (i = 0; i < this.length; i++) {
//         if(this[i].length <= 3) result2.push(this[i])
//     }
//     return result2
// }
//
// console.log(people.myFilter())

// ----------------------

// Array.prototype.getBigger = function () {
//     var thisResult = []
//     for (i = 0; i < this.length; i++) {
//         thisResult.push(this[i].toUpperCase())
//     }
//     return thisResult
// }

// console.log(people.getBigger())

// ----------------------

var a = [1,2,3];
var b = [1,2,3];
//
// function HandleNumArrays(na1, na2, callback) {
//     var thisResult = []
//     for(var i = 0; i < na1.length; i++){
//         thisResult.push(na1[i]+na2[i])
//     }
//     callback(thisResult)
// }
//
// HandleNumArrays(a, b, function (res) {
//     console.log(res.join(", "))
// })

// ----------------------

// function HandleNumArrays2(na1, na2, callback) {
//     var thisResult = 0;
//     for(var i = 0; i < na1.length; i++){
//         thisResult += (na1[i]+na2[i])
//     }
//     callback(thisResult)
// }
//
// HandleNumArrays2(a,b,function (res) {
//     console.log(res)
// })
// ----------------------

// function HandleNumArrays10(na1, callback){
//     var thisResult = [];
//     for(var i = 0; i < na1.length; i++){
//         thisResult.push(na1[i]*10)
//     }
//     callback(thisResult)
// }
//
// HandleNumArrays10(a, function (res) {
//     console.log(res.join(", "))
// })

// ---------------------- Objects

// var myObject = {name: "Lone", birthday: "13/05-77", hobby: "spise", email: "hejmeddig@lol.dk"}
// for(var property in myObject){
//     console.log(property)
//     // console.log(myObject[property])
// }
// console.log("\n")
//
// delete myObject.hobby
// for(var property in myObject){
//     console.log(property)
// }
//
// console.log(myObject.hasOwnProperty("email"))
// console.log(myObject.hasOwnProperty("emailzz"))

// ----------------------

// function Person(firstName, lastName, age) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
// }
// //
// Person.prototype.getInfo = function () {
//     console.log(this.firstName + " " + this.lastName + ", " + this.age)
// }
//
// var p1 = new Person("Søren", "Petersen", 20)
// p1.getInfo()

// ----------------------

// var myObject = {name: "Lone", birthday: "13/05-77", hobby: "spise", email: "hejmeddig@lol.dk"}
//
// function listAllProperties(o) {
//     var objectToInspect;
//     var result = [];
//
//     for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)){
//         result = result.concat(Object.getOwnPropertyNames(objectToInspect));
//     }
//
//     return result;
// }
//
// console.log(listAllProperties(myObject))
//
// delete myObject.hobby
//
// console.log(listAllProperties(myObject))

// ----------------------

// var Person = function() {
//     var name = "Søren Petersen";
//     var age = 22;
//
//     function setName(newName) {
//         name = newName
//     }
//
//     function setAge(newAge) {
//         age = newAge
//     }
//     return {
//         setName: function() {setName();},
//         getName: function () {getName();},
//         getPersonInfo: function() { return name + ", " + age;}
//     }
// };
//
// var p1 = Person();
// console.log(p1.getPersonInfo())

// ----------------------











