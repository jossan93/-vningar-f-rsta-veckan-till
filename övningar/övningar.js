// övning 2
const tal2 = [45, 23, 67, 12, 89, 34];
tal2.sort(function(a,b){return b-a});
let highest = tal2[0]


// övning 3
const tal3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = SVGAnimatedNumberList.filter((num) => num % 2 === 0);
console.log(even);

//övning 4
const tal4 = [1, 2, 3, 2, 4, 2, 5];
const find = tal4.filter(2);
console.log(2)

//övning 5
let tal5 = "JavaScript";
const svar = sum.split("").reverse().join("");
console.log(svar);

//övning 6
flatten

// öving 7
const indata = [
  { name: "Äpple", category: "frukt", price: 15 },
  { name: "Banan", category: "frukt", price: 12 },
  { name: "Morot", category: "grönsak", price: 8 },
  { name: "Tomat", category: "grönsak", price: 20 }
]

const frukt = Object.fromEntries(indata); // filtera har eller innan?
console.log(frukt);