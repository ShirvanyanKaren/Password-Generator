var options = ["confirmUpper", "confirmLower", "confirmSpecial", "confirmNum"];

function* combination(array) {
  if (array.length === 1) {
    yield array;
    return;
  }

  yield [array[0]];
  for (const c of combination(array.slice(1))) {
    yield c;
    yield [array[0], ...c];
  }
}

for (const c of combination(options)) {
  console.log(c);
}
