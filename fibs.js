function fibs(n) {
  const result = [];

  if (n <= 0) return result;
  if (n >= 1) result.push(0);
  if (n >= 2) result.push(1);

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}

console.log(fibs(8)); 

function fibsRec(n) {
  console.log("This was printed recursively");

  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const prev = fibsRec(n - 1);
  return [...prev, prev[prev.length - 1] + prev[prev.length - 2]];
}

console.log(fibsRec(8));