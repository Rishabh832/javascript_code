// ======== Call Apply Bind ======
/*
  We can borrow the function into an object.
  call, apply, bind are exactly similar the only difference in 
  syntax.


//   Call:
functionRef.call(objname,params1 , params2 , params3);


//   Apply:

functionRef.apply(objname,[params1 , params2 , params3])
We have to pass the params in an array.


// bind:

functionRef.bind(objname,params1 , params2 , params3)();
bind is required to invoke the function 
where for call 



*/
// case 1 :  without any methods
let megha={
    sname:"megha",
    course:"jfs",
    greet:function(){
        console.log("This is a huge function with 100+ lines");
        return "Hii Hello, How are You"
        
    },
};

console.log(megha);
console.log(megha.greet());

let shubham={
    sname:"shubham",
    course:"PFS",
    greet: function(){
        console.log("This is a huge function with 1000+ line");
        return "Hii Hello, How are You"
    },
};

console.log(shubham.greet);
console.log(shubham.greet());



let ishani={
    sname:"ishani",
    course:"Mern",
    greet: function(){
        console.log("This is a huge function with 1000+ line");
        return "Hii Hello, How are You"
    },
};

console.log(ishani);
console.log(ishani.greet());


// Case 2 with call method

let ritik={
    sname:'ritik',
    course:'jfs',
    sayhello:function(){
        return "Hii Hello, How are You???"
    },
};

console.log(ritik);
console.log(ritik.sname);
console.log(ritik.course);
console.log(ritik.sayhello);
console.log(ritik.sayhello());


let shivani={
    sname:"shivani",
    course:"PFS"
};

console.log("for shivani,call -",ritik.sayhello.call(shivani));

console.log("for shivani,call -",ritik.sayhello.apply(shivani));

console.log("for shivani,call -",ritik.sayhello.bind(shivani)());


let rajnikant={
    sname:"rajnikant",
    course:"mern"
};

console.log(ritik.sayhello.call(rajnikant));


// Case : 3  call apply bind along with the params.

let saquib={
    sname:"saquib",
    salary:50000,
    prinsalarymessage:function(inc,bonus){
        return `
              Hii ${this.sname}, your actual salary is ${this.salary} , 
              you got an incentive of ${inc} and bonus of ${bonus}.
              Your total income of this month is ${this.salary+inc+bonus}`
    },
};

console.log(saquib);
console.log(saquib.prinsalarymessage);
console.log(saquib.prinsalarymessage(4000,6000));



