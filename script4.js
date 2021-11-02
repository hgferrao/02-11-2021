/*
function addition(a, b) {
  return a + b;
}
console.log(addition(2, 3)); //, 5)
console.log(addition(-3, -6)); //, -9)
console.log(addition(7, 3)); //, 10)
console.log(addition(88, 2)); //, 90)


//Convert Minutes into Seconds
function convert(minutes) {
  return minutes * 60;
}
console.log(convert(6)); //, 360)
console.log(convert(4)); //, 240)
console.log(convert(8)); //, 480)
console.log(convert(60)); //, 3600)

// Length of a Nested Array
function getLength(arr) {
  return arr.flat(Infinity).length;
}
console.log(getLength([1, [2, 3]])); //, 3);
console.log(getLength([1, [2, [3, 4]]])); //, 4);
console.log(getLength([1, [2, [3, [4, [5, 6]]]]])); //, 6);
console.log(getLength([1, 7, 8])); //, 3);
console.log(getLength([2])); //, 1);
console.log(getLength([2, [3], 4, [7]])); //, 4);
console.log(getLength([2, [3, [5, 7]], 4, [7]])); //, 6);
console.log(getLength([2, [3, [4, [5]]], [9]])); //, 5);
console.log(getLength([])); //, 0);

///////////////////////////  Strings  /////////////////////////////////////
function removeLeadingTrailing(n) {
  return parseFloat(n);
}
console.log(removeLeadingTrailing("230.000")); //, "230")
console.log(removeLeadingTrailing("00402")); //, "402")
console.log(removeLeadingTrailing("03.1400")); //, "3.14")
console.log(removeLeadingTrailing("30")); //, "30")
console.log(removeLeadingTrailing("30.0000")); //, "30")
console.log(removeLeadingTrailing("24340")); //, "24340")
console.log(removeLeadingTrailing("0404040")); //, "404040")
console.log(removeLeadingTrailing("0")); //, "0")
console.log(removeLeadingTrailing("00")); //, "0")
console.log(removeLeadingTrailing("0.000000")); //, "0")
console.log(removeLeadingTrailing("0000.000")); //, "0")
console.log(removeLeadingTrailing("00.0001")); //, "0.0001")
console.log(removeLeadingTrailing("10000")); //, "10000")
console.log(removeLeadingTrailing("1345")); //, "1345")
console.log(removeLeadingTrailing("30.000020")); //, "30.00002")
console.log(removeLeadingTrailing("00200.1900001")); //, "200.1900001")

//
function testJackpot(result) {
  let value = result[0];
  return result.every(isEqual);
  function isEqual(item) {
    return item === value;
  }
}
console.log(testJackpot(["@", "@", "@", "@"])); //, true)
console.log(testJackpot(["!", "!", "!", "!"])); //, true)
console.log(testJackpot(["abc", "abc", "abc", "abc"])); //, true)
console.log(testJackpot(["karaoke", "karaoke", "karaoke", "karaoke"])); //, true)
console.log(testJackpot(["SS", "SS", "SS", "SS"])); //, true)
console.log(testJackpot([":(", ":)", ":|", ":|"])); //, false)
console.log(testJackpot(["&&", "&", "&&&", "&&&&"])); //, false)
console.log(testJackpot(["hee", "heh", "heh", "heh"])); //, false)
console.log(testJackpot(["SS", "SS", "SS", "Ss"])); //, false)
console.log(testJackpot(["SS", "SS", "Ss", "Ss"])); //, false)

//
function findNemo(sentence) {
  let index = sentence.split(" ").indexOf("Nemo") + 1;
  return index > 0 ? `I found Nemo at ${index} !` : `I can't find Nemo`;
}
console.log(findNemo("I am Ne mo Nemo !")); //, "I found Nemo at 5!")
console.log(findNemo("N e m o is NEMO NeMo Nemo !")); //, "I found Nemo at 8!")
console.log(findNemo("I am Nemo's dad Nemo senior .")); //, "I found Nemo at 5!")
console.log(findNemo("Oh, hello !")); //, "I can't find Nemo :(")
console.log(findNemo("Is it Nemos, Nemona, Nemoor or Garfield?")); //, "I can't find Nemo :(")
console.log(
  findNemo(
    "Nemo is a clown fish, he has white and orange stripes. Nemo , come back!"
  )
); //, "I found Nemo at 1!")

// Move Capital Letters to the Front
function capToFront(s) {
  let capitalLetters = "";
  const noCapitalLetters = s.replace(/[A-Z]/g, function (match) {
    capitalLetters = capitalLetters + match;
    return "";
  });
  return capitalLetters + noCapitalLetters;
}
console.log(capToFront("hApPy")); //, "APhpy")
console.log(capToFront("moveMENT")); //, "MENTmove")
console.log(capToFront("aPPlE")); //, "PPEal")
console.log(capToFront("shOrtCAKE")); //, "OCAKEshrt")

// Match the Last Item
function matchLastItem(arr) {
  const match = arr.slice(-1).join("");
  const newArr = arr.slice(0, arr.length - 1).join("");
  return newArr === match ? true : false;
  // console.log(newArr);
  // return match;
}
console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"])); //, true);
console.log(matchLastItem([0, 1, 2, 3, 4, 5, "12345"])); //, false);
console.log(matchLastItem(["for", "mi", "da", "bel", "formidable"])); //
//   ,
//   false
//  );
console.log(matchLastItem([8, "thunder", true, "8thundertrue"])); //, true);
console.log(matchLastItem([1, 1, 1, "11"])); //, false);
console.log(
  matchLastItem([
    "tocto",
    "G8G",
    "xtohkgc",
    "3V8",
    "ctyghrs",
    100.88,
    "fyuo",
    "Q",
    "toctoG8Gxtohkgc3V8ctyghrs100.88fyuoQ",
  ])
);
//   ,
//   true
// );

//
function removeDups(arr) {
  const newArr = new Set(arr);
  return [...newArr];
}
console.log(removeDups(["John", "Taylor", "John"])); //, ['John', 'Taylor'])
console.log(removeDups(["John", "Taylor", "John", "john"])); //, ['John', 'Taylor', 'john'])
console.log(
  removeDups([
    "javascript",
    "python",
    "python",
    "ruby",
    "javascript",
    "c",
    "ruby",
  ])
); //, ['javascript', 'python', 'ruby', 'c'])
console.log(removeDups([1, 2, 2, 2, 3, 2, 5, 2, 6, 6, 3, 7, 1, 2, 5])); //, [1, 2, 3, 5, 6, 7])
console.log(removeDups(["#", "#", "%", "&", "#", "$", "&"])); //, ['#', '%', '&', '$'])
console.log(removeDups([3, "Apple", 3, "Orange", "Apple"])); //, [3, 'Apple', 'Orange'])

//
function removeABC(str) {
  return str.replace(/[a,b,c]/g, "");
}
console.log(removeABC("This might be a bit hard")); //, "This might e  it hrd")
console.log(removeABC("This is awesome")); //, "This is wesome")
console.log(removeABC("hello world!")); //, null)
console.log(removeABC("coding is fun!")); //, "oding is fun!")
console.log(removeABC("")); //, null)

//
function multiplyNums(nums) {
  return nums
    .split(",")
    .map(Number)
    .reduce((acc, no) => acc * no);
  // console.log(
  //   "54, 75, 453, 0"
  //     .split(",")
  //     .map(Number)
  //     .reduce((acc, no) => acc * no)
  // );
}
console.log(multiplyNums("2, 3")); //, 6)
console.log(multiplyNums("1, 2, 3, 4")); //, 24)
console.log(multiplyNums("54, 75, 453, 0")); //, 0)
console.log(multiplyNums("10, -2")); //, -20)
console.log(multiplyNums("-26, 1, -27, -12, -19")); //, 160056)
console.log(multiplyNums("16, 8")); //, 128)
console.log(multiplyNums("-27, -14, -28, 13, -17")); //, 2339064)
console.log(multiplyNums("-19, -22, -14, 20, -15, -24, -17, 19, 30, -10")); //, -4082823360000)
console.log(multiplyNums("1, 13, 0, -11, 26, -17, 21")); //, 0)
console.log(multiplyNums("-25, -19, 7, -26, -26")); //, 2247700)
console.log(multiplyNums("-4, -16, -22, -3, -6")); //, -25344)
console.log(multiplyNums("-22, 11, 19, 5, 19, -9, -13, 20, -29")); //, 29641926600)
console.log(multiplyNums("-25, 22")); //, -550)
console.log(multiplyNums("26, -19, 17, 26, -21")); //, 4585308)
console.log(multiplyNums("5, -1, 1, -28, 14, 28, 1")); //, 54880)
console.log(multiplyNums("-27, -9, 6, -25, 4")); //, -145800)
console.log(multiplyNums("-24, -13, -14, 30, 9, -14")); //, 16511040)
console.log(multiplyNums("27, 25, 27, -18, -27, -7, 28, 27, 0")); //, 0)
console.log(multiplyNums("-23, 11, -18, -5, -4")); //, 91080)
console.log(multiplyNums("-16, -10, -29, -23, -30, -1")); //, 3201600)
console.log(multiplyNums("-14, -17, 9, -2, -17, -10, -30")); //, 21848400)
console.log(multiplyNums("-13, -23, 10, 0, -23")); //, 0)
console.log(multiplyNums("0")); //, 0)
console.log(multiplyNums("30")); //, 30)
console.log(multiplyNums("-24, -21, 6, -29, 23, 11, -21, -29")); //, -13511936592)
console.log(multiplyNums("4, 23, 10")); //, 920)
console.log(multiplyNums("-13, -2, 28, 10, 25")); //, 182000)
console.log(multiplyNums("-18, -6, -9, 7, -1, -4, 5, -2, 19")); //, 5171040)
console.log(multiplyNums("-24, 15, -19, 20, -14, -8, 6, -22, 17")); //, -34381670400)
console.log(multiplyNums("12, -12, -3, -12, 10, 16, -23, -5, 17")); //, -1621555200)
console.log(multiplyNums("17")); //, 17)
console.log(multiplyNums("9, -27, 9, -22, 24, -1")); //, -1154736)
console.log(multiplyNums("16, -26, -1, -25, 13, 6, 26, 2, 4")); //, -168729600)
console.log(multiplyNums("-13, 17, 29, 19, 7")); //, -852397)
console.log(multiplyNums("28, 15, -7, -25")); //, 73500)
console.log(multiplyNums("-8, 19, -11, -10, -3, -9, 30, 18")); //, -243777600)
console.log(multiplyNums("22, -13, 29, 3, -29")); //, 721578)
console.log(multiplyNums("18, -18, -8, -16")); //, -41472)
console.log(multiplyNums("-12, -28, -19, 14, 27, 14, -3, 10, 13, 1")); //, 13175809920)
console.log(multiplyNums("-26, -21, 27, 23, -22, 1")); //, -7459452)
console.log(multiplyNums("5, -21, -26, -29, -8, 21, -5, -30, 1")); //, 1995084000)
console.log(multiplyNums("-9, -7, -13, -15, -2")); //, -24570)
console.log(multiplyNums("9, 25, 1, 28, 3, -3, -16, -26, 12, -26")); //, 7359206400)
console.log(multiplyNums("-2, 4, -29")); //, 232)
console.log(multiplyNums("26, 13, 17, -16, 6")); //, -551616)
console.log(multiplyNums("-17")); //, -17)
console.log(multiplyNums("26, -15, -12, 2, -1, 4, 20, 14, 25, 3")); //, -786240000)
console.log(multiplyNums("8, -11")); //, -88)
console.log(multiplyNums("12, -2, 8, 6, -23, 9, 13, 14")); //, 43400448)
console.log(multiplyNums("-10, 19, -29, 3, 30, 20, -5")); //, -49590000)
console.log(multiplyNums("19")); //, 19)
console.log(multiplyNums("15, -28, 8, 7, -20, 24, 2")); //, 22579200)
console.log(multiplyNums("25, -24, 4, 9, -17, 4, -24, -18, -3")); //, -1903564800)
console.log(multiplyNums("8, -14, -30, 9, -14, 17, -14")); //, 100759680)
*/
