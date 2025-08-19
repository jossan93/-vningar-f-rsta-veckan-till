# Algoritm- och dataprocesseringsövningar - Vecka 1
## Avancerad Javascript FOS24

---

## ENKLA ÖVNINGAR (Nivå 1)

### 1. Summera tal i array
**Problem:** Skriv en funktion som tar emot en array med tal och returnerar summan av alla tal.

**Indata:** `[1, 2, 3, 4, 5]`

**Förväntad utdata:** `15`

---

### 2. Hitta största talet
**Problem:** Skriv en funktion som hittar det största talet i en array utan att använda Math.max().

**Indata:** `[45, 23, 67, 12, 89, 34]`

**Förväntad utdata:** `89`

---

### 3. Filtrera jämna tal
**Problem:** Skapa en funktion som returnerar endast de jämna talen från en array.

**Indata:** `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`

**Förväntad utdata:** `[2, 4, 6, 8, 10]`

---

### 4. Räkna förekomster
**Problem:** Skriv en funktion som räknar hur många gånger ett specifikt värde förekommer i en array.

**Indata:** `array: [1, 2, 3, 2, 4, 2, 5], värde: 2`

**Förväntad utdata:** `3`

---

### 5. Omvänd sträng
**Problem:** Implementera en funktion som vänder på en sträng utan att använda reverse().

**Indata:** `"JavaScript"`

**Förväntad utdata:** `"tpircSavaJ"`

---

### 6. Summera alla tal i en nästlad array
**Problem:** Implementera en funktion som summerar alla tal i en array, där arrayen kan innehålla andra arrayer på godtyckligt djup.

**Indata:** `const arr = [1, [2, [3, 4]], 5];`

**Förväntad utdata:** `sumNested(arr); // 15`

---

## MEDEL ÖVNINGAR (Nivå 2)

### 7. Gruppera efter kategori
**Problem:** Du har en array med produkter. Gruppera dem efter kategori i ett objekt.

**Indata:** 
```javascript
[
  { name: "Äpple", category: "frukt", price: 15 },
  { name: "Banan", category: "frukt", price: 12 },
  { name: "Morot", category: "grönsak", price: 8 },
  { name: "Tomat", category: "grönsak", price: 20 }
]
```

**Förväntad utdata:** 
```javascript
{
  frukt: [
    { name: "Äpple", category: "frukt", price: 15 },
    { name: "Banan", category: "frukt", price: 12 }
  ],
  grönsak: [
    { name: "Morot", category: "grönsak", price: 8 },
    { name: "Tomat", category: "grönsak", price: 20 }
  ]
}
```

---

### 8. Flatten nested array
**Problem:** Skriv en funktion som plattar ut en flerdimensionell array till en endimensionell array. Hantera valfritt djup.

**Indata:** `[1, [2, 3], [4, [5, 6]], 7]`

**Förväntad utdata:** `[1, 2, 3, 4, 5, 6, 7]`

---

### 9. Anagram-kontroll
**Problem:** Skapa en funktion som kontrollerar om två strängar är anagram (innehåller samma bokstäver i olika ordning).

**Indata:** `"listen", "silent"`

**Förväntad utdata:** `true`

---

### 10. Beräkna medelvärde per nyckel
**Problem:** Du har en array med objekt som representerar försäljningsdata. Beräkna medelvärdet för varje produktkategori.

**Indata:**
```javascript
[
  { category: "elektronik", sales: 1200 },
  { category: "kläder", sales: 800 },
  { category: "elektronik", sales: 1500 },
  { category: "kläder", sales: 900 },
  { category: "elektronik", sales: 1800 }
]
```

**Förväntad utdata:**
```javascript
{
  elektronik: 1500,
  kläder: 850
}
```

---

### 11. Hitta saknade nummer
**Problem:** I en array med tal från 1 till n saknas ett tal. Hitta vilket.

**Indata:** `[1, 2, 3, 5, 6, 7, 8, 9, 10]`

**Förväntad utdata:** `4`

---

## SVÅRA ÖVNINGAR (Nivå 3)

### 12. Implementera en debounce-funktion
**Problem:** Skapa en debounce-funktion som begränsar hur ofta en funktion kan anropas. Funktionen ska vänta tills det gått en viss tid sedan sista anropet innan den faktiskt körs.

**Indata:** 
```javascript
const debouncedFunc = debounce((msg) => console.log(msg), 300);
debouncedFunc("Hello"); // Körs inte direkt
debouncedFunc("World"); // Avbryter föregående
// Efter 300ms: loggar "World"
```

---

### 13. Deep clone med cirkulära referenser
**Problem:** Implementera en funktion som gör en djup kopia av ett objekt och hanterar cirkulära referenser korrekt.

**Indata:**
```javascript
const obj = { a: 1, b: { c: 2 } };
obj.circular = obj;
```

**Förväntad utdata:** En kopia där `copy.circular === copy` (inte originalreferensen)

---

### 14. Skapa en event emitter
**Problem:** Implementera en enkel event emitter-klass med metoderna on(), emit() och off().

**Användningsexempel:**
```javascript
const emitter = new EventEmitter();
emitter.on('test', (data) => console.log('Event:', data));
emitter.emit('test', 'Hello World'); // Output: "Event: Hello World"
```

---

### 15. LRU Cache implementation
**Problem:** Implementera en Least Recently Used (LRU) cache med en maximal storlek. När cachen är full ska det minst nyligen använda värdet tas bort.

**Krav:**
- `get(key)` - hämta värde
- `put(key, value)` - sätt värde
- O(1) tidskomplexitet för båda operationerna

---

### 16. Asynkron kedja med felhantering
**Problem:** Skapa en funktion som tar en array av asynkrona funktioner och kör dem i sekvens. Om någon funktion misslyckas, ska kedjan avbrytas och felet returneras. Implementera även retry-logik för varje steg.

**Indata:**
```javascript
const tasks = [
  () => fetchUserData(),
  (userData) => fetchUserPosts(userData.id),
  (posts) => processPosts(posts)
];

runSequence(tasks, { retries: 3, delay: 1000 })
```

---

### 17. Datastruktur för ordbok med wildcard-sökning
**Problem:** Implementera en datastruktur som stödjer:
- `add(word)` - lägg till ord
- `search(pattern)` - sök med wildcard där '.' matchar vilken bokstav som helst

**Exempel:**
```javascript
dict.add("bad");
dict.add("dad");
dict.add("mad");
dict.search("pad"); // false
dict.search(".ad"); // true
dict.search("b.."); // true
```

---

### 18. Optimera array-operationer för stora datamängder
**Problem:** Du har en array med 1 miljon objekt som representerar transaktioner. Implementera en effektiv lösning för att:
1. Hitta alla transaktioner över ett visst belopp
2. Gruppera per månad
3. Beräkna total och genomsnitt per månad
4. Returnera top 5 månader med högst totalsumma

Fokusera på prestanda och minneseffektivitet.

---

### 19. Parser för matematiska uttryck
**Problem:** Bygg en parser som kan evaluera matematiska uttryck med korrekt operatorprecedens, parenteser och variabler.

**Indata:** `"2 + 3 * (4 - 1) / 2"`

**Förväntad utdata:** `6.5`

**Bonus:** Stöd för variabler: `"x + y * 2"` med `{ x: 5, y: 3 }` → `11`

---

## TIPS FÖR LÖSNINGAR

### Generella råd:
- Börja alltid med att förstå problemet fullständigt
- Tänk på edge cases (tom array, null-värden, etc.)
- Överväg tidskomplexitet för större datamängder
- Använd moderna ES6+ features där det är lämpligt
- Skriv körbar kod - optimera senare om nödvändigt

### För nivå 1:
- Fokusera på array-metoder som map, filter, reduce
- Använd for-loopar när det känns naturligt
- Testa med olika typer av indata

### För nivå 2:
- Tänk på datastrukturer (objekt vs Map, array vs Set)
- Använd hjälpfunktioner för att dela upp problemet
- Överväg både iterativa och rekursiva lösningar

### För nivå 3:
- Planera arkitekturen innan du börjar koda
- Tänk på skalbarhet och återanvändbarhet
- Använd designmönster där det är relevant
- Dokumentera komplexa delar av koden
