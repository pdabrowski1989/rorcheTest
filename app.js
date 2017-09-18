var list = document.getElementById('list');

document.onload = loop();

function loop() {
    for (var i = 0; i < 100; i++) {
        createElement(i)
    }
}

function createElement(index) {
    if (!index) return;

    var createDiv = document.createElement("div");
    var listItem = "element listy nr: " + index + "<span style=\"float: right\">usun</span>";

    createDiv.setAttribute('data-value', index);
    list.appendChild(createDiv).innerHTML = listItem;
}

function clickItem(e) {
    if(!e) return;

    if(e.target.textContent === "usun") {
        e.target.parentNode.remove()
    } else if(e.target.getAttribute('data-value')%3 === 0) {
        e.target.style.background = 'red';
    }
}

