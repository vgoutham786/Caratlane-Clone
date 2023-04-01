var pay=JSON.parse(localStorage.getItem("cartData")) || []
console.log(pay)
var total = pay.reduce(function (sum, elem, index, arr) {
return sum + Number(elem.price);
}, 0);
console.log(total)
// var a=12434;
// var b="Rs"
//var discount=Math.abs(total-a);
//console.log(discount)
document.querySelector("#p7").innerText=`₹${total}`;
document.querySelector("#p6").innerText =`₹${total}`;
//document.querySelector("#p6").innerText =`Rs${total}`;
pay.map(function (elem, index) {
var box = document.createElement("div");
box.setAttribute("class","box")
var box1=document.createElement("div")
box1.setAttribute("class","box1")
var box2=document.createElement("div")
box2.setAttribute("class","box2")
var box3=document.createElement("div")
box3.setAttribute("class","box3")
var img = document.createElement("img");
img.setAttribute("class","img1")
img.src = elem.img;
var name = document.createElement("p");
name.textContent = elem.name;
var price = document.createElement("p");
price.innerText = `₹${elem.price}`
box.append(box1,box2,box3)
box1.append(img)
box2.append(name)
box3.append(price)
document.querySelector(".rightdiv").append(box);
});   
function Validate() {
var name = document.getElementsByClassName("i1");
var error = document.getElementsByClassName("error");
error[0].style.display = name[0].value == "" ? "block" : window.location.href = "";;
name[0].style.border = name[0].value == "" ? "1px solid red" : "";
name[0].focus();
var lname = document.getElementsByClassName("i2");
var lerror = document.getElementsByClassName("error1");
lerror[0].style.display = lname[0].value == "" ? "block" : window.location.href = "";;
lname[0].style.border = lname[0].value == "" ? "1px solid red" : "";
lname[0].focus();
var l1name = document.getElementsByClassName("i6");
var l1error = document.getElementsByClassName("error2");
l1error[0].style.display = l1name[0].value == "" ? "block" : window.location.href = "";;
l1name[0].style.border = l1name[0].value == "" ? "1px solid red" : "";
l1name[0].focus();
var l2name = document.getElementsByClassName("i10");
var l2error = document.getElementsByClassName("error3");
l2error[0].style.display = l2name[0].value == "" ? "block" : window.location.href = "pay.html";;
l2name[0].style.border = l2name[0].value == "" ? "1px solid red" : "";
l2name[0].focus();
}