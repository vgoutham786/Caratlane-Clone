let shoppage = document.getElementById("shop");
shoppage.addEventListener("click", () => {
  location.replace("./index.html");
});
let displayCart = document.getElementById("displayCart");
empty = document.getElementById("emptywishlist");

let wishListCart = JSON.parse(localStorage.getItem("wishList"));
let cartarray = JSON.parse(localStorage.getItem("cart")) || [];

if (wishListCart == null || wishListCart.length == 0) {
  empty.style.display = "block";
} else {
  display(wishListCart);
}

function display(arr) {
  displayCart.innerHTML = "";
  let x = ``;
  arr.map((e) => {
    //console.log(e)
    let price = e.price;
    let changedPrice = price.toLocaleString("en-IN");
    x += ` <div>
        <div class="parent">
        <img src="${e.image}" alt="">
        <button class="remove" data-id="${e.id}">X</button>
        </div>
        
        <button class="addToCart" data-id="${e.id}">Move to Cart</button>
        <p class="price">₹${changedPrice}</p>
        <p class="title">${e.title}</p>
        
    </div>`;
  });

  displayCart.innerHTML = x;
  let remove = document.getElementsByClassName("remove");
  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", (e) => {
      let id = e.target.dataset.id;
      index = null;
      for (let j = 0; j < arr.length; j++) {
        if (arr[j].id == id) {
          index = j;
        }
      }
      arr.splice(index, 1);

      localStorage.setItem("wishList", JSON.stringify(arr));
      display(arr);
    });
  }
  let cart = document.getElementsByClassName("addToCart");

  for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener("click", (e) => {
      let id = e.target.dataset.id;
      index = null;
      for (let j = 0; j < arr.length; j++) {
        if (arr[j].id == id) {
          index = j;
        }
      }
      cartarray.push(wishListCart[index]);
      arr.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartarray));
      localStorage.setItem("wishList", JSON.stringify(arr));
      display(arr);
    });
  }
}
