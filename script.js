//====================
// DOM Elements
//====================

const readMoreButtons = document.querySelectorAll(".read-more")

//====================
// Events
//====================

readMoreButtons.forEach(function (button) {

        const article = button.closest("article");
        const articleText = article.querySelector(".article-text");

        const shortText = articleText.textContent;
        const fullText = articleText.dataset.fullText;

    button.addEventListener("click", function (event) {
        event.preventDefault();

        console.log(article);

        if (button.textContent === "Read more") {
            articleText.classList.add("expanded")
        }else {
            articleText.classList.remove("expanded")
        }

        if (button.textContent === "Read more") {
            articleText.textContent = fullText;
            button.textContent = "Read less";
        }else {
            articleText.textContent = shortText;
            button.textContent = "Read more";
        }
    });
});