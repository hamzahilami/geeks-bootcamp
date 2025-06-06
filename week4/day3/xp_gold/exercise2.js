function keysAndValues(obj) {
  const keys = Object.keys(obj);
/*************  ✨ Windsurf Command 🌟  *************/
  const values = Object.values(obj);
  return [keys, values];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
/*******  4816e885-7ca1-4351-992e-22f809d00169  *******/
// [["a", "b", "c"], [1, 2, 3]]

console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
// [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));
// [["key1", "key2", "key3"], [true, false, undefined]]