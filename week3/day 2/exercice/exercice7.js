const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const secretSociety = names.sort();

let output = "";
for (let key in secretSociety) {
  output += secretSociety[key][0];
}

console.log(output);