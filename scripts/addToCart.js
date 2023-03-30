let data = JSON.parse(localStorage.getItem("product")) || [];



let image = document.getElementById("productimageg")
let text = document.getElementById("apitext")
let pricetext = document.getElementById("gmrp")
let sku = document.getElementById("sku")
let priceshow = document.getElementById("price")
    // window.addEventListener("load", () => {
let arr = {
    "id": null,
    "title": "Coz Solitair Ring",
    "price": 92981,
    "type": "Engagement Rings",
    "category": "Rings",
    "image": "https://cdn.caratlane.com/media/catalog/product/S/R/SR03301-WGP900_1_lar.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
};
data.push(arr);

localStorage.setItem("product", JSON.stringify(data))
    // });

data.forEach(element => {
    text.innerHTML = ""
    image.innerHTML = " ";
    pricetext.innerHTML = ""
    sku.innerHTML = ""
    priceshow.innerHTML = ""
    let img = document.createElement("img");
    img.setAttribute("src", element.image)
    img.classList.add("apiimage")
    let title = document.createElement("p")
    title.innerText = element.title
    let price1 = document.createElement("p")
    price1.innerText = element.price
    let id = document.createElement("p")
    id.innerText = element.id
    priceshow.append(price1)



    sku.append(id)

    image.append(img)
    text.append(title)

    // pricetext.append(title)

});
let clk = document.getElementById("click");
clk.addEventListener("click", () => {
    alert("Added to wishlist")
    localStorage.setItem("wihlist", JSON.stringify(data))
})