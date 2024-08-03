// array of current users
let current_users = ["bushra","maham","alina","rubina","sultana"]

// array of new users
let new_users = ["faiz","waqas","qasim","ali","ayyan"]

// loop through new_users to check for usernames avaibility
new_users.forEach(new_one_user =>{
    // making a condition for username already exist and save in  our_condition variable

    let ourcondition =current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
 // print different messages using if_else statments 
if(`Our_condition`){
 console.log(`sorry ${new_one_user} is already taken`)
}else{
    console.log(`this username ${new_one_user} is available`)
}
})