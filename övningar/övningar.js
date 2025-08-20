
// öving 7
const indata = [
  { name: "Äpple", category: "frukt", price: 15 },
  { name: "Banan", category: "frukt", price: 12 },
  { name: "Morot", category: "grönsak", price: 8 },
  { name: "Tomat", category: "grönsak", price: 20 }
]
const gruppat = indata.reduce((acc, produkt) => {
  // kolla om acc redan har en nyckel för produkt.category
  // annars skapa en tom array
  // lägg sedan till produkten i den arraye
    return acc;
}, {});
console.log(frukt);
