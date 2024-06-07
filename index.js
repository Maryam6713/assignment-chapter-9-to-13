//-------Chapter 9-----------//
//---------Question 1--------//

var cityNmae = prompt("Enter the name of city \n write Karachi");
if(cityNmae !== "Karachi"){
    alert("welcome to the city of lights!")
}

//---------Question 2---------//

var gender = prompt("Enter your gender\n male or female");
if(gender === "male"){
    alert("Good Morning Sir")
}else if(gender === "female"){
       alert("Good Morning Ma'am")
}else{
    alert("Wrote incorret")
}

//---------Question 3----------//

var singnalColor = prompt("Enter the signal color from the given below \n Red \n Yellow \n Green");
if(singnalColor === "red"){
    alert("Must Stop!")
}else if (singnalColor === "yellow"){
    alert("Ready to go!")
}else if (singnalColor === "green"){
    alert("Move now!")
}else{
        alert("Wrote incorret")
 }

//---------Question 4---------//

var remainingFuel = prompt("Enter the remaing fuel in your car (in litres)");
if( remainingFuel <= 0.25){
    alert("Please refill the fuel in your car!")
}else{
    alert("Do not to refill the fuel now!")
}

//---------Question 5----------//
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
Output: "given condition for variable a is true alert message will be displayed"

 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
Output:"No alert message will be displayed because the condition is false."

 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
Output: "condition 2 is true and condition 4 is true alert messages will be displayed."

 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
Output: "The cost equals alert message will be displayed."

 if (true){
alert("True");
}
if (false){
alert("False");
}
Output: "Only True alert message will be displayed."

 if("car" < "cat"){
alert("car is smaller than cat");
}
Output: "car is smaller than cat alert message will be displayed because in string comparison, car comes before cat alphabetically."

//--------Question 6-------------//

// Taking input for marks obtained in three subjects
let subject1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
let subject2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
let subject3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));

// Taking input for total marks
let totalMarks = parseFloat(prompt("Enter total marks for each subject:"));

// Calculating total marks obtained
let totalMarksObtained = subject1 + subject2 + subject3;

// Calculating percentage
let percentage = (totalMarksObtained / (3 * totalMarks)) * 100;

// Computing grade based on percentage
let grade;
if (percentage >= 90) {
    grade = 'A+';
} else if (percentage >= 80) {
    grade = 'A';
} else if (percentage >= 70) {
    grade = 'B';
} else if (percentage >= 60) {
    grade = 'C';
} else if (percentage >= 50) {
    grade = 'D';
} else {
    grade = 'Fail';
}

// Displaying the percentage and grade
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade);

//----------Question 7---------//

// Storing the secret number (ranging from 1 to 10)
let secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompting the user to guess the secret number
let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Checking the user's guess
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Oops! Try again.");
}

//-----------Question 8----------//

// Prompting the user to enter a number
let userNumber = parseInt(prompt("Enter a number:"));

// Checking if the number is divisible by 3
if (userNumber % 3 === 0) {
    alert("The number is divisible by 3!");
} else {
    alert("The number is not divisible by 3.");
}

//-----------Question 9-----------//

// Prompting the user to enter a number
let userInput = parseInt(prompt("Enter a number:"));

// Checking if the number is even or odd
if (userInput % 2 === 0) {
    alert("The number is even!");
} else {
    alert("The number is odd!");
}


//-----------Question 10------//

javascript
// Prompting the user to enter the temperature
let temperature = parseInt(prompt("Enter the temperature:"));

// Checking the temperature and displaying message accordingly
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It's freezing cold!");
}

//------------Question 11---------//

// Prompting the user to enter the first number
let firstNumber = parseFloat(prompt("Enter the first number:"));

// Prompting the user to enter the second number
let secondNumber = parseFloat(prompt("Enter the second number:"));

// Prompting the user to enter the operation
let operation = prompt("Enter the operation (+, -, *, /, %):");

let result;

// Performing the operation based on user input
if (operation === '+') {
    result = firstNumber + secondNumber;
} else if (operation === '-') {
    result = firstNumber - secondNumber;
} else if (operation === '*') {
    result = firstNumber * secondNumber;
} else if (operation === '/') {
    result = firstNumber / secondNumber;
} else if (operation === '%') {
    result = firstNumber % secondNumber;
} else {
    result = "Invalid operation";
}

// Displaying the result to the user
alert("Result: " + result);

//--------------Chapter 12 and 13 -----------//
//-------------Question 1-------------------//

// Prompting the user to enter a character
let input = prompt("Enter a character (number or string):");

// Converting the input to its ASCII code
let charCode = input.charCodeAt(0);

// Checking if the input is a number
if (charCode >= 48 && charCode <= 57) {
    alert("The input is a number.");
} 
// Checking if the input is an uppercase letter
else if (charCode >= 65 && charCode <= 90) {
    alert("The input is an uppercase letter.");
} 
// Checking if the input is a lowercase letter
else if (charCode >= 97 && charCode <= 122) {
    alert("The input is a lowercase letter.");
} 
// If none of the above conditions are met
else {
    alert("The input is not a number or a letter.");
}

//-----------Question 2---------//

// Prompting the user to enter the first integer
let num1 = parseInt(prompt("Enter the first integer:"));

// Prompting the user to enter the second integer
let num2 = parseInt(prompt("Enter the second integer:"));

// Checking which number is larger
if (num1 > num2) {
    alert(num1 + " is larger.");
} else if (num2 > num1) {
    alert(num2 + " is larger.");
} else {
    alert("Both integers are equal.");
}

//---------------Question 3---------------//

// Prompting the user to enter a number
let number = parseInt(prompt("Enter a number:"));

// Checking if the number is positive, negative, or zero
if (number > 0) {
    alert("The number is positive.");
} else if (number < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}

//-------------Question 4------------//

// Function to check if a character is a vowel
function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

// Prompting the user to enter a character
let character = prompt("Enter a character:");

// Checking if the entered character is a vowel
if (character.length === 1 && /[a-zA-Z]/.test(character)) {
    if (isVowel(character)) {
        alert("True - The character is a vowel.");
    } else {
        alert("False - The character is not a vowel.");
    }
} else {
    alert("Please enter a single alphabet character.");
}

//-------------Question 5-----------//

// Storing the correct password in a variable
let correctPassword = "password123";

// Asking the user to enter their password
let userPassword = prompt("Enter your password:");

// Validating the passwords
if (userPassword === "") {
    alert("Please enter your password.");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
} else {
    alert("Incorrect password.");
}

//-----------------Question 6----------//

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

//--------------Question 7--------------//

// Taking input time from the user
let userInt = prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):");
let time = parseInt(userInt);

// Implementing the conversion using if, else if, and else statements
if (time >= 0 && time < 1200) {
    console.log("The time in AM/PM format is: " + time + "am");
} else if (time >= 1200 && time < 2400) {
    let pmTime = time - 1200;
    console.log("The time in AM/PM format is: " + pmTime + "pm");
} else {
    console.log("Invalid input. Please enter a time in 24-hour clock format.");
}