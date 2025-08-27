// JUICE Corner

let juicePrice;
let sizePrice;
let sugarPrice;

// Inputs
let juiceType = prompt("Select your Juice: Orange, Apple, Mango");
let glassSize = prompt("Select Glass Size: Small, Medium, Large");
let sugarChoice = prompt("Do you want Extra Sugar or No Sugar?");

// Juice 
if (juiceType == "Orange" || juiceType == "orange") {
    juicePrice = 150;
} else if (juiceType == "Apple" || juiceType == "apple") {
    juicePrice = 120;
} else if (juiceType == "Mango" || juiceType == "mango") {
    juicePrice = 100;
} else {
    juicePrice = 0;
}

// Size
if (glassSize == "Small" || glassSize == "small") {
    sizePrice = 50;
} else if (glassSize == "Medium" || glassSize == "medium") {
    sizePrice = 100;
} else if (glassSize == "Large" || glassSize == "large") {
    sizePrice = 150;
} else {
    sizePrice = 0;
}

// Sugar
if (sugarChoice == "Extra Sugar" || sugarChoice == "extra sugar") {
    sugarPrice = 20;
} else {
    sugarPrice = 0;
}

// Total 
let totalBill = juicePrice + sizePrice + sugarPrice;

// Output 
console.log("Selected Juice: " + juiceType);
console.log("Size: " + glassSize);
console.log("Sugar: " + sugarChoice);
console.log("Total Bill: " + totalBill);