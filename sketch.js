
function decode_morse(morse_code){
    //chaîne de caractère dans un tableau à chaque espace
    morse_code_tab = morse_code.split(" ");
    //endroit où on va stocker les éléments convertis
    let solution = "";
    //boucle forEach pour parcourir chaque élément du tableau
    morse_code_tab.forEach(element => {
        let print = compare_alphabet_morse(element);
        //chaque mot en morse est converti en chaîne de caractère mais sur des lignes différentes
        console.log(element);
        //caractère converti sur une ligne
        solution += print;
    });
    console.log(solution);
}

decode_morse("-... --- -. .--- --- ..- .-.");

function compare_alphabet_morse(morse_letter){
    var morseAlphabet = {
        // //problématique de deux espaces qu'il ne reconnaît pas
        // //tableau lettre
        // //tableau mots
        // " ": " ",
        ".-": "a",
        "-...":"b",
        "-.-.": "c",
        "-..": "d",
        ".":"e",
        "..-.":"f",
        "--.":"g",
        "....":"h",
        "..":"i",
        ".---":"j",
        "-.-":"k",
        ".-..":"l",
        "--":"m",
        "-.":"n",
        "---":"o",
        ".--.":"p",
        "--.-":"q",
        ".-.":"r",
        "...":"s",
        "-":"t",
        "..-":"u",
        "...-":"v",
        ".--":"w",
        "-..-":"x",
        "-.--":"y",
        "--..":"z",
        ".----":"1", 
        "..---":"2", 
        "...--":"3",
        "....-":"4", 
        ".....":"5", 
        "-....":"6", 
        "--...":"7", 
        "---..":"8", 
        "----.":"9", 
        "-----":"0", 
        "|":" "
        //clé avec valeur
    }
    let convertedLetter = morseAlphabet[morse_letter];
    return convertedLetter;
}