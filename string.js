// String
// A string is a collection of character which are enclosed in a single quotes or double quotes or back ticks

var s = 'I Love Javascript'
console.log(s);
console.log(typeof s);

var s="I Love javascript"
console.log(s);
console.log(typeof s);

var s=`I Love Javascript`
console.log(s);
console.log(typeof s); //left side of 1  and top of tab key



// string interpulation:
// It is a process of aaccessing the variable into a string
// It is only possible with back ticks
// syntax:     ${variablename}

var sname='rishabh';
var sal=20000;

var greet="dear" +sname+ "got selected with a salary of "+
sal+"per month"

console.log(greet);


// length property
// length is not a method so we should not invoke it. 

var s="javascript"
console.log(s);
console.log(s.length); //s.length is not a function

// ----------- String Method-----------
// toLowerCase():
// convert all the alphabetic character in a string to lowercase

var s="Javascript"
console.log(s);
console.log(s.toLocaleLowerCase());

// toUpperCase():
// convert all the alphabetic character in a string to Uppercase

var s="Javascript"
console.log(s);
console.log(s.toLocaleUpperCase());


// toString():
// It will convert the datatypes into string
var n=10
console.log(n);  //10
console.log(typeof n);  // number

var s=n.toString()
console.log(s);  
console.log(typeof s);



// trimstart();
// It will remove the unwanted spaces at initial posistion

var s="    javascript"
console.log(s);
console.log(s.length);

console.log(s.trimStart());
console.log(s.trimStart().length);



// ?trimend
// It will remove the unwanted spaces at initial position
var s="javascript      "
console.log(s);
console.log(s.length);

console.log(s.trimEnd());
console.log(s.trimEnd().length);


// ?trim()
// It will remove the unwanted spaces at initial position and ending position
var s="    javascript      "
console.log(s);
console.log(s.length);

console.log(s.trim());
console.log(s.trim().length);


// replace
// it will replace the existing character with new character
// It will replace only for first matching character

var s="something is happendbecuase of something is happend in the past so dont do that something"

console.log(s);
console.log(s.replace("something","nothing"));


// replaceAll()
// it will replace the existing character with new character
// It will replace for all matching character

var s="something is happendbecuase of something is happend in the past so dont do that something"

console.log(s);
console.log(s.replace("something","nothing"));


// substr()
//  it will replace the existing character with new character
//  Syntax: variablename.substr(SI, length)

var s= 'I Love Javascript'
console.log(s);

console.log(s.substr(2,4));


// substring()
// It is an alternate to 

var s= 'I Love Javascript'
console.log(s);

console.log(s.substr(2,4));



// split()
// It will split the string into an array based on parameter
var s="I Love Javasript"

console.log(s.split());
console.log(s.split(" "));



// Concat()

var s1="Tata"
var s2="Consultant"
var s3="Services"
let space=""

console.log(s1+""+s2+""+s3);

var mergearray=s1.concat(space,s2,space,s3)
console.log(mergearray);

var mergearray=s1.concat(" ",s2," ",s3)
console.log(mergearray);



// ===indexof()

var s ='javaScript'
console.log(s);
console.log(s); //-1
console.log(S); // 4


// lastIndexof()
var s="javaScript"
console.log(s);

console.log(s.lastIndexOf("a")); //3
console.log(s.lastIndexOf("s")); //-1
console.log(s.lastIndexOf("S")); // 4


var s="hii hii hoi hoi"
console.log(s);

console.log(s.indexOf("i")); //1
console.log(s.lastIndexOf("i"));  //14
console.log(s.lastIndexO("hii")); //4


var s="Online class is awesome because its online so online lets learn awesome"

console.log(s.indexOf("Online"));


var s="aviral singh"

console.log(s.includes("$")); //false
console.log(s.includes("a")); //true
console.log(s.includes("singh")); //true
console.log(s.includes("Singh")); //false


//    charAt()

var s ="Hello utkarsh"
console.log(s);

console.log(s.charAt(4));  //o
console.log(s.charCodeAt(4));  //o's Ascii value
console.log(s.charAt(8));  //k

//     charcodeAt()


var s ="Hello utkarsh"
console.log(s);

console.log(s.charAt(4));  //o
console.log(s.charCodeAt(4));  //o's Ascii value
console.log(s.charAt(8));


//    String.fromCode()


console.log(String.fromCharCode(65)); //A
console.log(String.fromCharCode(97)); //a
console.log(String.fromCharCode(100));  //4
console.log(String.fromCharCode(50));  //2
