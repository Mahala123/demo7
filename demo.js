// var items = document.getElementsByClassName("list-group-item");
// items[0].style.fontWeight = "bold";
// items[1].style.fontWeight = "bold";
// items[2].style.fontWeight = "bold";
// items[3].style.fontWeight = "bold";
// items[2].style.backgroundColor = "green";
// var items1 = document.getElementsByClassName("list-item1");
// items1[0].style.fontWeight = "bold";
// //var items1 = document.getElementsByTagName("li");
// //items[1].style.fontWeight = "bold";
// items1[0].style.backgroundColor = "green";
//parentElement
var itemList = document.querySelector("#items");
itemList.parentElement.style.backgroundColor = "green";
console.log(itemList.parentElement.parentElement.parentElement);
//lastElementChild
console.log(itemList.lastElementChild.lastElementChild);
//lastChild
console.log(itemList.lastChild.lastChild);
//createChild
console.log(itemList.createChild);
//firstElementChild
console.log(itemList.firstElementChild);
//firstchild
console.log(itemList.firstchild);
//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);
//previousSibling
console.log(itemList.previousSibling);
//previouselementSibling
console.log(itemList.previousElementSibling);
//createElement
console.log(itemList.createElement);
//
