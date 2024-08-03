// creating a array
let usernmame = ["areej","madiha","hifza","humna","admin"];

// using foreach loop on array
usernmame.forEach(oneuser =>{
    if(oneuser === "admin"){
console.log(`hello ${oneuser},would you like to see a status report?`)
    }else{
        console.log(`hello ${oneuser}, thank you for logging in again.`)
    }
})