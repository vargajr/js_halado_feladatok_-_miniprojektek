'use strict';
const intArray = [24, 2425, 2534, 775, 78, 869, 9, 65, 36, 28, 5, 6743, 4, 345, 456, 23,];
const variableArray = [96, true, 45, 12, 'text', 3, 'yo', 23, 67, 43, NaN, 35, 567, 49, null];
const floatArray = [356.75, 45.67, 2.67, 45.6, 89.0, 345.3, 6.87, 23.67, 1.45, 89.5,];

/* 13. Adott egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb. A tömb elemeit rendezzük növekvő sorrendbe.
Ezután a felhasználótól kérjünk be egy számot (addig kérjünk be értéket, míg valóban egy véges egész számot ad meg).
A számot szúrjuk be a tömbbe úgy, hogy a tömb továbbra is rendezett maradjon, tehát a megfelelő indexű helyre kerüljön be a plusz elem.
Írasd ki a rendezett tömböt! */
const bubbleSortNumberArrayToIncrease = function (arr) {
    let sortedArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        sortedArr.push(arr[i]);
    }
    let swapped = false;
    let temp = 0;
    do {
        swapped = false;
        for (let i = 0; i < sortedArr.length - 1; i += 1) {
            if (sortedArr[i] > sortedArr[i+1]) {
                temp = sortedArr[i+1];
                sortedArr[i+1] = sortedArr[i];
                sortedArr[i] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return sortedArr;
}
console.log('Tömb egész számokból: ', intArray);
let sortedArray = bubbleSortNumberArrayToIncrease(intArray);
console.log('Az egész számok tömb növekvő sorrendbe szervezve: ', sortedArray);

// a prompt-ból mindig stringet kapunk
let userNumber = parseInt(prompt('Adj meg egy egész számot! '), 10);
// let userNumber = 150;

// A callbacck függvény:   const bigger = function (element) { return element > userNumber; }
const bigger = (element) => element > userNumber;

let index = sortedArray.findIndex(bigger);
console.log('A rendezett tömbben a ennél a számnál: ', userNumber, 'nagyobb szám indexe: ', index);

sortedArray.splice(index, 0, userNumber);
console.log(sortedArray);