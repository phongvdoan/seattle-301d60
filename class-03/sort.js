// array.sort
// array .sort is a method called on arrays
// it sorts arrays in place
// its function signature is .sort(callback)
// the sort callback has a signature of callback(a, b)
// a and b refer to values in the array, specifically values next each other
// write a callback that tells javascript when to swap

const arr = [9,8,7,6,11,22,1];

// sorts alphabetically ish
// arr.sort();

// the expected return of the callback is either 1, -1, or 0
function callback(a,b){
  if(a > b){
    return 1;
  } else if(b > a) {
    return -1;
  } else {
    return 0;
  }
}

arr.sort(callback);

arr;

const people = [
  {name: 'gandalf', age: 9000},
  {name: 'superman', age: 3},
  {name : 'nicholassssss', age: 99999999999}
];

people.sort( (a, b) => {
  // return 1,
  if(a.age > b.age) return 1;
  //return -1
  if( b.age > a.age) return -1;
  // return 0
  return 0;
});

people;

people.sort( (a,b) => {
  if(a.name.length > b.name.length) return 2;
  if(a.name.length < b.name.length) return -1;
});

people;
