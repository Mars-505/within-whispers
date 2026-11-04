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