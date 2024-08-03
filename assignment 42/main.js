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
// call make_great funtion to modify magicians names
var great_magicians = make_great(magician_name);
// call show_magicians that show modified list of magicans
show_magicians(great_magicians);
