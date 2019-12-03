// The forEach() method executes a provided function once for each array element.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);

// the callback function signature is function (value, index, array)

let arr = [1,2,3];

function callback(currentValue, index, array){

}

arr.forEach(callback, thisArg);

function callback2(currentValue, index, array) {
  console.log('currentval : ', currentValue);
  console.log('index', index);
  console.log('array : ', array);
}

arr.forEach(callback2);

const names = ['josh', 'yosh', 'chance'];

const sayHi = (currentValue) => {
  console.log('yo sup, ' + currentValue);
};

names.forEach(sayHi);

names.forEach(
  function(name, index){
    for(let i = 0; i < index * 3; i++){
      console.log('bye ' + name);
    }
  }
);

// this will not print out 0, 1, 2
// it is being passed in values "value, index, array"
names.forEach((index) => {
  console.log(index);
});


// under the hood

function callback2(currentValue, index, array) {
  console.log('currentval : ', currentValue);
  console.log('index', index);
  console.log('array : ', array);
}

names.forEach(callback2);

callback2('josh', 0, names);
callback2('yosh', 1, names);
callback2('chance', 2, names);

