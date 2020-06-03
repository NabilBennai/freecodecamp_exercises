/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".

*/

const isupper = (x) => x === x.toUpperCase();

const insertSpaces = (str) =>
  str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");

function spinalCase(str) {
  let finalString = "";
  let charactersArray = Array.from(insertSpaces(str.replace(/_/g, " ")));

  for (let index = 0; index < charactersArray.length; index++) {
    let currentCharacter = charactersArray[index];

    if (index == 0) {
      finalString += currentCharacter.toLowerCase();
      continue;
    } else if (currentCharacter == " ") {
      finalString += "-";
      continue;
    } else if (isupper(currentCharacter)) {
      finalString += currentCharacter.toLowerCase();
      continue;
    } else {
      finalString += currentCharacter;
    }
  }
  return finalString;
}
