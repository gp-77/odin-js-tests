function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}


function sumOfTripledEvensEnhanced(array) {
  // map()
  // filter()
  // reduce()

  let arrayEven = array.filter(isEven);

  const arrayEvenMapped = arrayEven.map((num) => num * 3);

  const sum = arrayEvenMapped.reduce((total, currItem) => {
    return total + currItem;
  });

  return sum
}

function isEven(num) {
  return num % 2 === 0;
}


const arr = [1, 2, 3, 4, 5];

const sumOdin = sumOfTripledEvens(arr);
const sumOdinEnhanced = sumOfTripledEvensEnhanced(arr);

console.log("Odin sum: " + sumOdin);
console.log("Odin sum enhanced: " + sumOdinEnhanced);