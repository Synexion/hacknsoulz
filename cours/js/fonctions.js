// début : 04/06/2026

// Fonctions

// Exercice 1 : fonction fléchée

const calculerDegats = (attaque, defense) => {
  return attaque - defense;
}
console.log(calculerDegats(5,3));

// Exercice 2 : fonction return implicite

const calculerDgt = (attaque,defense) => attaque - defense;
console.log(calculerDgt(55,20));

// Exercice 3 : fonction intermédiaire

const joueur = {nom : "Toasty", classe : "Barbare", niveau : 48};

const decrireJoueur = (joueur) => {
  return joueur.nom + " est un " + joueur.classe + " de niveau : " + joueur.niveau;
};

console.log(decrireJoueur(joueur));

// Exercice 4 : fonctions avancé

const player = [{nom : "Toasty", classe : "Druide", niveau : 26},
  {nom : "Crusty", classe : "Sorcier", niveau : 55},
  {nom : "Roar", classe : "Sacresprit", niveau : 70},
  {nom : "Speagle", classe : "Sacresprit"}
];

const filterParClasse = (player, classe) => {
  return player.filter(j => j.classe === classe);
}
console.log(filterParClasse(player,"Sacresprit"));

// Exercice 5 : Mini défi final

const inventaire = [
  {nom : "torse en cuir", type : "armure", valeur : 50},
  {nom : "casque", type : "armure", valeur : 33},
  {nom: "masse à une main", type : "arme", valeur : 70},
  {nom : "bouclier", type : "main gauche", valeur : 135},
  {nom : "jambière en acier", type : "armure", valeur : 88}
];

const afficherItems = (inventaire) => {
  inventaire.forEach(i => {
    console.log(i.nom);
  });
};
afficherItems(inventaire);

const totalValeur = (inventaire) => {
  let total = 0;
  inventaire.forEach(item => {
    total += item.valeur;
  });
  return total;
};
console.log(totalValeur(inventaire));

const filterParType = (inventaire, type) => {
  return inventaire.filter(i => i.type === type);
}
console.log(filterParType(inventaire,"armure"));

// Rappel d'excercice , notion moyennement maitrisé : 

const serveurs = [
  { nom: "EU-West", region: "EU", joueurs: 1200, enligne: true },
  { nom: "US-East", region: "US", joueurs: 850, enligne: true },
  { nom: "EU-Central", region: "EU", joueurs: 2100, enligne: false },
  { nom: "AS-Tokyo", region: "AS", joueurs: 400, enligne: true },
  { nom: "US-West", region: "US", joueurs: 600, enligne: false }
]

const getServeurs = (serveurs, region) => {
  return serveurs.filter(seu => seu.region === region);
}
console.log(getServeurs(serveurs, "EU"));

const getServeurOnline = (serveurs, region) => {
  return serveurs.filter(seuo => seuo.region === region && seuo.enligne === true);
}
console.log(getServeurOnline(serveurs, "US"));

const getTopJoueurs = (serveurs, minimum) => {
  return serveurs.filter(sTop => sTop.joueurs > minimum && sTop.enligne);
}
console.log(getTopJoueurs(serveurs, 700));