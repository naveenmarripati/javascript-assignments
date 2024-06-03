let article_2 = document.getElementById("article-2")
let head = document.createElement("h1");
let button_divEl = document.createElement("button_div");
let button_1 = document.getElementById("button_1")

let unorder_listEL = document.getElementById("unorder_list")


function htmlLogin() {
    article_2.classList.add("article-container");

    head.textContent = "HTML stands for -"
    head.classList.add("head")
    article_2.appendChild(head)

    unorder_listEL.classList.add("unorder_list_js")
    article_2.appendChild(unorder_listEL)

    button_divEl.classList.add("button_div_1")
    button_1.classList.add("button_11");
    article_2.appendChild(button_divEl)

    button_divEl.appendChild(button_1)
    //let value = 1;

    // button_1.onclick = function () {
    //     value++

     }
    // if (value === 1) {
    //     head.textContent = "HTML stands for -"
    //     head.classList.add("head")
    //     article_2.appendChild(head)

    //     unorder_listEL.classList.add("unorder_list_js")
    //     article_2.appendChild(unorder_listEL)
    // }
    // else if (value === 2) {
    //     head.textContent = "CSS stands for -"
    //     head.classList.add("head")
    //     article_2.appendChild(head)

    //     unorder_listEL.classList.add("unorder_list_js")
    //     article_2.appendChild(unorder_listEL)
    // }





function cssLogin() {
    article_2.classList.add("article-container");

    head.textContent = "CSS stands for -"
    head.classList.add("head")
    article_2.appendChild(head)

    unorder_listEL.classList.add("unorder_list_js")
    article_2.appendChild(unorder_listEL)

    button_divEl.classList.add("button_div_1")
    button_1.classList.add("button_11");
    article_2.appendChild(button_divEl)

    button_divEl.appendChild(button_1)
}

function javascriptLogin() {
    article_2.classList.add("article-container");

    head.textContent = "Javascript stands for -"
    head.classList.add("head")
    article_2.appendChild(head)

    unorder_listEL.classList.add("unorder_list_js")
    article_2.appendChild(unorder_listEL)

    button_divEl.classList.add("button_div_1")
    button_1.classList.add("button_11");
    article_2.appendChild(button_divEl)

    button_divEl.appendChild(button_1)
}
