const arr = [5, {name: 'Василий', age: 35}, [7, 54, 2], true, function() { console.log('good'); }];

console.log( arr[1].age );
console.log( arr[4][1] );
arr[2]();