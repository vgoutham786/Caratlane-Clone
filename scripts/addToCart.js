let data = JSON.parse(localStorage.getItem("addToCart")) || [];
let wishList = JSON.parse(localStorage.getItem("wishList")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartbtn = document.getElementById("cart");

let image = document.getElementById("productimageg");
let text = document.getElementById("apitext");
// let pricetext = document.getElementById("gmrp")
let sku = document.getElementById("sku");
let priceshow = document.getElementById("price");
let tapiproducttitle = document.getElementById("apiproducttitle");

// window.addEventListener("load", () => {
// let arr = {
//   id: null,
//   title: "Coz Solitair Ring ",
//   price: 92981,
//   type: "Engagement Rings",
//   category: "Rings",
//   image:
//     "https://cdn.caratlane.com/media/catalog/product/S/R/SR03301-WGP900_1_lar.jpg",
//   rating: {
//     rate: 3.9,
//     count: 120,
//   },
// };
// data.push(arr);

// localStorage.setItem("addToCart", JSON.stringify(data));
// // });

data.forEach((element) => {
  text.innerHTML = "";
  image.innerHTML = " ";
  // pricetext.innerHTML = ""
  tapiproducttitle = "";
  // sku.innerHTML = ""
  priceshow.innerHTML = "";
  let img = document.createElement("img");
  img.setAttribute("src", element.image);
  img.classList.add("apiimage");
  let title = document.createElement("p");
  title.innerText = element.title;
  let price1 = document.createElement("p");
  let price = element.price.toLocaleString("en-IN");
  price1.innerText = `₹${price}`;
  let id = document.createElement("p");
  id.innerText = element.id;
  priceshow.append(price1);

  // sku.append(id)

  image.append(img);
  text.append(title);

  // pricetext.append(title)
});
let clk = document.getElementById("click");
clk.addEventListener("click", () => {
  alert("Added to wishlist");
  wishList.push(data[0]);
  localStorage.setItem("wishList", JSON.stringify(wishList));
});

cartbtn.addEventListener("click", () => {
  alert("Added to cart");
  cart.push(data[0]);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.replace("./cartpage.html");
});
