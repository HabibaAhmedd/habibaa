//  https://fakestoreapi.com/products


let grid = document.querySelector(".products");
let filterInput = document.getElementById("filterInput");

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json =>{

        // iterating products
        for (let value of json){
            addElement(grid, value)
        }
        
    });


// add event listener
filterInput.addEventListener('keyup', filterProducts);

// callback function 
function filterProducts(){
    let filterValue = filterInput.value.toUpperCase();
    let item = grid.querySelectorAll('.item')
    // console.log(filterValue);

    for (let i = 0; i < item.length; i++){
        let span = item[i].querySelector('.title');

        if(span.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            item[i].style.display = "initial";
        }else{
            item[i].style.display = "none";
        }

    }
}



// get value from the api create dynamic element
function addElement(appendIn, value){
    let div = document.createElement('div');
    div.className = "col";

    let { image, title, price } = value;

    div.innerHTML = `
    <div class="col">
    <div class="card" onclick="location.href = 'html.html';" style="background-image:${image}">
        <h2>${title}</h2>
        <h4>${price} </h4>
    </div>
    `;
    appendIn.appendChild(div);
}