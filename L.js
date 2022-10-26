// EXAMINE THE DOCUMENT OBJECT //

//console.dir(document);
////console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
// document.all[10].textXontent = "Hello";
//console.log(document.forms);
//console.log(document.links;
//console.log(documnet.images);

// GETELEMENTBYID //
//console.log(document.getElementById("header-Title"));
//var headerTitle = document.getElementById("header-Title");
//var header = document.getElementById("main-header");
//console.log(headerTitle);
//headerTitle.textContent = "Hello";
//headerTitle.innerText = "Goodbye";
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = "<h3>Hello</h3>";
//header.style.borderBottom = "solid 3px #000"

// GETELEMENTBYCLASSNAME //
//var items = document.getElementsByClassName("list-group-item");
//console.log(items);
//console.log(item[1]);
//item[1].textContent = "Hello 2";
//item[1].style.fontweight = "bolo";
//items[1].style.backgroundColor = "green";

//items.style.backgroundColor = "#f4f4f4";

//for(var i=0; i<items.length; i++){
  //items[i].style.backgroundColor = "#f4f4f4";
//}

// QUERYSELECTOR //
//var header = document.querySelector("#main-header");
//header.getElementsByClassName.borderBottom = "solid 4px #ccc";

//var input = document.querySelector("input");
//input.value = "Hello World"

//var submit = document.querySelector("input[type='submit']");
//submit.value = "SEND"

// QUERYSELECTOR //

//var odd = document.querySelectorAll("li:nth-child(odd)");

//for(var i = 0; i < odd.length; i++){
    //odd[i].style.backgroundcolor = 'f4f4f4';
//}


//TRAVERSING THE SOM //
var itemList = document.querySelector('#items');
//parentElement
//console.log(itemList.parentElement);
//itemList.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentElement.parentElement.parentElement);

// firstChild
//console.log(itemList.firstChild);
//firstElementChild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'Hello world';

// lastChild
//console.log(itemList.firstChild);
//lastElementChild
//console.log(itemList.lastElementChild);
// lastChild
//console.log(itemList.firstChild);
//lastElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'item 4';

//nextSibiling
//consol.log(itemList.nextSibiling);
// nextElementSibiling
//console.log(itemList.nextElementSibiling);

//previousSibiling
//console.log(itemList.previousSibling);
// previousElemntSibiling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'green';

//creatElement

//Creat a div
var newDev = document.createElement('div');

//Add class
newDiv.className='hello';

//Add id
newDiv.id='hello1';

//Add attr
newDiv.setAttribute('title', 'Hello Div');

//creat text node
var newDivText = document.createTextNode('Hello world');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv, h1);