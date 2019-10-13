const { Stack } = require('../stacks-and-queues/stacks-and-queues');

class Node {
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
    const node = new Node(animal);

    if(node.value === 'dog') {
      if(!this.dog.top) {
        this.dog.top = node;
      }
      else {
        let dog = this.dog.top;

        while(dog.next) {
          dog = dog.next;
        }

        dog.next = node;
      }
    }

    if(node.value === 'cat') {
      if(!this.cat.top) {
        this.cat.top = node;
      }
      else {
        let cat = this.cat.top;

        while(cat.next) {
          cat = cat.next;
        }

        cat.next = node;
      }
    }
  }

  dequeue(pref) {
    if(!pref) {
      return null;
    }

    if(pref === 'dog') {
      const dog = this.dog.top.value;
      this.dog.top = this.dog.top.next;

      return dog;
    }

    if(pref === 'cat') {
      const cat = this.cat.top.value;
      this.cat.top = this.cat.top.next;

      return cat;
    }
  }
}

module.exports = {
  Node,
  AnimalShelter
};