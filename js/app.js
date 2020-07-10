console.log("linked");
//Create a variable that is equal to an empty array and push the values 1-10 into the array using a For Loop.

var myArray = [];
for (i = 0; i < 10; i++) {
    myArray.push(i);
console.log(myArray);
}

//Repeat the same steps as above, but you're going to use a While Loop instead, push the values 1-10(inclusive) in descending order.
var myArrayA = [];
var i = 10;
while (i >= 1) {   
myArrayA.push(i);
i--;
console.log(myArrayA);
}

// Again set a Variable to an empty array but this time push a set of odd numbers 11-21 into the array using a For Loop
var myArrayB = [];
for (i = 11; i < 22; i += 2) {
    myArrayB.push(i);
console.log(myArrayB);
}

//This time around you'll be pushing values onto an array but you will be counting backwards instead! Same set up as the other three questions, but use the numbers 15-1 and count backwards by 2.
var myArrayC = [];
for (i = 15; i > 0; i -= 2) {
    myArrayC.push(i);
console.log(myArrayC);
}