document.addEventListener("DOMContentLoaded", function () {
  let conteneurCartes = document.querySelector(".card_container");


  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      data.forEach(function (arme) {
        let carte = document.createElement("article");
        carte.classList.add("article_card");

        let image = document.createElement("img");
        image.src = arme.image;
        carte.appendChild(image);

        let marque = document.createElement("h2");
        marque.textContent = arme.marque;
        carte.appendChild(marque);

        let modele = document.createElement("h3");
        modele.textContent = arme.modèle;
        carte.appendChild(modele);

        let description = document.createElement("p");
        description.textContent = arme.description;
        carte.appendChild(description);

        let lienTest = document.createElement("a");
        lienTest.href = arme.test;
        lienTest.target = "_blank";
        lienTest.classList.add("fa", "fa-youtube");
        carte.appendChild(lienTest);


        conteneurCartes.appendChild(carte);
      });
    })
    .catch(error => console.error("Erreur lors du chargement des données :", error));
});
