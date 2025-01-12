/*
! FETCH :
1. Fetch API allows us to make http request to a network .
2. It is a best way to perform GET Request.
3. For example :If some data is store at somewhere , we can get 
that by using fetch method.
4. once after the request is successfull fetch will return 
the status of request as response (in the form of promise)
5. we have to consume the fetch promise.
6. The response we have to read in the form of readable 
streams.
7. These readable stream will return a promise with actual data.
8.  we have to consume the readable streams promise .

Finally ===> fetch method ---> promise ---> consume 
promiseResponse ---> resposnse.readablestream ---> 
promise ---> consume readableStreampromise---> data.

*/

// ! ========== Promise Way =========

//? 1. fetch api will return a promise 
// console.log(URL)

// ?2.  consume the fetch promise
// fetch("https://fakestoreapi.com/products").then(res=>{
//     console.log(res);
// });

//?3. Response we have ot read in readable formats
// we Can't read the data directly.
// so we have to use readable formats.
// i.e res.text() ---> retrun the o/p as json data in promise object.
// fetch("https://fakestoreapi.com/products").then(res=>{
//     console.log(res.text());
// }); // Promise

//? 4. res.json() method returns promise we have to consume it.

// fetch("https://fakeproductsstoreapi.com/").then(res=>{
//     return res.json();
// }).then(data=>{
//     console.log(data);
// });

// ? All at a time:
// External Path address
// fetch("https://api.github.com/users")
// .then(res=>res.json())
// .then(data=>console.log(data))

// Internal Path address
// fetch("./data.json")
// .then(res=>res.json())
// .then(data=>console.log(data))

{
    "sname": "Rishabh",

    "10th_school_name": "Ch. heeralal public school",
    "10th_percentage":70,
    "10th_YOP":2019,

    "12th_college_name":"Urmila sr. sec.school",
    "12th_percentage":72,
    "12th_YOP":2021,

    "Degree_college_name":"Faridabad college of engineering management",
    "Degree_percentage":72,
    "Degree_YOP":2025
}