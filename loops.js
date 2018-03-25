function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.unshift(`I am ${i} strange loop.`);
    }
    else {
      array.unshift(`I am ${i} strange loops.`)
    }
  }
  return array;
}
