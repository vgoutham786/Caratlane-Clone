let data = JSON.parse(localStorage.getItem("product")) || [];
for (let i = 0; i < data.length; i++) {
    console.log(data[i].price)
}
window.addEventListener("load", () => {


    // let data = JSON.parse(localStorage.getItem("product")) || [];

    let arr = {
        "id": 1,
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
})


var pr = document.getElementById("productimageg");

let img = document.createElement("p")
img.innerText = data.price