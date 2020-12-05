let favourite_place = ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"];

// console.log(favourite_place.length)
let removed_favourite_place = favourite_place.splice(3,1);
console.log(favourite_place)

/*
Create a function called calcCircumfrence:

Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN"
*/

function calcCircumfrence(radius) {
    return 2 * Math.PI * radius;
}

console.log(calcCircumfrence(5))