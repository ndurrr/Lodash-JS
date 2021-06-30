// first create variable called _ and run file using node test/lodash.js to check 
// if code is working properly


const _ = {

// IMPLEMENT _.clamp() OBJECT

// the .clamp() object below modifies the provided number to be within 
// the two provided bounds (i.e. lower bound and upper bound)

// If the provided number is smaller than the lower bound, it will return 
// the lower bound as the final number

// If the number is larger than the upper bound, it will return 
// the upper bound as the final number

// If the number is already within the two bounds, it will return the 
// number as the final number

  clamp(num, lower, upper) {
   let lowerBound = Math.max(num, lower);
   let clampedNum = Math.min(lowerBound, upper);
   return clampedNum;
  },

// IMPLEMENT _.inRange() OBJECT

// .inRange() takes three arguments: a number, a start value, 
// and an end value

// the .inRange() checks to see if the provided number falls within the 
// range specified by the start and end values


  inRange(num, startVal, endVal) {

    // If no end value is provided to the method, the start value will be 0 
    // and the end value will be the provided start value

    if (endVal === undefined) {
      endVal = startVal;
      startVal = 0;
    }

    // If the provided start value is larger than the provided end value, 
    // the two values should be swapped

    if (startVal > endVal) {
      let tempVal = endVal;
      endVal = startVal;
      startVal = tempVal;
    }

    // If the provided number is smaller than the start value, .inRange() will return false
    // If the provided number is larger than or equal to the end value, .inRange() will return false

    let isinRange = num >= startVal && num < endVal;
      return isinRange;

    // test .inRange() method, run node test/in-range.js in terminal
    // test all other methods this way
  },

// IMPLEMENT _.words() OBJECT

// .words() takes one argument: a string, and splits the string into an array of words

  words(string) {
    const words = string.split(' ');
    return words;
  },

// IMPLEMENT _.pad() OBJECT

// .pad() takes two arguments: a string and a length, then adds spaces evenly 
// to both sides of the string to make it reach the desired length

// NB: Extra padding is added to the end of the string if an odd amount of padding 
// is required to reach the specified length

  pad(string, length) {
    if (length <= string.length) {
      return string;
    }
    const startPaddingLength = Math.floor((length - string.length) / 2);
    const endPaddingLength = length - string.length - startPaddingLength;
    const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength)
    return paddedString;
  },

// IMPLEMENT _.has() OBJECT

// .has() takes two arguments: an object and a key, then checks to see 
// if the provided object contains a value at the specified key

// .has() will return true if the object contains a value at the key 
// and will return false if not

  has(object, key) {
    const hasValue = object[key];
    if (hasValue != undefined) {
      return true;
    }
    return false;
  },

// IMPLEMENT _.invert() OBJECT

// .invert() takes one argument: an object, and iterates through 
// each key/value pair in the provided object and swaps the key and value
  
  invert (object) {
    let invertedObject = {};
    for (let i in object) {
      let originalValue = object[i];
      invertedObject[originalValue] = i;
    }
    return invertedObject;
  },

// IMPLEMENT _.findKey() OBJECT

// .findKey() iterates through each key/value pair in the provided object 
// and calls the predicate function with the value 

// .findKey() returns the first key that has a value that returns a truthy value from the predicate function
// .findKey() returns undefined if no values return truthy values from the predicate function

  findKey (object, func) {
    for (let key in object) {
      const value = object[key];
      const result = func(value);
      
      if (result) {
        return key;
      }
    }
    return undefined;
  },

// IMPLEMENT _.drop() OBJECT

// .drop() takes two arguments: an array and a number representing the number of items 
// to drop from the beginning of the array

// it returns a new array which contains the elements from the original array, 
// excluding the specified number of elements from the beginning of the array

// the method drops one element if the number of elements to drop is unspecified

  drop (array, n) {
    if (n === undefined) {
      n = 1;
    }

    let droppedArray = array.slice(n, array.length);

    return droppedArray;
  },

// IMPLEMENT _.dropWhile() OBJECT

// .dropWhile() takes two arguments: an array and a predicate function

// The supplied predicate function takes three arguments: the current element, 
// the current element index, and the whole array

// .dropWhile() creates a new copy of the supplied array, dropping elements from the beginning
// of the array until an element causes the predicate function to return a falsy value

  dropWhile (array, predicate) {
    const cb = (element, index) => {
      return !predicate(element, index,  array);
    }

    let dropNumber = array.findIndex(cb);

    let droppedArray = this.drop(array, dropNumber);

    return droppedArray;
  },

// IMPLEMENT _.chunk() OBJECT

// .chunk() takes two arguments: an array and a size, then breaks up the supplied array 
// into arrays of the specified size

// .chunk() returns an array containing all of the previously-created array chunks 
// in the order of the original array

// If the array can’t be broken up evenly, the last chunk will be smaller than the specified size

// If no size is supplied to the method, the size is set to 1

  chunk (array, size = 1) {
    let arrayChunks = [];
    for (let i=0; i < array.length; i+= size) {
      let arrayChunk = array.slice(i, i+size);
      arrayChunks.push(arrayChunk)
    }
    return arrayChunks;
  }
};

// module.exports = _;