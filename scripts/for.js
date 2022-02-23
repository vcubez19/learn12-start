// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 


var html = [];
var count = 99;
let verses = document.getElementById("beer");


while ( count > 0 ) {
    html = [
        `${count} bottles of beer on the wall, ${count} bottles of beer`,
        ` Take one down, pass it around, ${count - 1} bottles of beer on the wall!<br>`
    ].join(".");
    verses.innerHTML += html;
    count--;

}


//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph


let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


for ( let month in months ) {
    document.getElementById("for-in").innerHTML += `${months[month]}<br>`;
}


// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph


let string = "This is a big string";


var text = "";
for ( let i of string ) {
    text += i;
}


document.getElementById("for-of").innerText = text;


// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph


var count = 1
while ( count < 51 ) {
    document.getElementById("while").innerHTML += `${count}<br>`;
    count++;
}

