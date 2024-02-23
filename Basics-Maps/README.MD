# BASICS : DATA STRUCTURES - MAP

Map is a JavaScript data structure used to store a collection of values, similar to Objects and Arrays.

## MAP Object

The `Map` object stores data in a key/value pair structure.

> Think of the Map object as an upgraded version of the regular Object. It can use any type of data as the key value, while an object can only use string values as keys.

Difference between Map and Object:

- A `Map` can have any type of data as key value
- A `Map` maintains the data added in order.

## Map Object Methods and Properties
A `Map` object has the following methods and properties:

- `set(key, value)` – Adds a key/value pair to a Map
- `get(key)` – Retrieves a value from a Map (returns undefined if key doesn't exist)
- `has(key)` – Checks if a Map has a specific key
- `delete(key)` – Removes a specific key from a Map
- `clear()` – Removes all items from a Map
- `keys()` – Returns all keys in a Map
- `values()` – Returns all values in a Map
- `entries()` – Returns all keys and values in a Map
- `size` – Returns the number of items in Map

## Ways to create Map Objects

1. From an Array

    ```js
    const theMap = new Map([
        [1,'John'],
        [2,'Mary'],
        ['animal', 'dog']
    ]);
    ```

    When creating a `Map` from an Array, you need to create a two-dimensional array and specify two elements in each array.

    The first element will be the key, the second element will be the value. Any extra value in the array will be ignored.

2. From an Object

    To create a `Map` from an object we need to transform the object into an array first using the `Object.entries()` method.

    ```js
    const person = {
        'name': 'Jack',
        'age': 20,
    }

    const theMap = new Map(Object.entries(person));

    console.log(theMap); 
    // Map(2) { 'name' => 'Jack', 'age' => 20 }
    ```

## Iterate over data

1. Use `forEach()` method

    ```js
    const theMap = new Map([
        [1,'John'],
        [2,'Mary'],
        ['animal', 'dog']
    ]);

    theMap.forEach((value.key)=>{
        console.log('$[key]: $(value)');
    });
    ```

2. Use `for .. of` method

    ```js
    const theMap = new Map([
        [1,'John'],
        [2,'Mary'],
        ['animal', 'dog']
    ]);

    for (const [key, value] of theMap){
        console.log('$[key]: $(value)');
    };
    ```
