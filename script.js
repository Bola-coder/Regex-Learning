"use strict";

// Regex learning

const myString = "All The characters23!! are in tHe__  ttTttcttt lowercase format\
\n mississippi is aLl the longest river\n Ohh my all Liver@3! ohhhhhhma";

// Testing if a word exist in a string
const myRegex = /characters/;
const isRegex = myRegex.test(myString);
console.log(isRegex); //returns true
console.log(myRegex.ignoreCase) // returns false

// Using the global and the ignore case in regex
const myRegex2 = /the/gi;
console.log(myString.match(myRegex2));

// Using the class selection
const myRegex3 = /[a-e]/gi;
console.log(myString.match(myRegex3));
console.log(myRegex2.ignoreCase) // returns true

const myRegex4 = /[^the$]/;
console.log(myString.match(myRegex4));

// Checking for multiline sttements
const myRegex5 = /all/mgi;
console.log(myString.match(myRegex5));
console.log(myRegex5.multiline) // returns true

// The + Quantifier
const myRegex6 = /t+/gi;
console.log(myString.match(myRegex6))

// Matching the WildCard Period(Dot)
const myRegex7 = /lo.[a-z]+/mgi;
console.log(myString.match(myRegex7));

// Checking for all letters and numbers with the \w 
const myRegex8 = /\w/mgi;
console.log(myString.match(myRegex8));

// Checking for Non alphanumerics using \W
const myRegex9 = /\W/mgi;
console.log(myString.match(myRegex9));

// Checking for numerics only using the \d
const myRegex10 = /\d/mgi;
console.log(myString.match(myRegex10));

// Checking for Non Digits using \D
const myRegex11 = /\D/mgi;
console.log(myString.match(myRegex11));

// Checking for WhiteSpace with \s
const myRegex12 = /\s/g;
console.log(myString.match(myRegex12));

// Checking for everything else except whitespace with \S
const myRegex13 = /\S/g;
console.log(myString.match(myRegex13));

// Specifying upper and lower number of matches
const myRegex14 = /oh{3,6}ma/;
console.log(myRegex14.test(myString)); // returns true

// Specifying only lower number of matches
const myRegex15 = /oh{4,}ma/;
console.log(myRegex15.test(myString)); // returns true

// Specifying exact number of matches
const myRegex16 = /oh{4}ma/;
console.log(myRegex16.test(myString)); // returns false

