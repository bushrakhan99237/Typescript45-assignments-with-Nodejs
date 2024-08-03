// define a function to print each magician name from an array
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// define an array containing magicians name
var magician_names = ["harray poter", "bushra", "ayyan"];
// call the function to print each magician name
show_magicians(magician_names);
