const mes_preferences = [
  "Films d'horreur",
  "voiture",
  "moto",
  "armes",
  "vacances",
  "sport",
];

let collection = [
  {
    marque: "Beretta",
    modèle: "Beretta 92FS",
    calibre: "9mm",
    capacitéChargeur: 15,
    description:
      "Une des pistolets les plus emblématiques du monde, largement utilisé par les forces armées et les forces de l'ordre à travers le monde. Connue pour sa fiabilité et sa précision.",
    image:
      "https://www.decosterhunting.be/wp-content/uploads/2018/10/Beretta1.jpg",
    test: "https://youtu.be/_FzUVgclXBo?si=iM7UcWxav2QoF_2I",
  },
  {
    marque: "CZ",
    modèle: "CZ 75 SP-01 Competition",
    calibre: "9mm",
    capacitéChargeur: 16,
    description:
      "Un pistolet tchèque classique réputé pour sa conception robuste et son ergonomie exceptionnelle. Apprécié par les tireurs sportifs et les professionnels de la sécurité.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC83RbMhn2vIVJah1UnJz71wK7Zmxi6g4zqXVk4U0ruQ&s",
    test: "https://youtu.be/mQVopoklc1g",
  },
  {
    marque: "Smith & Wesson",
    modèle: "Smith & Wesson M&P 9",
    calibre: "9mm",
    capacitéChargeur: 18,
    description:
      "Une arme polyvalente et fiable, conçue pour répondre aux besoins des forces de l'ordre et des tireurs civils. Offre une manipulation confortable et des performances de tir précises.",
    image:
      "https://armureriefoucart.be/wp-content/uploads/sw-mp.jpg",
    test: "https://youtu.be/9s290LambmM",
  },
  {
    marque: "AR-15",
    modèle: "Smith & wesson m&p15 Sport 2",
    calibre: "5.56mm",
    capacitéChargeur: 30,
    description:
      "Une carabine polyvalente et modulaire, largement utilisée pour le tir sportif, la chasse et la défense personnelle. Connu pour sa fiabilité et sa grande variété d'options de personnalisation.",
    image:
      "https://assets.basspro.com/image/upload/c_limit,dpr_2.0,f_auto,h_250,q_auto,w_400/c_limit,h_250,w_400/v1/ProductImages/450/master2_10492_main?pgw=1",
    test: "https://youtu.be/ufmSq-OyX8c",
  },
  {
    marque: "Glock",
    modèle: "Glock 19",
    calibre: "9mm",
    capacitéChargeur: 15,
    description:
      "Un pistolet compact et fiable, adapté à la fois à la défense personnelle et au port dissimulé. Réputé pour sa simplicité de conception et sa grande capacité de chargeur.",
    image:
      "https://cdn.webshopapp.com/shops/297404/files/350383170/1000x1000x1/glock-19-gen5.jpg",
    test: "https://youtu.be/Yk0WIHganhg",
  },
  {
    marque: "Sig Sauer",
    modèle: "Sig Sauer P226",
    calibre: "9mm",
    capacitéChargeur: 15,
    description:
      "Une arme de poing populaire utilisée par de nombreuses forces armées et agences de maintien de l'ordre à travers le monde. Offre une fiabilité exceptionnelle et des performances de tir précises.",
    image:
      "https://www.sigsauer.com/media/catalog/product/cache/98cff4b26e9262b232060edf742d323e/p/2/p226-bse-2021.jpg",
    test: "https://youtu.be/5S6tSQ0WoQk",
  },
  {
    marque: "Heckler & Koch",
    modèle: "Heckler & Koch USP",
    calibre: ".40 S&W",
    capacitéChargeur: 13,
    description:
      "Un pistolet de combat robuste et polyvalent, conçu pour répondre aux exigences des militaires et des professionnels de la sécurité. Offre une grande fiabilité et une précision exceptionnelle.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/19/First-year_H%26K_USP_9mm_%2832415150000%29.jpg",
    test: "https://youtu.be/LSBiFdfS23I",
  },
  {
    marque: "FN Herstal",
    modèle: "FN Five-seveN",
    calibre: "5.7x28mm",
    capacitéChargeur: 20,
    description:
      "Une arme de poing innovante conçue pour utiliser la cartouche 5.7x28mm. Réputée pour sa légèreté, sa faible recul et sa capacité de chargeur élevée.",
    image: "https://fnherstal.com/app/uploads/FN_Five-seveN_Mk3_MRD_black-right-ok.png",
    test: "https://youtu.be/qgjP6xQLnjw",
  },
  {
    marque: "Desert Eagle",
    modèle: "Desert Eagle Mark XIX",
    calibre: ".50 Action Express",
    capacitéChargeur: 7,
    description:
      "Un pistolet emblématique connu pour son design imposant et sa puissance de feu impressionnante. Populaire parmi les amateurs de tir sportif et les collectionneurs pour sa présence sur grand écran.",
    image:
      "https://www.americanrifleman.org/media/bhmmwqb3/201292592746-deserteaglemag_f.jpg?anchor=center&mode=crop&width=987&height=551&rnd=132616871472030000&quality=60",
    test: "https://youtu.be/57Wyn7POh68",
  },
  {
    marque: "Colt",
    modèle: "Colt 1911",
    calibre: ".45 ACP",
    capacitéChargeur: 7,
    description:
      "Un pistolet classique qui a marqué l'histoire en tant qu'arme de service pour les forces armées américaines pendant de nombreuses décennies. Apprécié pour sa fiabilité et sa simplicité de fonctionnement.",
    image:
      "https://static.wixstatic.com/media/2abdb8_0f0c6114143e41e19e79276a8c675dbf~mv2.jpeg/v1/fill/w_560,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2abdb8_0f0c6114143e41e19e79276a8c675dbf~mv2.jpeg",
    test: "https://youtu.be/Abm_vPBeosQ?si=t7EFe4zgJYYygJjp",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  let conteneurCartes = document.querySelector(".card_container");
  collection.forEach(function (arme) {

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

    // Ajouter la carte au conteneur des cartes
    conteneurCartes.appendChild(carte);
  });
  let body_header = document.createElement("header");
  let body = document.querySelector("body");
  body.appendChild(body_header);
});