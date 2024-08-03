// define a function with a rest parameter that accept items arugments representing our sandwich
function makeSandwich(...items: string[]){
 console.log("making a sandwich with the following items : \n");

 items.forEach(singleitem => console.log(singleitem));

 console.log("now enjoy Sandwich");
}

// call the function3 times with 3 different number of arguments
makeSandwich("chicken","cheese","mayo","egg");

makeSandwich("bread","butter");

makeSandwich("bread","butter","mayo","egg","cheese","chicken","lettuce","tomato");