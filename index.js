function caesarCipher(str,num) {
    num = num % 26;
    var lowerCaseString = str.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newString = '';

    for (var i = 0; i < lowerCaseString.length; i++){
        var currentLetter = lowerCaseString[i];
        if (currentLetter === ' ') {
            newString += currentLetter;
            continue;
        }
        var currentIndex = alphabet.indexOf(currentLetter);
        var newIndex = currentIndex + num;
        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = 26 + newIndex;
        if (str[i] === str[i].toUpperCase()) {
            newString += alphabet[newIndex].toUpperCase();
        }
        else newString += alphabet[newIndex];
    }
    return newString;
}
caesarCipher('Big Car', -16); //Lsq Mkb

//Caesar cipher (shift cipher) is a simple substitution cipher based on a replacement of every single character of the open text with a character, which is fixed number of positions further down the alphabet.
