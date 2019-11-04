const { LinkedList } = require('../ll-kth-from-end/kth');

function mergeLists(listOne, listTwo) {
  const zippedList = new LinkedList;
  
  let currentOne = listOne.head;
  let currentTwo = listTwo.head;
  
  for(let i = 0; i < listOne.size + listTwo.size; i++) {
    if(currentOne) {
      zippedList.append(currentOne.value);
      currentOne = currentOne.next;
    }
    
    if(currentTwo) {
      zippedList.append(currentTwo.value);
      currentTwo = currentTwo.next;
    }
  }

  return zippedList.head;
}

module.exports = mergeLists;