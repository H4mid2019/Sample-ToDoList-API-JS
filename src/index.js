const ee = document.getElementsByClassName("container")[0];
for (let rr = 0; rr < 5; rr++) {
  fetch("https://jsonplaceholder.typicode.com/todos/" + (rr + 1).toString())
    .then(response => response.json())
    .then(json => {
      let node = document.createElement("DIV");
      node.classList = "card";
      node.style.width = "400px";
      let node2 = document.createElement("DIV");
      node2.classList = "card-body";
      node.appendChild(node2);
      let node3 = document.createElement("H4");
      node3.classList = "card-title";
      let textnode3 = document.createTextNode(json["title"]);
      node2.appendChild(node3);
      node3.appendChild(textnode3);
      let node4 = document.createElement("P");
      let textnode4 = document.createTextNode(
        "Completed:    " + json["completed"]
      );
      node4.classList = "card-text";
      node2.appendChild(node4);
      node4.appendChild(textnode4);
      let br = document.createElement("BR");
      ee.appendChild(br);
      ee.appendChild(node);
    });
}
