const { AnimalShelter } = require('../fifo-animal');

describe('fifo Animal Shelter', () => {
  describe('Empty animal shelter queue', () => {

    it('instantiates an empty animal shelter queue', () => {
      const shelter = new AnimalShelter;

      expect(shelter.dog.top).toBe(null);
      expect(shelter.cat.top).toBe(null);
    });
  });

  describe('Enqueue method', () => {
    it('Adds an animal to the shelter', () => {

    });

    it('Can add multiple animals to the shelter', () => {

    });
  });

  describe('Dequeue method', () => {
    it('Removes an animal from the shelter', () => {

    });

    it('Can empty the shelter of animals', () => {

    });

    it('Returns null in no animal preference', () => {

    });
  });
});