// define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magicians great through .map()it will ,modify array 
function make_great(magicians) {
    return magicians.map(function (name) { return "the great ".concat(name); });
}
// define an array of magicians names
var magician_name = ["harry poter", "bushra", "ayyan"];
// making a copy of orginal array through .slice() function
var copy_magician_names = magician_name.slice();
// modify the copied array to include "the great" with thier names
var copy_magicians_names = make_great(copy_magician_names);
// show both arrays orignal and copied
// orginal
console.log("orginal array\n");
show_magicians(magician_name);
// copied
console.log("\ncopied array\n");
show_magicians(copy_magician_names);
