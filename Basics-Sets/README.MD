# BASICS - DATA STRUCTURES : Set

The Set object allows you to store a collection of elements, just like an Array.

The differences between a Set and an array are:

- A Set requires all elements to be unique
- A Set has fewer methods for data manipulation

    >Because a Set object ignores duplicate values, you can use this object to purge duplicates from an Array, then turn the Set object back to an Array.

## Methods and Properties

A Set object has the following methods and properties:

- add(value) – Adds a value to a Set
- has(value) – Checks if a Set contains a specific value
- delete(value) – Removes a specific value from a Set
- clear() – Removes all items from a Set
- keys() – Returns all values in a Set
- values() – Returns all values in a Set
- entries() – Returns all values in a Set as [value, value] array
- size – Returns the number of items in Set

    >Note that the keys() and values() methods in a Set object return the same output.

## Composition Methods

`Set` also has composition methods that you can use to perform various set theory operations such as difference, union, and intersection.

1. Difference.

    The difference between the set you are working with and another set is all the elements present in the first set and not present in the second set.

    In finding the difference between sets, it matters which set you call the function on and which is the argument.

    >This is the equivalent of a **SQL** `LEFT JOIN` between two tables.

    ```js
    const setA = new Set([1, 2, 3, 4, 5]);
    const setB = new Set([4, 5, 6, 7, 8]);
    
    const diffsA = setA.difference(setB); 
    // Set(3) {1, 2, 3}
    const diffsB = setB.difference(setA); 
    // Set(3) {6, 7, 8}
    ```

2. Symmetric Difference

    The symmetric difference between two sets is a set that contains all the elements that are in one of the two sets, but not both. (excludes any elements that are in both tables)

    >This is the equivalent of a **SQL** `FULL OUTER JOIN` between two tables.

    ```js
    const frontEndLanguages = new Set(["JavaScript", "HTML", "CSS"]);
    const backEndLanguages = new Set(["Python", "Java", "JavaScript"]);
    const onlyFrontEnd = frontEndLanguages.symmetricDifference(backEndLanguages);
    // => Set {"HTML", "CSS", "Python", "Java"} 
    const onlyBackEnd = backEndLanguages.symmetricDifference(frontEndLanguages);
    // => Set {"Python", "Java", "HTML", "CSS"}    
    ```

3. Union

    A union of sets is a set that contains all the elements present in either set

    >This is the equivalent of a **SQL** `FULL OUTER JOIN` between two tables.

    ```js
    const frontEndLanguages = new Set(["JavaScript", "HTML", "CSS"]);
    const backEndLanguages = new Set(["Python", "Java", "JavaScript"]);
    const allLanguages = frontEndLanguages.union(backEndLanguages);
    // allLanguages => Set {"JavaScript", "HTML", "CSS", "Python", "Java"}
    ```

4. Intersection

    An intersection is a set that contains all the elements that are present within both sets.

    >An intersection is like a **SQL** `INNER JOIN` between two tables.

    ```js
    const frontEndLanguages = new Set(["JavaScript", "HTML", "CSS"]);
    const backEndLanguages = new Set(["Python", "Java", "JavaScript"]);
    const frontAndBackEnd = frontEndLanguages.intersection(backEndLanguages);
    // frontAndBackEnd => Set {"JavaScript"} 
    ```

5. isSubsetOf

    A set is a subset of another set if all the elements in the first set appear in the second set.

    ```js
    const frontEndLanguages = new Set(["JavaScript", "HTML", "CSS"]);
    const declarativeLanguages = new Set(["HTML", "CSS"]);
    declarativeLanguages.isSubsetOf(frontEndLanguages);
    // => true
    frontEndLanguages.isSubsetOf(declarativeLanguages);
    // => false
    ```

    A set is also a subset of itself

    ```js
    frontEndLanguages.isSubsetOf(frontEndLanguages);
    // => true
    ```

6. isSupersetOf

    A set is a superset of another set if all the elements in the second set appear in the first set. It is the opposite relationship of being a subset.

    ```js
    const frontEndLanguages = new Set(["JavaScript", "HTML", "CSS"]);
    const declarativeLanguages = new Set(["HTML", "CSS"]);
    declarativeLanguages.isSupersetOf(frontEndLanguages);
    // => false
    frontEndLanguages.isSupersetOf(declarativeLanguages);
    // => true
    ```

    A set is also a superset of itself.

    ```js
    frontEndLanguages.isSupersetOf(frontEndLanguages);
    // => true
    ```

7. isDisjointFrom

    A set is disjoint from another set if they have no elements in common.

    ```js
    const frontEndLanguages = new Set(["JavaScript", "HTML", "CSS"]);
    const interpretedLanguages = new Set(["JavaScript", "Ruby", "Python"]);
    const compiledLanguages = new Set(["Java", "C++", "TypeScript"]);
    interpretedLanguages.isDisjointFrom(compiledLanguages);
    // => true
    frontEndLanguages.isDisjointFrom(interpretedLanguages);
    // => false
    ```

## Iterate over data

1. Use `forEach()` method

    ```js
    const theSet = new Set(['Jack', 'Jill', 'John']);

    theSet.forEach(value => {
    console.log(value);
    });

    theSet.forEach(element => console.log(element));    
    ```

2. Use `for .. of` method

    ```js
    const theSet = new Set(['Jack', 'Jill', 'John']);

    for (const value of theSet){
        console.log(value);
    };
    ```

## Polyfills

While you need older JavaScript engine support, there are polyfills you can use to upgrade to spec-compliant implementations of these functions. They are available in [core-js](https://github.com/zloirock/core-js#new-set-methods).
