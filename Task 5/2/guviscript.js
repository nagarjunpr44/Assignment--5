// Problem:
// Write a function called “addFive”.
// Given a number, “addFive” returns 5 added to that number.

// Input:
// addFive(5);
// addFive(0);
// addFive(-5);
// Output:
// 10
// 5
// 0

var num = 10;
function addFive(num) { 
    num+=5;
    console.log(num);
}
var result = addFive(num);

// Write a function called “getOpposite”.
// Given a number, return its opposite
// Input:
// getOpposite(5);
// getOpposite(0);
// getOpposite(-5);
// getOpposite(“5a”);
// getOpposite(5.5);
// Output:
// -5
// 0
// 5
// -1
// -1

var num = 10;
function getOpposite(num) {
    if(num==0)console.log(0);
    
    else{
        num=num*(-1);
    console.log(num);
        }
}
var result = getOpposite(num);


// Fill in your code that takes an number minutes and converts it to seconds.
// Examples
// toSeconds(5) ➞ 300
// toSeconds(3) ➞ 180
// toSeconds(2) ➞ 120

var min = 5;
function toSeconds(min)
{
    min=min*60;
    console.log(min);
}
var secs = toSeconds(min);

// Problem
// Create a function that takes a string and returns it as an integer.
// Examples
// toInteger(“6”) ➞ 6
// toInteger(“1000”) ➞ 1000
// toInteger(“12”) ➞ 12

var mystr = "5";
function toInteger(mystr) {
    mystr=Number(mystr);
    console.log(mystr);
}
var myint = toInteger(mystr)

// Problem
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// Examples
// nextNumber(0) ➞ 1
// nextNumber(9) ➞ 10
// nextNumber(-3) ➞ -2

var myint = 0;
function nextNumber(myint) {
    myint+=1;
    console.log(myint);
}
var myNextint = nextNumber(myint)

// Create a function that takes an array and returns the first element.
// Examples
// getFirstElement([1, 2, 3]) ➞ 1
// getFirstElement([80, 5, 100]) ➞ 80
// getFirstElement([-500, 0, 50]) ➞ -500

var arr = [1, 2, 3];
function getFirstElement(arr)
{
    arr=arr[0];
    console.log(arr);
}
var data = getFirstElement(arr);

// Convert Hours into Seconds
// Write a function that converts hours into seconds.
// Examples
// hourToSeconds(2) ➞ 7200
// hourToSeconds(10) ➞ 36000
// hourToSeconds(24) ➞ 86400

var hours =20 ;
function hourToSeconds(arr)
{
    hours=hours*(60*60);
    console.log(hours);
}
var data = hourToSeconds(hours)


// Find the Perimeter of a Rectangle
// Create a function that takes height and width and finds the perimeter of a rectangle.
// Examples
// findPerimeter(6, 7) ➞ 26
// findPerimeter(20, 10) ➞ 60
// findPerimeter(2, 9) ➞ 22

function findPerimeter(num1,num2)
{
    perimeter=2*(num1+num2);
    console.log(perimeter);
}
var peri = findPerimeter(6,7);

// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37
// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

 function lessThan100(num1,num2)
{
    if(num1+num2<100)
    {
        console.log(true); 
    }
    else
    {
        console.log(false);
    }

}
var res = lessThan100(22,15)

// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
// Examples
// remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9
// remainder(5, 5) ➞ 0

function remainder(num1,num2)
{
    var rem=num1%num2;
    console.log(rem);
}
var res = remainder(1,3)

// Old macdonald had a farm:
// MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// turkey = 2 legs
// horse = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
// Examples
// CountAnimals(2, 3, 5) ➞ 36
// CountAnimals(1, 2, 3) ➞ 22
// CountAnimals(5, 2, 8) ➞ 50

function CountAnimals(tur,horse,pigs)
{
    tur=tur*2;
    horse=horse*4;
    pigs=pigs*4;
    var sum=tur+horse+pigs;
    console.log(sum);
}
var legs = CountAnimals(2,3,5)

// Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
// Examples
// divisibleByFive(5) ➞ true
// divisibleByFive(-55) ➞ true
// divisibleByFive(37) ➞ false

function divisibleByFive(num1) 
{
    if(num1%5==0)
    {
        console.log(true);

    }
    else{
        console.log(false);
    }
}
var divisible = divisibleByFive(5)

// Write a function called “isEven”.
// Given a number, “isEven” returns whether it is even.

// Input:
// isEven(12);
// isEven(0);
// isEven(11);
// isEven(“11h”);
// Output:
// true
// true
// false
//-1


function isEven(num){
    if(num%2==0)
    {
        console.log("Even");
    }
    else{
        console.log("odd");
    }
   }
   var even = isEven(5)


//    Write a function called “areBothOdd”.
//    Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
   
//    Input:
//    areBothOdd(1, 3);
//    areBothOdd(1, 4);
//    areBothOdd(2, 3);
//    areBothOdd(0, 0);
//    Output:
//    true
//    flase
//    flase
//    flase

function areBothOdd(num1, num2)
   {
    if(num1%2!=0 && num2%2!=0)
    {
        console.log("Both are odd");
    }
    else
    {
        console.log("one of them is Even");
    }
   }
   var res=areBothOdd(5,6)


//    Write a function called “getFullName”.
//    Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
   
//    Input:
//    getFullName(“GUVI”, “GEEK”);
//    getFullName(“GUVI”, );
//    getFullName(, “GEEK”);
//    getFullName(“”, “”);
//    Output:
//    “GUVI GEEK”
//    “GUVI”
//    “GEEK”
//    “”

function getFullName(firstName, lastName)
    {
        console.log(firstName+" "+lastName);
    }
    var res=getFullName("Raju","rathore")

//     Write a function called “getLengthOfWord”.
// Given a word, “getLengthOfWord” returns the length of the given word.
// Input:
// getLengthOfWord(“GUVI”);
// getLengthOfWord(“”);
// getLengthOfWord();
// getLengthOfWord(9);
// Output:
// 4
// 0
// -1
// -1

function getLengthOfWord(word1)
{
    console.log(word1.length);
}
var res=getLengthOfWord("GUVI")

// Write a function called “isSameLength”.
// Given two words, “isSameLength” returns whether the given words have the same length.
// Input:
// isSameLength(“GUVI”, “GEEK”);
// Output:
// true

function isSameLength(word1, word2)
{
    if(word1.length==word2.length)
    {
        console.log(true);
    }
    else
    {
        console.log(false);
    }
}
var res=isSameLength("Guvi","Lessons")

// Create a function to calculate the distance between two points defined by their x, y coordinates


function getDistance(x1, y1, x2, y2)
{
    return Math.sqrt(Math.pow(x2 - x1, 2) +Math.pow(y2 - y1, 2) * 1.0);
}
console.log(getDistance(100, 100, 400, 300));

//Reverse a string


function reverseString(s)
{
    if(!str || str.length < 2 || 
        typeof str!== 'string') {
    return 'Not valid'; 
}
const revArray = [];
const length = str.length - 1;

for(let i = length; i >= 0; i--) {
    revArray.push(str[i]);
}
return revArray.join('');
}
var s = reverseString("JavaScript");
console.log(s);








