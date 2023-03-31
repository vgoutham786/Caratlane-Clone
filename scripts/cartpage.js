let displayCart = document.getElementById("displayCart");

let cartArray = JSON.parse(localStorage.getItem("cart"));

let wishListCart = JSON.parse(localStorage.getItem("wishListCart")) || [];

display(cartArray)
function display(arr) {
    displayCart.innerHTML = "";
    let x = ``;

    arr.map((e) => {
        let price = e.price
        let changedPrice = price.toLocaleString("en-IN")
        x += `<div class="innerdiv">
        <div>
        <img src="${e.image}"
            alt="">
            </div>
        <div class="details">
            <p>${e.title}</p>
            <div>
                <p>Size : <select name="" id="">
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>

                    </select></p>
                <p> Quantity : <select name="" class="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select></p>

            </div>
            <a href="">Check Delivery Date</a>
            <p class="gprice">₹${changedPrice}</p>
        </div>
        <div>
            <button class="remove" data-id="${e.id}">REMOVE</button>
            <button class="movewishlist" data-id="${e.id}">Move To Wishlist</button>
        </div>
    </div>`
    })

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
            arr.splice(index, 1)

            localStorage.setItem("cart", JSON.stringify(arr));
            display(arr)
        })
    }

    let movewishlist = document.getElementsByClassName("movewishlist");

    for (let i = 0; i < movewishlist.length; i++) {
        movewishlist[i].addEventListener("click", (e) => {
            let id = e.target.dataset.id;
            index = null;
            for (let j = 0; j < arr.length; j++) {
                if (arr[j].id == id) {
                    index = j;
                }
            }
            wishListCart.push(cartArray[index])
            arr.splice(index, 1)
            localStorage.setItem("cart", JSON.stringify(arr));
            localStorage.setItem("wishListCart", JSON.stringify(wishListCart));
            display(arr)
        })
    }
}