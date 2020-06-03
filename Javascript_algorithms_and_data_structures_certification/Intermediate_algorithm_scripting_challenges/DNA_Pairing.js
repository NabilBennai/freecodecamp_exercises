/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/

function betterPairElement(str) {
  let dnaUnits = Array.from(str);
  let dnaSequence = [];
  let templateUnits = Array.from("ACTGAC");
  dnaUnits.forEach((element) => {
    let eltInd = templateUnits.indexOf(element);
    dnaSequence.push([element, templateUnits[eltInd + 2]]);
  });
  return dnaSequence;
}

function pairElement(str) {
  let dnaUnits = Array.from(str);
  let dnaSequence = [];
  dnaUnits.forEach((element) => {
    switch (element) {
      case "A":
        dnaSequence.push(["A", "T"]);
        break;
      case "T":
        dnaSequence.push(["T", "A"]);
        break;
      case "C":
        dnaSequence.push(["C", "G"]);
        break;
      case "G":
        dnaSequence.push(["G", "C"]);
        break;
    }
  });
  return dnaSequence;
}

pairElement("GCG");
