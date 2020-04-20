console.log(" Hello From External JS")
alert('Welcome to my website')
var favColor = prompt("What is your favorite color")
alert("Great " + favColor + "  is my favorite color too")

var rentalDays = prompt("How many days total have you rented")
var moviePrice = prompt("How much money per day")
alert("Your total amount for the movies is " + parseFloat(rentalDays) * parseFloat(moviePrice))

var companies = prompt("How many companies are you employed by")
alert(companies + " ! WOW, Staying busy")
var ammount = prompt("How much did each company pay you total , please dont use commas")
var hours = prompt("How many hours did you work total")
alert("your total income for the week is " + ammount * hours)

function returnFive() {
    return 5;
}
function isShortWord(str) {
    return str.length < 5;
}
function isSameLength(str1, str2) {
    return str1.length === str2.length;
}
function getSmallerSegment(str, length) {
    return str.substring(0, length).toLowerCase();
}