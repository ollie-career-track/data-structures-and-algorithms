const { Stack } = require('../stacks-and-queues/stacks-and-queues');

class Animal {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class AnimalShelter {
  constructor() {
    this.dog = new Stack();
    this.cat = new Stack();
  }

  enqueue(animal) {
    return animal;
  }

  dequeue() {
    
  }
}

module.exports = {
  Animal,
  AnimalShelter
};