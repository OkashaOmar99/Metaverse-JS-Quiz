const guest = ["Kashif", "Zeeshan", "Asad"];
for (let invguest of guest) {
    console.log("Hi " + invguest + ", would you like to join me for dinner?")
}
console.log(guest);


// Q15 Starts here
console.log("Asad can't make it to the dinner.")
guest.pop();
guest.push("Dayan");
console.log(guest);
for (let invguest of guest) {
    console.log("Hi " + invguest + ", would you like to join me for dinner?")
}
console.log("I have found a bigger dinner table.");


// // Q16 starts here
console.log("Sending invite to everyone again.");
guest.unshift("Ayan");
guest.unshift("Babar");
guest.push("Aliyan");
for(let invguest of guest){
    console.log("Hi " + invguest + ", would you like to join me for dinner?")
}
console.log(guest);
console.log("The table won't arrive in time so i can only invite 2 ppl");


// Q17 starts here
// Used shift/pop to remove the ppl invited to dinner
guest.shift();
console.log("Sorry Babar, I can't invite you to dinner.");
guest.pop();
console.log("Sorry Aliyan, I can't invite you to dinner.");
guest.shift();
console.log("Sorry Ayan, I can't invite you to dinner.");
guest.shift();
console.log("Sorry Kashif, I can't invite you to dinner.");
console.log(guest);
// Also removing the last two ppl
guest.pop();
guest.pop();
console.log(guest);

// Q-19 Starting
console.log("I am inviting only 2 ppl for dinner");
// Program ends here