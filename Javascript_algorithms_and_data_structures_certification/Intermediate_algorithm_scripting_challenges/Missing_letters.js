/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("stvwx") should return "u".
fearNotLetter("bcdf") should return "e".
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

*/

function fearNotLetter(str) {
  let alphabetArray = Array.from("abcdefghijklmnopqrstuvwxyz");
  let stringArray = Array.from(str);
  let index = alphabetArray.indexOf(str.charAt(0));
  let streak = 1;
  while (stringArray[streak] === alphabetArray[index + streak]) {
    streak += 1;
  }
  return alphabetArray[streak + index];
}
