

/*
var digit = prompt("Enter a digit?");


ami akta program banailaam jeta
1 lekhle seta seh one bolbeh
aey program taa if else diyaa koraa hoiseh 





if (digit == 0)
    console.log("Zero");
else if (digit == 1)
    console.log("One");
else if (digit == 2)
    console.log("two");
else if (digit == 3)
    console.log("three");
else if (digit == 4)
    console.log("four");
else if (digit == 5)
    console.log("five");
else if (digit == 6)
    console.log("six");
else if (digit == 7)
    console.log("seven");
else if (digit == 8)
    console.log("eight");
else if (digit == 9)
    console.log("nine");
else if (digit == 10)
    console.log("ten");
else
    console.log("Not a fkn Digit Bruuuuu")








Uporer aey same program switch diyaa abar kora hobeh



// switch, case, break, default

switch (digit) {
    case "0":
        console.log("Zero")
        break;     //switch arr vitore jekono aktaa input dibo
    case "1":
        console.log("One")
        break;
    case "2":
        console.log("two")
        break;
    case "3":
        console.log("three")
        break;
    case "4":                   //tarpor case check korbe jodi match hoy taholeh allhamdullilah
        console.log("four")
        break;
    case "5":
        console.log("five")
        break;
    case "6":
        console.log("six")
        break;
    case "7":
        console.log("seven")
        break;
    case "8":
        console.log("eight")
        break;
    case "9":
        console.log("nine")
        break;
    case "10":
        console.log("ten")
        break;
    default:                                //default hosse else arrr moto........
        console.log("Not a digit???")                
}





*/


// Task- if a letter is vowel or consonent check using switch




var letter = prompt("Enter a letter Bro: ")

/*

switch (letter) {
    case "a" && "A":
        console.log("Its a Vowel")
        break;
    case "e" && "E":
        console.log("Its a Vowel")          ////// Aey same jinish ke onk choto kore lekha jaaye....////////
        break;
    case "i" && "I":
        console.log("Its a Vowel")
        break;
    case "o" && "O":
        console.log("Its a Vowel")
        break;
    case "u" && "U":
        console.log("Its a Vowel")
        break;
    default:
        console.log("Bro it is consonent.");
}

*/



switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel")
        break;
    default:
        console.log("It's a consonent!!!1");
}


