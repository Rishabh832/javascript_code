async function display() {
    let response = await fetch("https://fakestoreapi.com/products");
    let ProductsData = await response.json();
    console.log(ProductsData);

    //? map
    let section = document.createElement("section");
    document.body.append(section);

    ProductsData.map((Product, ind) => {

        let div = document.createElement("div");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        div.classList.add("images");
        div1.classList.add("heading");
        div2.classList.add("headings");
        
        div1.innerHTML=`
        <img src="${Product.image}" alt="">
        `
        div2.innerHTML=`
       <h1> ${Product.title} </h1>
       <b>$ ${Product.price} </b>
       <p> ${Product.category} </p>
        `
    section.append(div)
    div.append(div1);
    div.append(div2);
               
    });
}
display();