window.onload = function () {
    let menu = document.querySelector(".btn-group-vertical");
    menu.className = "btn-group-horizontal";

    let jumbotron = document.getElementsByClassName("jumbotron")[0];
    jumbotron.classList.add("bg-secondary", "d-flex", "flex-column", "align-items-end", "text-light");
    jumbotron.querySelector("hr").classList.add('w-100');
    jumbotron.querySelector("hr ~ p").classList.add('text-right','align-right');
    jumbotron.querySelector(".btn").classList.add("btn-success");

    let card = document.getElementsByClassName("card")[1];
    card.querySelector(".btn").className = "btn btn-success";

    const activeLi = document.querySelector(".list-group-item.active");
    activeLi.classList.remove("active");

    let list = document.querySelector(".list-group");
    const li = document.createElement("li");
    li.classList.add("list-group-item", "active");
    li.innerText = "Quarto item";
    list.appendChild(li);

    const li2 = document.createElement("li");
    li2.classList.add("list-group-item");
    li2.innerText = "Quinto item";
    list.appendChild(li2);
}