//highlight the google link
document.querySelector ("li a").style.color = "red";

//highlight the google button
document.querySelector ("li").style.color = "red";

//Get ID like title and features
//change texts
document.querySelector("title").innerHTML = "Bonjour";
//same as
//document.getElementsById("title").innerHTML = "Good Bye";
//can add html
//document.querySelector("title").innerHTML = "<em>Bonjour</em>";

//Gets the text Content
document.querySelector("title").textContent = "Bonjour";

//document.querySelector("li x").style.color = "blue";
//get all for array
//document.querySelectorAll("li")[0]

//uses camel cases

//Get class
//document.querySelector (".btn");
//same as
//document.getElementsByClassName("title");

//get elemets by tag
//document.getElementByTagName("li");
//get elements by array
//document.getElementsByTagName("li")[2].style.color = "purple";
//get lenth
//document.getElementByTagName("li").length;

//Gets the classes
//document.querySelector (".btn").classList;
//Add Class to add behavior in your code
//document.querySelector ("button").classList.add("invisible");
//remove class
//document.querySelector ("button").classList.remove("invisible");
//toggle if it's applied, remove it, if it's not applied, apply it
//document.querySelector ("button").classList.remove("invisible");

//Make the h1 huge
document.querySelector(".title").classList.add("huge");
