
// övning 1 
const tal = [1, 2, 3, 4, 5];
let sum = 0;

tal.forEach(tal => {
    sum += tal;
});

console.log(sum);
/*

// övning 2
const tal2 = [45, 23, 67, 12, 89, 34];
tal2.sort(function(a,b){return b-a});
let highest = tal2[0]


// övning 3
const tal3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = tal3.filter((num) => num % 2 === 0);
console.log(even);

//övning 4
const tal4 = [1, 2, 3, 2, 4, 2, 5];
const find = tal4.filter((num) => num === 2);
console.log(find.length)
*/

/*
//övning 5
let tal5 = "JavaScript";
const svar = tal5.split("").reverse().join("");
console.log(svar);


//övning 6
function sumNested(arr) {
  let sum = 0;

  arr.forEach(item => {
    if (Array.isArray(item)) {
      sum += sumNested(item);
    } else {
      sum += item;
    }
  });

  return sum;
}

const arr = [1, [2, [3, 4]], 5];
console.log(sumNested(arr));
*/