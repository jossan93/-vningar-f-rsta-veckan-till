## ES Next – En översikt för FOS24

### Mål
- Förstå vad "ES Next" betyder och hur standardiseringen funkar
- Känna till de viktigaste moderna JS-funktionerna och när de används
- Veta hur man jobbar med transpilers, polyfills och målmiljöer

### Agenda
- Varför ES Next?
- Hur JavaScript standardiseras (TC39)
- ES2015+ grunder: let/const, arrow, template literals
- Destructuring och spread/rest
- Förbättrade objekt-litteraler
- Moduler (ESM)
- Async: Promises och async/await
- Samlingar: Map & Set
- Nyheter i vardagen: optional chaining, nullish coalescing, replaceAll
- Tooling: Babel/TS, polyfills, målmiljöer

---

## Varför ES Next?
- "ES Next" = senaste stabila och kommande versioner av ECMAScript
- Ger bättre läsbarhet, säkerhet, prestanda och utvecklarupplevelse
- Branschkrav: moderna kodbaser använder ES2015+ som minimum

```js
// Förr
function add(a, b) {
  return a + b;
}

// Nu
const add = (a, b) => a + b;
```

---

## Hur standardiseringen funkar (TC39)
- TC39 (ECMA Technical Committee 39) driver specifikationen
- Förslag går genom stadier 0 → 4
  - 0: Idé, 1: Förslag, 2: Utkast, 3: Kandidat, 4: Klart (del av standard)
- Årliga releaser (ES2015, ES2016, …). "ES Next" syftar på det som är senast + på väg
- Implementationsläge: motorer (V8, SpiderMonkey), transpilers (Babel, TypeScript)


https://tc39.es/process-document/

---

## ES2015 grunder: Blockscope med let/const
- `let` och `const` ersätter ofta `var`
- `const` för oföränderliga bindningar (inte nödvändigtvis immutabla objekt)

```js
// Förr
var counter = 0;
var API_URL = "https://api.example.com";

// Nu
let counter = 0;
const API_URL = "https://api.example.com";
```

---

## Arrow functions
- Kortare funktioner

```js
// Förr
var nums = [1,2,3];
var doubled = nums.map(function (n) { return n * 2; });

// Nu
const nums = [1,2,3];
const doubled = nums.map(n => n * 2);

```

---

## Template literals
- Interpolation och multiliner

```js
// Förr
var name = "Ahmad";
var msg = "Hej, " + name + "!\nVälkommen tillbaka.";

// Nu
const name = "Ahmad";
const msg = `Hej, ${name}!\nVälkommen tillbaka.`;
```

---

## Destructuring
- Plocka ut delar från arrayer och objekt

```js
// Förr
var user = { id: 1, name: "A", role: "admin" };
var name = user.name;
var role = user.role;

var arr = [10, 20, 30];
var first = arr[0];
var third = arr[2];

// Nu
const user = { id: 1, name: "A", role: "admin" };
const { name: userName, role } = user;

const arr = [10, 20, 30];
const [first2, , third2] = arr;
```

---

## Defaultparametrar, Rest och Spread

```js
// Förr
function greet(name) { name = name || "världen"; return "Hej " + name; }

function sum() { return Array.prototype.reduce.call(arguments, function(a,b){ return a+b; }, 0); }

var a = [1,2];
var b = [3,4];
var all = a.concat(b);

var obj = { a: 1, b: 2 };
var obj2 = Object.assign({}, obj, { b: 3 });

// Nu
function greet(name = "världen") { return `Hej ${name}`; }

function sum(...nums) { return nums.reduce((a,b) => a+b, 0); }

const a2 = [1,2];
const b2 = [3,4];
const all2 = [...a2, ...b2];

const objA = { a: 1, b: 2 };
const objB = { ...objA, b: 3 };
```

---

## Moduler: import/export
- Delar kod i filer med tydliga beroenden

```js
// Förr (CommonJS i Node)
// math.cjs
function add(a,b){ return a+b; }
function mul(a,b){ return a*b; }
module.exports = { add, mul };

// app.cjs
const { add, mul } = require("./math.cjs");
console.log(add(2,3), mul(2,3));

// Nu (ESM)
// math.js
export const add = (a,b) => a+b;
export const mul = (a,b) => a*b;

// app.js
import { add, mul } from "./math.js";
console.log(add(2,3), mul(2,3));
```

---

## Promises och async/await

```js
// Förr (callback-style, XMLHttpRequest)
function loadUsersCb(done, fail) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/api/users");
  xhr.onload = function() {
    try {
      var users = JSON.parse(xhr.responseText);
      done(users);
    } catch (e) { fail(e); }
  };
  xhr.onerror = fail;
  xhr.send();
}

// Förr (Promise-kedja)
fetch("/api/users")
  .then(r => r.json())
  .then(users => console.log(users))
  .catch(console.error);

// Nu (async/await)
async function loadUsers() {
  try {
    const r = await fetch("/api/users");
    const users = await r.json();
    return users;
  } catch (err) {
    console.error(err);
    return [];
  }
}

// Promise.any – returnerar första promise som uppfylls (ignorerar avvisade)
async function loadWithFallback() {
  try {
    const data = await Promise.any([
      fetch("/api/users").then(r => r.json()),
      fetch("/backup/users").then(r => r.json())
    ]);
    return data;
  } catch (e) {
    // Om alla promisar avvisas kastas AggregateError
    console.error("Alla källor misslyckades", e);
    return [];
  }
}
```

---

## Nyare syntaktiskt socker (vardagligt nyttigt)

```js
// Förr
var city = user && user.address ? user.address.city : "Okänd";
var port = config.port || 3000; // 0 skulle ge 3000 av misstag
var name = (config.name && config.name.trim()) || "";
var result = "hello".split("l").join("L");

// Nu
const city2 = user?.address?.city ?? "Okänd"; // Nullish coalescing (null/undefined)
const city3 = user?.address?.city || "Okänd"; // Logical OR (falsy values)

const port2 = config.port ?? 3000; // 0 bevaras
const name2 = config.name?.trim() ?? "";
"hello".replaceAll("l", "L");

// Numeriska avskiljare – förbättrad läsbarhet
const million = 1_000_000;
const price = 12_345.67;
```

---

## Tooling: Babel, TypeScript, Polyfills
- Transpilers: kompilerar ny syntax till äldre JS (mål: browserslist/target)
- Polyfills: lägger till saknade API:n (t.ex. `core-js`)
- Bundlers (Vite/Webpack/Rollup) delar kod, dynamiska imports

```json
// browserslist i package.json (exempel)
{
  "browserslist": [
    ">0.5%",
    "last 2 versions",
    "not dead"
  ]
}
```

---

## Bäst praxis
- Använd `const` som standard, `let` när nödvändigt
- Utnyttja destructuring, template literals, optional chaining
- Föredra att arbeta immutable över mutable
- Håll asynkron kod ren med `async/await` och tydlig felhantering

---

## Övningar (valfria uppgifter)
1) Skriv om en funktion till `async/await` och hantera fel korrekt
2) Använd destructuring och defaultparametrar i en data-funktion
4) Ersätt kedjade null-checks med optional chaining och nullish coalescing

---

## Sammanfattning
- ES Next = moderna och kommande features i JS
- Fokus: läsbarhet, säkerhet, prestanda och utvecklarergonomi
- Rätt tooling gör att du kan använda nytt, ändå stödja gamla miljöer

---

## Referenser
- ECMAScript-spec: `https://tc39.es/ecma262/`
- TC39 proposals: `https://github.com/tc39/proposals`
- MDN JavaScript: `https://developer.mozilla.org/en-US/docs/Web/JavaScript`
- Can I Use (stöd): `https://caniuse.com/`

---
