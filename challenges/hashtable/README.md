# Hash Table Implementation 

## Challenge
Create a hashtable class that stores values with hashed keys.

## Approach & Efficiency
I did setup, outlined tests, referred to the previous whiteboard challenge and wrote each function.

## API

### `add(key, value)`
Takes a key and a value. Stores key and value in nested array at the index of the hashed key.

### `get(key)`
Takes a key and returns the value associated with the key. Returns null if hashtable does not contain key.

### `contains(key)`
Takes a key and returns true if hashtable contains key. Returns false is key is not contained within table.

### `hash(key)`

Takes a key and hashes it into a number between 0 and the size of the hashtable.
