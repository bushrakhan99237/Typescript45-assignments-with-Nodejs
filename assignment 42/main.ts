// define the function to show magicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// function to make magicians great through .map()it will ,modify array 
function make_great(magicians: string[]){
  return  magicians.map(name => `the great ${name}`);
}

// define an array of magicians names
let magician_name = ["harry poter","bushra","ayyan"]

// call make_great funtion to modify magicians names
let great_magicians = make_great(magician_name);

// call show_magicians that show modified list of magicans
show_magicians(great_magicians);