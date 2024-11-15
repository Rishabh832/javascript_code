



var obj={
    sname:"Parsa",
    age:22,
    skills:["Python","SQL","React","Mongodb","Node js","EXPRESS js"],
    course:"PFS",
    isPlaced:true,
    rating:0
};
console.log(obj);

// ======== Retriving ======
// 1. Dot Notation ---> objectName.keyName

console.log(obj.sname);
console.log(obj.age);
console.log(obj.skills);
console.log(obj.rating);


// 2. Bracket Notation ---> objectname["keyname"]

console.log(obj["sname"]);
console.log(obj["age"]);
console.log(obj["skills"]);
console.log(obj["rating"]);


var ratings="age";
console.log(obj[ratings]);

// ==== Create key======
 obj.address="Delhi";
 obj.grilfriend="rakhi";
 obj.ex='urfi';

 console.log(obj);


//  ======= updating ======

obj.sname='Parsha singh';
obj.age=25;
obj["course"]="Mern stack";
obj["skills"]=["mongodb","express","react","node js"]

console.log(obj);

 
//       deletion







//  ======== Object Methods =========

var obj={
    sname:"rishabh",
    age:20,
    course:"javascriipt"
};
console.log(obj);

// ===== Keys =====


console.log("keys--",Object.keys(obj));

// =======  values ======

console.log("values--",Object.values(obj));


// ======= entries ========

console.log("Entries--",Object.entries(obj));


//   ====== hasOwnPropety=======

console.log(obj.hasOwnProperty("age"));
console.log(obj.hasOwnProperty("skills"));

//  ======== concat assign=========


var obj1={
    sname:"rishi",
    age:20,
};

var obj2={
    course:"React js",
    skills:["html","css","js"],
};

var obj3={
    streetno:400,
    landmark:"confidential",
    state:"delhi",
    pincode:123458,
};

console.log(obj1);
console.log(obj2);
console.log(obj3);

var mergedobj = Object.assign({},obj1,obj2,obj3)

console.log(mergedobj);




// ============ dive more into object=======


//  1. ==============  object Literals =======
var obj={
    sname:'sunny',
    age:20,
    course:"js",
};
console.log(obj);

// Case-1:
var obj=new Object({sname:"sunny",age:20,course:"js"})
console.log(obj);

//  Case-2:
var obj=new Object();
console.log(obj);

obj.sname="sunny";
obj.age="age";
obj.course="js";

console.log(obj);

// =========Constructor==============
class  student {
    constructor(name,age,course) {
        this.name=name;
        this.age=age;
        this.course=course;
    }
}

console.log(student);

var sunny=new student("sunny",20,"js")
console.log(sunny);





