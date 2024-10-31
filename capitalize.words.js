function cap(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            var firstLetter = words[i].charAt(0).toUpperCase();
            var restOfWord = words[i].slice(1).toLowerCase();
            words[i] = firstLetter + restOfWord;
        }
    }
    return words.join(" ");
}
console.log(cap("hello my name is ahmed"));


// output
// Hello My Name Is Ahmed