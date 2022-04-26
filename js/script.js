let productgrid = document.getElementById("productgrid");
let sp1 = document.getElementById("sp1");
let cart = document.getElementById("cart");
let mainarea = document.getElementById("main");
let cartTables = document.getElementById("cartTable");
let headRow = document.getElementById("headRow");
let p = []
let price = 0
let total = document.getElementById("total")
async function main() {
  cart.style.display = "none";
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    products.map(product => {
      let prod = document.createElement("div");
      prod.setAttribute('id', `${product.id}`);
      prod.setAttribute('class', "proDiv");
      prod.innerHTML = `<div class="item">
              <img class="prodImg" src=${product.image} style=""/>
              <button class="addToCart" id=${product.id} onclick="addtocart(${product.id})">Add To cart</button>
              <div style="text-align:center"> $${product.price} </div>
        </div>`
      sp1.insertAdjacentElement("afterEnd", prod);
    })
  } catch (err) {
    console.log(err.message);
  }
}
async function addtocart(id) {
  p.push(id)
  let res = await fetch(`https://fakestoreapi.com/products/${id}`);
  let product = await res.json();
  price += product.price
  localStorage.setItem('price', price)
  let tr = document.createElement('tr');
  tr.innerHTML = `<td colspan="5"><img src="${product.image}" class="prodImg"</td><td>${product.price}<td colspan="3">1</td><td colspan="3"></td>`
  headRow.insertAdjacentElement("afterEnd", tr);
  total.innerHTML = `Subtotal: $ ${price}`
  mainarea.style.display = "none";
  cart.style.display = "block";
}
function fun1() {
  mainarea.style.display = "block";
  cart.style.display = "none";

}
