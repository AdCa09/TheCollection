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
    image: "cz_75.jpg",
  },
  {
    marque: "Smith & Wesson",
    modèle: "Smith & Wesson M&P 9",
    calibre: "9mm",
    capacitéChargeur: 18,
    description:
      "Une arme polyvalente et fiable, conçue pour répondre aux besoins des forces de l'ordre et des tireurs civils. Offre une manipulation confortable et des performances de tir précises.",
    image:
      "https://gun.deals/cdn-cgi/image/w=1200,h=630,f=auto/sites/default/files/1aaa5df87a872a95a97a45b523d19fe7.jpg",
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
  },
  {
    marque: "FN Herstal",
    modèle: "FN Five-seveN",
    calibre: "5.7x28mm",
    capacitéChargeur: 20,
    description:
      "Une arme de poing innovante conçue pour utiliser la cartouche 5.7x28mm. Réputée pour sa légèreté, sa faible recul et sa capacité de chargeur élevée.",
    image: "fn_fiveseven.jpg",
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
  },
];
// fonction qui crée un élément demandé dans le body
document.addEventListener("DOMContentLoaded", function () {
  function createElementBody(element, className) {
    let createdElement = document.createElement(element);
    createdElement.classList.add(className);
    let bodyElement = document.querySelector("body");
    bodyElement.appendChild(createdElement);
  }
  // création d'élément
  createElementBody("header");
  createElementBody("section", "card_container");
  createElementBody("article", "article_card");
  createElementBody("img");
  createElementBody("span");
  createElementBody("h2");
  createElementBody("h3");
  createElementBody("p");
  createElementBody("hr");
  createElementBody("a");
  //section
  let sectionContainer = document.querySelector("section");
  //article
  let articleCard = document.querySelector("article");
  //span
  let spanCard = document.querySelector("span");
  //img
  let imageInfo = collection[0].image;
  //h2
  let h2Name = document.querySelector("h2");
  let h2Brand = collection[0].marque;
  //h3
  let h3Card = document.querySelector("h3");
  let h3Model = collection[0].modèle;
  //p
  let pCard = document.querySelector("p");
  let paraCard = collection[0].description;
  //hr (barre de séparation)
  let séparation = document.querySelector("hr");
  //a
  let aYoutube = document.querySelector("a");
  aYoutube.classList.add("fa", "fa-youtube");
  let aDesc = collection[0].test;

  //img
  sectionContainer.appendChild(articleCard);
  let imgCard = document.querySelector("img");
  articleCard.appendChild(imgCard);
  imgCard.setAttribute("src", imageInfo);
  //span
  articleCard.appendChild(spanCard);
  let spanContent = document.querySelector("span");
  spanContent.textContent = "armes à feu";
  //h2
  articleCard.appendChild(h2Name);
  h2Name.textContent = h2Brand;

  //h3
  articleCard.appendChild(h3Card);
  h3Card.textContent = h3Model;

  //p
  articleCard.appendChild(pCard);
  pCard.textContent = paraCard;

  //hr
  articleCard.appendChild(séparation);
  //a
  articleCard.appendChild(aYoutube);
  aYoutube.setAttribute("href", aDesc);
  aYoutube.setAttribute("target", "_blank");

  document.addEventListener("DOMContentLoaded", function () {
    function createElementBody(element, className) {
      let createdElement = document.createElement(element);
      createdElement.classList.add(className);
      let bodyElement = document.querySelector("body");
      bodyElement.appendChild(createdElement);
    }
    // création d'élément
    createElementBody("header");
    createElementBody("section", "card_container2");
    createElementBody("article", "article_card2");
    createElementBody("img");
    createElementBody("span");
    createElementBody("h2");
    createElementBody("h3");
    createElementBody("p");
    createElementBody("hr");
    createElementBody("a");

    let sectionContainer = document.querySelector("section");
    //article
    let articleCard = document.querySelector("article");
    //span
    let spanCard = document.querySelector("span");
    //img
    let imageInfo = collection[1].image;
    //h2
    let h2Name = document.querySelector("h2");
    let h2Brand = collection[1].marque;
    //h3
    let h3Card = document.querySelector("h3");
    let h3Model = collection[1].modèle;
    //p
    let pCard = document.querySelector("p");
    let paraCard = collection[1].description;
    //hr (barre de séparation)
    let séparation = document.querySelector("hr");
    //a
    let aYoutube = document.querySelector("a");
    aYoutube.classList.add("fa", "fa-youtube");
    let aDesc = collection[1].test;

    //img
    sectionContainer.appendChild(articleCard);
    let imgCard = document.querySelector("img");
    articleCard.appendChild(imgCard);
    imgCard.setAttribute("src", imageInfo);
    //span
    articleCard.appendChild(spanCard);
    let spanContent = document.querySelector("span");
    spanContent.textContent = "armes à feu";
    //h2
    articleCard.appendChild(h2Name);
    h2Name.textContent = h2Brand;

    //h3
    articleCard.appendChild(h3Card);
    h3Card.textContent = h3Model;

    //p
    articleCard.appendChild(pCard);
    pCard.textContent = paraCard;

    //hr
    articleCard.appendChild(séparation);
    //a
    articleCard.appendChild(aYoutube);
    aYoutube.setAttribute("href", aDesc);
    aYoutube.setAttribute("target", "_blank");
  });
});

// fonction qui crée un élément demandé dans le header
document.addEventListener("DOMContentLoaded", function () {
  function createElementHeader(element, className) {
    let createdElement = document.createElement(element);
    createdElement.classList.add(className);
    let headerElement = document.querySelector("header");
    headerElement.appendChild(createdElement);
  }
  //création d'élément
  createElementHeader("h1", "test");
  let h1 = document.querySelector("h1");
  h1.textContent = "Adri's Collection";

  createElementHeader("p");
  let pHeader = document.querySelector("p");
  pHeader.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis nemo aut, atque veritatis minus voluptatibus nulla cumque! Ad, molestiae quod, officia laboriosam quia laborum praesentium labore suscipit ratione sequi tenetur.";
});
