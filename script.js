const cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {

    card.addEventListener("click", function() {
        
       
    });

  });

  const revealBtn = document.querySelector("#revealBtn");
    const hiddenText = document.querySelector("#hiddenText");

    revealBtn.addEventListener("click", function() {
        hiddenText.hidden = !hiddenText.hidden;
    });

 let lastScroll = 0;
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 100) {
        nav.classList.add("hide");
    } else {
        nav.classList.remove("hide");
    }

    lastScroll = currentScroll;
});
