function deepEqual(a, b) {
  if (!a || !b) return false;
  if (typeof a !== "object" && typeof b !== "object") return a === b;

  let count = 0;
  const keysA = Object.keys(a)
  const keysB = Object.keys(b)
  if (keysA.length === keysB.length) {
    for (let i in a) {
      if (a[i] === b[i]) count++;
    }
  }

  return count === keysA.length;
}

// console.log(deepEqual("1", {}));

let obj = { here: { is: "an" }, object: 2, rocket: true };
let obj2 = { here: { is: "an" }, object: 4 };

console.log(deepEqual(obj, obj2));
console.log(deepEqual(obj, obj));
// console.log(deepEqual(null, obj));
