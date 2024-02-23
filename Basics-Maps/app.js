const theMap = new Map();

theMap.set(1, 'John');
theMap.set(2, 'Mary');
theMap.set('animal', 'Dog');

console.log(theMap.get(1)); // John

console.log(theMap.get('animal')); // Dog

theMap.size; // 3

theMap.has(1); // true

theMap.has(10); // false

theMap.delete(1);

console.log(theMap);
// 0: {2 => "Mary"}
// 1: {"animal" => "Dog"}

theMap.clear();

console.log(theMap); // Map(0) {size: 0}