'use strict';
/* 1. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legkisebb elemét! */

const intArray = [24, 2425, 2534, 775, 78, 869, 9, 65, 36, 28, 5, 6743, 4, 345, 456, 23,];
// if intArray not sequential call sort method to eliminate gaps

const getMinElementOfAnArray = function (arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log('A tömb: ', intArray);
console.log('A tömb legkisebb eleme: ', getMinElementOfAnArray(intArray));

/* 2. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legnagyobb elemét! */
const getMaxElementOfAnArray = function (arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log('A tömb legnagyobb eleme: ', getMaxElementOfAnArray(intArray));

/* 3. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb átlagát! */
const getTheAverageOfTheElementsOfAnArray = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log('A tömb elemeinek átlaga: ', getTheAverageOfTheElementsOfAnArray(intArray));

/* 4. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb összegét! */
const getSumOfTheElementsOfAnArray = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i];
    }
    return sum;
}
console.log('A tömb elemeinek összege: ', getSumOfTheElementsOfAnArray(intArray));

/* 5. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb páros elemeinek a számát! */
const numberOfEvenElementsOfAnArray = function (arr) {
    let numberOfEvenElements = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i]%2 === 0) {
            numberOfEvenElements += 1;
        }
    }
    return numberOfEvenElements;
}
console.log('A tömb páros elemeinek száma: ', numberOfEvenElementsOfAnArray(intArray));

/* 6. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb második legkisebb elemét! */
const getSecondSmallestElementOfAnArray = function (arr) {
    let smallestElement = arr[0];
    let secondSmallestElement = arr[1];
    if (arr[1] < arr[0]) {
        smallestElement = arr[1];
        secondSmallestElement = arr[0];
    }
    for (let i = 2; i < arr.length; i += 1) {
        if (arr[i] < secondSmallestElement) {
            secondSmallestElement = arr[i];
        }
        if (secondSmallestElement < smallestElement) {
            secondSmallestElement = smallestElement;
            smallestElement = arr[i];
        }
    }
    return secondSmallestElement;
}
console.log('A tömb második legkisebb eleme: ', getSecondSmallestElementOfAnArray(intArray));

/* 7. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb harmadik legnagyobb elemét! */
const getThirdLargestElementOfAnArray = function (arr) {
    let arrCopy = [];
    for (let i = 0; i < arr.length; i += 1) {
        arrCopy.push(arr[i])
    }
    let temp = 0;
    let swapped = false;
    do {
        swapped = false;
        for (let i = 0; i < arrCopy.length - 1; i += 1) {
            if (arrCopy[i] >arrCopy[i+1]) {
                temp = arrCopy[i+1];
                arrCopy[i+1]=arrCopy[i];
                arrCopy[i]=temp;
                swapped = true;
            }
        }
    } while (swapped)
    console.log('A rendezett tmb: ', arrCopy);
    return (arrCopy[arrCopy.length-3]);
}
console.log('A tömmb harmadik legnagyobb eleme: ', getThirdLargestElementOfAnArray(intArray));

/* 8. Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb 
(feltételezzük, hogy beágyazott tömböt, objektumot, egyéb iterálható elemet nem tartalmaz) tartalmazza-e 
a 23-as számot! Használj lineáris keresést! */
const variableArray = [96, true, 45, 12, 'text', 3, 'yo', 23, 67, 43, NaN, 35, 567, 49, null];

const arrayContainsNumber = function (arr, number) {
    let contains = false;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === number) {
            contains = true;
        }
    }
    return contains;
}
console.log('A vegyes tömb: ', variableArray);
console.log('A vegyes tömb tartalmazza a 23-t (linear search): ', arrayContainsNumber(variableArray, 23));

/* 9. Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, csak egész számokat tartalmazó tömb 
tartalmazza-e a 23-as számot! Használj logaritmikus keresést! Nézz utána mi az, milyen feltételei vannak, 
és hogyan valósítható meg! */
const sortArrayToIncrease = function (arr) {
    let arrCopy = [];
    for (let i = 0; i < arr.length; i += 1) {
        arrCopy.push(arr[i]);
    }
    let swapped = false,  temp = 0, j = arrCopy.length;
    do {
        swapped = false;
        j -= 1;
        for (let i = 0; i < j; i += 1) {
            if (arrCopy[i] > arrCopy[i+1]) {
                temp = arrCopy[i+1];
                arrCopy[i+1] = arrCopy[i];
                arrCopy[i]=temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arrCopy;
}
const logaritmicSearchNumberInArray = function (arr, number) {
    let includes = false;
    let min = 0;
    let max = arr.length-1;
    let middle = 0;
    do {
        middle = Math.floor((min+max)/2);
        if (arr[middle] === number) {
            return true;
        } else if (arr[middle] < number) {
            min = middle + 1;
        } else {
            max = middle - 1;
        }
    } while (min <= max)
    return includes;
}
console.log('A rendezett tömb: ', sortArrayToIncrease(intArray));
console.log('Az intArray tartalmazza a 23-t (logatithmic search): ', logaritmicSearchNumberInArray(sortArrayToIncrease(intArray), 23));

/* 10. Írd ki, hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb (feltételezzük, hogy beágyazott tömböt, objektumot 
    nem tartalmaz) hányszor tartalmazza a 23-as számot! */
const numberOccuranceInArray = function (arr, number) {
    let occurance = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === number) {
            occurance += 1;
        }
    }
    return occurance;
}
console.log('A vegyes tömb: ', variableArray)
console.log('A 23 szám előfordulási gyakorisága a vegyes tömbben: ', numberOccuranceInArray(variableArray, 23));

/* 11. Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével egy tetszőleges elemszámú, csak 
lebegőpontos számokat tartalmazó tömb elemeit növekvő sorrendbe! Írasd ki a rendezett tömböt! */
const floatArray = [356.75, 45.67, 2.67, 45.6, 89.0, 345.3, 6.87, 23.67, 1.45, 89.5,];
const bubbleSortNumberArray = function (arr) {
    let arrCopy = [];
    for (let i = 0; i < arr.length; i += 1) {
        arrCopy.push(arr[i]);
    }
    let swapped = false;
    let temp = 0;
    do {
        swapped = false;
        for (let i = 0; i < arrCopy.length - 1; i += 1) {
            if (arrCopy[i] > arrCopy[i+1]) {
                temp = arrCopy[i+1];
                arrCopy[i+1] = arrCopy[i];
                arrCopy[i] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arrCopy;
}
console.log('a floatArray: ', floatArray);
console.log('A növekvő sorrendbe rendezett floatArray: ', bubbleSortNumberArray(floatArray));

/* 12. Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével egy tetszőleges elemszámú, beágyazott 
tömb, és objektum kivételével bármilyen típusú elemeket tartalmazó tömb elemeit csökkenő sorrendbe! A nem szám típusú elemeket rakd a tömb 
végére az eredeti sorrendbe. Írasd ki a rendezett tömböt! */
const extractNumbersFromMixedArray = function (arr) {
    let numberArray = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            numberArray.push(arr[i]);
        }
    }
    return numberArray;
}

const extractNotNumbersFromMixedArray = function (arr) {
    let notNumericArray = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
            notNumericArray.push(arr[i]);
        }
    }
    return notNumericArray;
}
 console.log('Vegyes array: ', variableArray);
 console.log('A kettébontott vegyes array: ', extractNumbersFromMixedArray(variableArray), extractNotNumbersFromMixedArray(variableArray));

 const sortArrayToDecrease = function (arr) {
    let arrCopy = [];
    for (let i = 0; i < arr.length; i += 1) {
        arrCopy.push(arr[i]);
    }
    let swapped = false;
    let temp = 0;
    do {
        swapped = false;
        for (let i = 0; i < arrCopy.length-1; i += 1) {
            if (arrCopy[i] < arrCopy[i+1]) {
                temp = arrCopy[i+1];
                arrCopy[i+1] = arrCopy[i];
                arrCopy[i]=temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arrCopy;
}

const sortVariableArrayToIncrease = function (arr) {
    return sortArrayToDecrease(extractNumbersFromMixedArray(arr)).concat(extractNotNumbersFromMixedArray(arr));
}
console.log('A varableArray rendezve: elöl számok csökkenve, hátul egyéb: ', sortVariableArrayToIncrease(variableArray));