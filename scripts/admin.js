let form = document.querySelector("form");
let id = document.getElementById("product-id");
let title = document.getElementById("product-title");
let price = document.getElementById("product-price");
let type = document.getElementById("product-type");
let image = document.getElementById("product-image");
let category = document.getElementById("product-category")
let btn = document.getElementById("product-btn")

function getdetails() {
    let data = {
        id: id.value,
        title: title.value,
        price: price.value,
        type: type.value,
        image: image.value,
        category: category.value,
    }


    return data
}
btn.addEventListener("click", (e) => {
    e.preventDefault()
    let object = getdetails()
    addproduct(object)

    console.log(object)

})


async function addproduct(object) {

    try {
        let res = await fetch("./db.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(object)
        });

        let data = res.json();
        // console.log(data)



    } catch (error) {
        console.log(error)

    }


}