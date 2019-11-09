# FIFO Animal Shelter

## Challenge
Create an `AnimalShelter` class that only takes dogs and cats and uses FiFo.

## Approach & Efficiency
I used what I learned from the previous `pseudoQueue` challenge to sort dogs and cats into two stacks. The rest is the usual.

## API

### `enqueue(animal)` method
Takes a dog or a cat value and adds a new node to the animal shelter.

### `dequeue(pref)` method
Takes a preference and returns a cat or a dog. If there's no preference, it returns null.
