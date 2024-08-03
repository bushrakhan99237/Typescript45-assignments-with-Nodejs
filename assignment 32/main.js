// array of current users
var current_users = ["bushra", "maham", "alina", "rubina", "sultana"];
// array of new users
var new_users = ["faiz", "waqas", "qasim", "ali", "ayyan"];
// loop through new_users to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    // making a condition for username already exist and save in  our_condition variable
    var ourcondition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // print different messages using if_else statments 
    if ("Our_condition") {
        console.log("sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is available"));
    }
});
