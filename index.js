// Code your solutions in this file

function writeCards(names, event) {
  let cards= []
  for (let i = 0; i < names.length; i++) {
    cards.push("Thank you, " + names[i] + ", for the wonderful " + event + " gift!")
  }
  return cards;
}



function countDown(currentNumber) {
  console.log(currentNumber);

  let toNumber = currentNumber - 1;

  if (toNumber >=0) {
      countDown(toNumber);
  }
}
countDown(10);

