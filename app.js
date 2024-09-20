// nested loop chapter 20
// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "]
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullName = []
// for (var i = 0; i <firstNames.length; i++) {
//    for (var j = 0; j < lastNames.length; j++) {
//    fullName.push(firstNames[i] + lastNames[j] + " <br> ");
// }
// // document.write(i)

// }
// document.write(fullName)




// var isPallindrome = prompt("Please Enter a Word")
// var arryavalues = isPallindrome.split("");
// var reverseArrayValues = arryavalues.reverse();
// var checkPallindrome = reverseArrayValues.join("");
// document.write(checkPallindrome)
// if (checkPallindrome === isPallindrome) { document.write(" <br> It is a Pallindrome")
    
// } else{

//     document.write("<br>It is Not a Pallindrome")
// } 


var isPallindrome = prompt("Please Enter a Word")
var arrayvalues = isPallindrome.split("").reverse().join("");
document.write(arrayvalues)
if (arrayvalues === isPallindrome) { document.write(" <br> It is a Pallindrome")
    
} else{

    document.write("<br>It is Not a Pallindrome")
}