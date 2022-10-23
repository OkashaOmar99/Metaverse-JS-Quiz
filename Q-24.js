let s1 = "This";
let s2 = "That";
let s3 = ["Those", 43];
let s4 = [];
console.log("Is s1 == s2 | False");
console.log(s1 == s2);
console.log("Is s1 != s2 | True");
console.log(s1 == s2);

console.log("Is s1 == s1.lowercase | False");
console.log(s1 == s1.toLocaleLowerCase());
console.log("Is s1 != s1.lowercase | True");
console.log(s1 != s1.toLocaleLowerCase());

console.log("Is 9 < 8 | False");
console.log(9 < 8);
console.log("Is 2 > 1 | True");
console.log(2 > 1);
console.log("Is 96 == 26 | False");
console.log(96 == 26);


console.log("Is 9 == 7+2 && 4+3 ==3 | False");
console.log(9 == 7 + 2 && 4 + 3 == 3);
console.log("Is 9 < 5 || 5>7 | True");
console.log(9 < 5 || 5 < 7);

console.log("Is s3 == array | False");
console.log(typeof(s3) == "array");

