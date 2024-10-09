///string reversal

function reverse(str) {
  //   console.log(str.split(""));
  //   console.log(str.split("").reverse());
  return str.split("").reverse().join("");
}

console.log(reverse("hello"));

///Integer reversal

function reverseInt(n) {
  console.log(parseInt(n.toString().split("").reverse().join("")));
  return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
}
console.log(reverseInt(-123));
//console.log(typeof reverseInt(123));
