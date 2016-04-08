// var uniq = function(array) {
//   var result = [];
//   for (var i = 0; i < array.length; i++) {
//     if (result.indexOf(array[i]) === -1) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// };
//
// var arr = [1, 2, 1, 3, 3];
//
// console.log(uniq(arr));
//
// var twoSum = function(array) {
//   var result = [];
//
//   for (var i = 0; i < array.length; i++) {
//     for (var j = i; j < array.length; j++) {
//       if (array[i] + array[j] === 0 && i !== j) {
//         result.push([i, j]);
//       }
//     }
//   }
//   return result;
// };
//
// var arr = [1, 0, -1, 4, 3, -3];
//
// console.log(twoSum(arr));

// var myTranspose = function(array) {
//   var result = [
//     [],
//     [],
//     []
//   ];
//
//   for (var i = 0; i < array[0].length; i++) {
//     for (var j = 0; j < array[i].length; j++){
//       result[i][j] = array[j][i];
//     }
//   }
//
//   return result;
// };
//
// var rows = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ];
//
//   console.log(myTranspose(rows));

function addOne(num) {
  return num + 1;
}

function add(num1, num2) {
  return num1 + num2;
}


function myEach(array, fun) {
  for (var i = 0; i < array.length; i++){
    fun(array[i]);
  }
  return array;
}

function myMap(array, mapFun) {
  var result = [];
  var wrapper = function(element) {
    result.push(mapFun(element));
  };
  myEach(array, wrapper);
  return result;
}

// console.log(myEach([1,2,3,4], addOne));
// console.log(myMap([1,2,3,4], addOne));

function myInject(array, changerFunc) {
  var acc = array[0];
  var wrapper = function(element) {
    acc = changerFunc(acc, element);
  };
  array.shift();
  myEach(array, wrapper);
  return acc;
}

// console.log(myInject([1,2,3,4,-5], add));

function bubbleSort(array) {
  var sorted = false;
  while (sorted === false){
    sorted = true;
    for (var i = 0; i < array.length-1; i++){
      if (array[i] > array[i + 1]){
        var tempGreaterNum = array[i+1];
        array[i+1] = array[i];
        array[i] = tempGreaterNum;
        sorted = false;
      }
    }
  }
  return array;
}

// console.log(bubbleSort([11,2,-3,4,-5,1]));

function subStrings(string) {
  var result = [];
  for (var i = 0; i < string.length; i++){
    for (var j = i; j < string.length; j++){
      result.push(string.substring(i, j + 1));
    }
  }
  return result;
}

// console.log(subStrings("hey"));


function factorial(num) {
  if(num === 0) {
    return 1;
  }
  else {
    return num * factorial(num - 1);
  }
}

// console.log(factorial(4));

var exponentiation = function(base, exp) {
  if(exp === 0) {
    return 1;
  }
  else {
    return base * exponentiation(base, exp - 1);
  }
};

// console.log(exponentiation(2,4));

function exp2(base, exp) {
  if(exp === 0) {
    return 1;
  }
  else if(exp === 1) {
    return base;
  }

  if(exp % 2 === 0) {
    return Math.pow(exp2(base, exp/2), 2);
  }
  else {
    return base * Math.pow((exp2(base, (exp - 1)/2 ), 2));
  }

}

// console.log(exp2(2,4));

function fib(n) {
  if (n === 1){
    return [0];
  } else if (n === 2) {
    return [0,1];
  }
  var fibs = fib(n-1);
  fibs.push(fibs[fibs.length-1] + fibs[fibs.length-2]);
  return fibs;
}

// console.log(fib(10));

function bsearch(array, target) {
  if (array.length === 0) {
    return null;
  }

  var pivot;
  if (array.length % 2 === 0){
    pivot = (array.length/2) - 1;
  } else {
    pivot = (array.length-1)/2;
  }

  if (array.length === 1 && array[0] !== target){
    return null;
  }

  if(array[pivot] === target) {
    return (pivot);
  }

  if (array[pivot] > target) {
    return bsearch(array.slice(0, pivot), target);
  } else {
    var bSearchResult = bsearch(array.slice(pivot + 1, array.length), target);
    if (bSearchResult === null){
      return null;
    }
    else {
      return bSearchResult + pivot + 1;
    }
  }
}


// console.log(bsearch([2, 4, 6, 8, 10], 6)); // => 2
//
// console.log(bsearch([1, 2, 3], 1)); // => 0
// console.log(bsearch([2, 3, 4, 5], 3)); // => 1
//
// console.log(bsearch([1, 3, 4, 5, 9], 5)); // => 3
// console.log(bsearch([1, 2, 3, 4, 5, 6], 6)); // => 5
//
// console.log(bsearch([1, 2, 3, 4, 5, 6], 0)); // => nil
// console.log(bsearch([1, 2, 3, 4, 5, 7], 6)); // => nil


// function makeChange(sum, coins){
//   var tempSum = sum;
//   var result = [];
//
//   if (coins.length === 1){
//     var smallestAnswerLength = sum;
//   }
//
//   for (var i = 0; i < coins.length; i++) {
//     while (tempSum > coins[i]) {
//       tempSum -= coins[i];
//       result.push(coins[i]);
//     }
//   }
//
//   if (result.length < smallestAnswerLength){
//     smallestAnswerLength = result.length;
//   }
//   return makeChange(sum, coins.slice(1,coins.length));
// }
//
// console.log(makeChange(14, [10, 7, 1]));

function makeChange(target, coins) {

  if(target === 0) {
    return [];
  }

  var bestChange = null;

  for (var i = 0; i < coins.length; i++) {
    if(coins[i] > target){
      continue;
    }

    var remainder = target - coins[i];

    var bestRemainder = makeChange(remainder, coins.slice(1, coins.length));

    var thisChange = [coins[i]].concat(bestRemainder);

    if (bestChange === null || thisChange.length < bestChange.length) {
      bestChange = thisChange;
    }
  }
  return bestChange;
}

// console.log(makeChange(14, [10, 7, 1]));

function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
  return this.owner + " loves " + this.name;
};

Cat.prototype.meow = function() {
  return "meow";
};


var cat1 = new Cat("Vinny", "Alyssa");
// var cat1 = Cat("Vinny", "Alyssa");
var cat2 = new Cat("Sam", "alamadingdong");

cat2.meow2 = function() {
  return "bark";
};

// console.log(cat1.cuteStatement());
// console.log(cat1.meow());
// console.log(cat2.meow());
// console.log(cat2.meow2());

function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
}

function Course(name, department, credits) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
}


Student.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};

Student.prototype.courses = function() {
  return this.courses;
};

Student.prototype.enroll = function(course) {
  this.courses.push(course);

  if (course.students.indexOf(this) === -1){
    course.students.push(this);
  }
};

Course.prototype.students = function () {
  return this.students;
};

Course.prototype.addStudent = function (student) {
  student.enroll(this);
};

var student1 = new Student("Bob", "Smith");
var course1 = new Course("Javascript", "CS", 5);

course1.addStudent(student1);

console.log(student1.courses);
console.log(course1.students);




//
