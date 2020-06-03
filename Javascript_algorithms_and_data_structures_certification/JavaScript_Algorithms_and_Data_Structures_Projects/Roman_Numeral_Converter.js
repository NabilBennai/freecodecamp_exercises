/*

Auteur: Bennai Nabil
Mél: bennai.nabil@gmail.com
Date de dernière update: 26 Mai 2020
_____________________________________________________________

                Specifications: 
_____________________________________________________________
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
_____________________________________________________________
                
                Examples:  
_____________________________________________________________

convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(400) should return "CD"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"
_____________________________________________________________
*/
function convertToRoman(num) {
  // Deconstructs num into an Array of its digits in the order of the power of 10 decreasing
  let decomposedNumber = num.toString();
  // .split("")
  // .map((x) => parseInt(x));

  let n = decomposedNumber.length;
  let power = n - 1;

  let translatedToRoman = "";
  // Goes through the Array decomposedNumber
  for (let i = 0; i < n; i++) {
    let element = decomposedNumber[i];
    // String which will contain the sequence of roman numerals to add to the final string translatedToRoman
    let toAppend = "";

    /* Chooses a symbol associated with its power rank in decimal 
     - (M for the 10**3 = 1000's)
     - (C and D for 10**2 = 100ss)
     - (X and L for 10**1 = 10's)
     - (I and V for 10**0 = 1's)
    */
    const symbolChoice = (digit, one, five, ten) => {
      if (digit == 0) {
        return "";
      } else if (digit == 1) {
        return one;
      } else if (digit <= 3) {
        // Ici il me faut un Integer pour répéter la chaine "I" digits fois
        return one.repeat(digit);
      } else if (digit == 4) {
        return one + five;
      } else if (digit == 5) {
        return five;
      } else if (digit <= 8) {
        // Ici il me faut un Integer pour répéter la chaine "I" (digits-5) fois
        return five + one.repeat(digit - 5);
      } else if (digit == 9) {
        return one + ten;
      }
    };

    switch (power--) {
      case 3:
        toAppend = symbolChoice(element, "M", "(V_bar)", "X_var");
        break;
      case 2:
        toAppend = symbolChoice(element, "C", "D", "M");
        break;
      case 1:
        toAppend = symbolChoice(element, "X", "L", "C");
        break;
      case 0:
        toAppend = symbolChoice(element, "I", "V", "X");
        break;
    }
    // Appends the new chosen characters to represent the digit element with its exact positional multiplier
    translatedToRoman += toAppend;
  }
  return translatedToRoman;
}

console.log(convertToRoman(3));
