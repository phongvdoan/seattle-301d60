$_$wp(1);
const arr = ($_$w(1, 0), [
    9,
    8,
    7,
    6,
    11,
    22,
    1
]);
function callback(a, b) {
    $_$wf(1);
    if ($_$w(1, 1), a > b) {
        return $_$w(1, 2), 1;
    } else if ($_$w(1, 3), b > a) {
        return $_$w(1, 4), -1;
    } else {
        return $_$w(1, 5), 0;
    }
}
$_$w(1, 6), arr.sort(callback);
$_$w(1, 7), $_$wv(1, 7, '1,7', 'arr', arr, '$_$ne', 1, 0, '');
const people = ($_$w(1, 8), [
    {
        name: 'gandalf',
        age: 9000
    },
    {
        name: 'superman',
        age: 3
    },
    {
        name: 'nicholassssss',
        age: 99999999999
    }
]);
$_$w(1, 9), people.sort((a, b) => {
    $_$wf(1);
    if ($_$w(1, 10), a.age > b.age) {
        return $_$w(1, 11), 1;
    }
    if ($_$w(1, 12), b.age > a.age) {
        return $_$w(1, 13), -1;
    }
    return $_$w(1, 14), 0;
});
$_$w(1, 15), $_$wv(1, 15, '1,15', 'people', people, '$_$ne', 1, 0, '');
$_$w(1, 16), people.sort((a, b) => {
    $_$wf(1);
    if ($_$w(1, 17), a.name.length > b.name.length) {
        return $_$w(1, 18), 2;
    }
    if ($_$w(1, 19), a.name.length < b.name.length) {
        return $_$w(1, 20), -1;
    }
});
$_$w(1, 21), $_$wv(1, 21, '1,21', 'people', people, '$_$ne', 1, 0, '');
$_$wpe(1);