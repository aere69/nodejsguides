const firstSet = new Set();

firstSet = new Set(['Jack', 'Jill', 'John']);

console.log(firstSet.entries());
// [Set Entries] {
//    [ 'Jack', 'Jack' ],
//    [ 'Jill', 'Jill' ],
//    [ 'John', 'John' ]
//  }

const secodSet = new Set();

secodSet.add(1);
secodSet.add(2);
secodSet.add(3);

console.log(secodSet); // [1, 2, 3]

firstSet.values(); // [Set Iterator] { 'Jack', 'Jill', 'John' }

firstSet.has('Jack'); // true

firstSet.has('Michael'); // false

mySet.delete('Jill');

mySet.clear();