function writeCards(gifts, type) {
    let new_array = [];
    for (let i = 0; i < gifts.length; i++) {
      new_array.push(`Thank you, ${gifts[i]}, for the wonderful ${type} gift!`);
    }
    return new_array;
  }

function countDown(number) {
    for (let i = number; i >= 0 ; i --) {
        console.log(i)
    }
}