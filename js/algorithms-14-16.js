'use strict';
/* 14. Adott egy tömb, mely azonos darabú egész számot, és szöveget tartalmaz véletlenszerű 
sorrendben. Rendezzük úgy a tömböt, hogy minden szám után egy string következzen! Írasd ki 
a rendezett tömböt! */

const intArray = [24, 2425, 2534, 775, 78, 869, 9, 65, 36, 28, 5, 6743, 4, 345, 456, 23,];
const variableArray = [96, true, 45, 12, 'text', 3, 'yo', 23, 67, 43, NaN, 35, 567, 49, null];
const floatArray = [356.75, 45.67, 2.67, 45.6, 89.0, 345.3, 6.87, 23.67, 1.45, 89.5,];
const equalNumNotNumArray = ['hi', 5, 67, false, true, 123, 34, 'hello', 71, null, 2, 345, NaN, 'o', Infinity, 'ok',];

const makeAlternatingArray = function (arr) {
    let numArray = [];
    let notnumArray = [];
    let alternatingArray = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            numArray.push(arr[i]);
        } else {
            notnumArray.push(arr[i]);
        }
    }
    console.log('numArray: ', numArray);
    console.log('notNumArray: ', notnumArray);
    for (let i = 0; i < numArray.length; i += 1) {
        alternatingArray.push(numArray[i]);
        alternatingArray.push(notnumArray[i]);
    }
    return alternatingArray;
}
 console.log('Egyenlő számú szá és nem-szám tartalmú array: ', equalNumNotNumArray);
 console.log('Váltakozóra átszerkesztett array: ', makeAlternatingArray(equalNumNotNumArray));

/* 15. Adott egy tetszőleges pozitív egész számokat tartalmazó tömb. Válogassuk szét külön egy 
even (páros), és odd (páratlan) nevezetű tömbbe a páros, és páratlan számokat! Írjuk ki a 2 
tömböt! */

const evenNumberSelector = function (arr) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i += 1) {   
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i])
        }
    }
    return evenNumbers;
}

const oddNumberSelector = function (arr) {
    let oddNumbers = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] % 2 === 1) {
            oddNumbers.push(arr[i])
        }
    }
    return oddNumbers;
}
console.log('Az intArray: ', intArray);
console.log('Az intArray páros számai: ', evenNumberSelector(intArray));
console.log('Az intArray páratlan számai: ', oddNumberSelector(intArray));

/* 16. Adott két azonos elemszámú, csak egész számokat tartalmazó tömb. Külön tömbökbe készítsük
el a két tömb: metszetét, unióját, különbségét, és descartes szorzatát. Írassuk ki az új 
tömböket! */
let array1 = [12, 5, 7, 5, 11, 3];
let array2 = [12, 3, 8, 6, 10, 3, 5];
console.log('1. tömb: ', array1, '2. tömb: ', array2);

const removeElementsOfArr2FromArr1 = function (arr1, arr2) {
    let intersection = [];
    for (let i = 0; i < arr2.length; i += 1) {
        let foundIndex = arr1.indexOf(arr2[i]);
        if (foundIndex > -1) {
            intersection.push(arr1.splice(foundIndex, 1)[0]);
        }
    }
    return intersection;
}

const arr1MinusArr2 = function (arr1, arr2){
    let arr1_copy = arr1.slice();
    removeElementsOfArr2FromArr1(arr1_copy, arr2);
    return arr1_copy;
}

const intersectionOfArr1AndArr2 = function(arr1, arr2) {
    let arr1_copy = arr1.slice();
    return removeElementsOfArr2FromArr1(arr1_copy, arr2);
}

const unioOfArr1AndArr2 = function (arr1, arr2) {
    let unio = [];
    for (let i = 0; i < arr1.length; i += 1) {
        unio.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i += 1) {
        unio.push(arr2[i]);
    }
    return unio;
}

const descartesProductOfArr1AndArr2 = function (arr1, arr2) {
    let descartesProduct = [];
    for (let i = 0; i < arr2.length; i += 1) {
        for (let j = 0; j < arr1.length; j += 1) {
            descartesProduct.push(arr1[j]*arr2[i]);
        }
    }
    return descartesProduct;
}

console.log('A két tömb metszete: ', intersectionOfArr1AndArr2(array1, array2));
console.log('A két tömb úniója: ', unioOfArr1AndArr2(array1, array2));
console.log('1. tömb - 2. tömb: ', arr1MinusArr2(array1, array2));
console.log('2. tömb - 1. tömb: ', arr1MinusArr2(array2, array1));
console.log('A két tömb Descartes szorzata: ', descartesProductOfArr1AndArr2(array1, array2));
