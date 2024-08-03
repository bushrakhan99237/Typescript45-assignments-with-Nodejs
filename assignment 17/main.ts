// creating a guest list array.
let guestlist = ["qasim","ali","ayyan","noman"];

// making varibale for those guest who cant come.
let dontcome = guestlist[0];

// print the name of guest who cant come. 
console.log(dontcome, "nh aa saqty");

// add or remove values from guest list array.
guestlist.splice(0, 1, "zahid");

// message print for bigger table 
console.log("good news i we found a bigger table for dinner");

// adding a new guest at starting index of array.
guestlist.unshift("ziyaad");

// adding a new guest at ending index od array.
guestlist . push("zain");

// get a middle index of our guest list array.
let middleindex: number = Math.floor(guestlist. length / 2);

// adding a new guest to middle index of array.
guestlist.splice(middleindex, 0,"bushrakhan");

// print message of updated list.
console.log("update list of our guests");

// sending a invitation message to our guests one by one thier names.
guestlist.forEach(oneguest => console.log(`salam ${oneguest},would you like to dinner with me`));

//assignment17 start.
//infrom that only one guests can be invited for dinner.
console.log("unfortunately,the new dinner table wont arrive on time,so i can only invite two guests to dinner with me");

// using while-loop to remove guets from the array until only two names remain
while(guestlist.length> 2){
     let removedguest = guestlist.pop();
     console.log(`sorry ${removedguest} i cant invite you to dinner`)
}
// sending a invitations to the last two guest on the list
console.log("invitation to the last 2 guests");
guestlist.forEach(lasttwo => console.log(`luckly ${lasttwo}, you are still inivted to dinner`));

// removing last two guest from the list.
guestlist.pop();
guestlist.pop();

console.log("empty:",guestlist);