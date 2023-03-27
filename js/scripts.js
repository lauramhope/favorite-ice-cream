window.addEventListener("load", function() {
  let body = document.querySelector("body");
  let heading1 = document.createElement("h1");
  heading1.append("Favorite Ice Cream Flavors");
  body.append(heading1);

  const iceCreamArray = ["Rocky Road", "Strawberry", "Cookies n' Cream"];
  const ul = document.createElement("ul");
  iceCreamArray.forEach(function(flavor) {
    const li = document.createElement("li");
    li.append("I love" + " " + flavor);
    ul.append(li);
  });

  body.append(ul); 

});


