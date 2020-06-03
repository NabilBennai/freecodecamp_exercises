/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".
Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".

*/

function translatePigLatin(str) {
  let stringToTreat = str.toLowerCase();
  let consonantsArray = Array.from("zrtypqsdfghjklmwxcvbn");
  if (consonantsArray.includes(stringToTreat[0])) {
    let consonantCluster = "";
    let sizeOfCluster = 0;
    while (consonantsArray.includes(stringToTreat[sizeOfCluster])) {
      sizeOfCluster += 1;
    }
    consonantCluster = stringToTreat.slice(0, sizeOfCluster);
    stringToTreat =
      stringToTreat.slice(sizeOfCluster, stringToTreat.length) +
      consonantCluster +
      "ay";
  } else {
    stringToTreat += "way";
  }
  return stringToTreat;
}

translatePigLatin("cconsonant");
