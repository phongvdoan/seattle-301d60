'use strict';

let me = 'Nicholas Carignan';

let description = 'level 12 warlock';

let regex = /a/g;
let x = me.match(regex);
console.log(x);
x = me.replace(/n/gi, 'Rudolf');
x

let y = 'abghr'[3];

// flags of regex

//global
/r/g
//global and multiline
/r/gm

// find all 5 digit - 4 digit - 4 digit phone nums with global and multiline flags
/\d{ 5 }-\d\d\d\d-\d{ 4 }/gm

// find an n or N, then find an "ich", then find one or 0 "olas"
/[nN]ich(olas)?/