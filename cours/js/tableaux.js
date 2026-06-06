// date : 03/06/2026

// Exercice 1 : Découverte des tableaux JS

const competences = ["lame sournoise", "passage des lames", "clone de l'ombre", "imprégniation d'ombre"];

console.log("Affiche la première compétence :" + " " + competences[0]);

console.log("Affiche la dernière compétence : " + " " + competences[competences.lenght - 1]);

competences.push("imprégniation de givre");

console.log("Affiche le tableau complet :" + " " + competences);

competences.pop();

console.log("Affiche de nouveau le tableau :" + " " + competences);

// Exercice 2 : for each et map 

const joueurs = [{pseudo : "Toasty", niveau : 25, classe : "Barbare"},
   {pseudo : "Crusty", niveau : 55, classe : "Sorcière"},
   {pseudo : "Yakaru", niveau : 45, classe : "Paladin"}, 
   {pseudo : "Potiche", niveau : 70, classe : "Voleuse"}];

joueurs.forEach(joueur => {
  console.log(joueur.pseudo);
});

const niveaux = joueurs.map(joueur => joueur.niveau);
console.log(niveaux);

// Exercice 3 : filter

const hautNiveaux = joueurs.filter( joueur => joueur.niveau > 50);
console.log(hautNiveaux);

const Yakaru = joueurs.find(find => find.pseudo === "Yakaru");
console.log(Yakaru);

// Exercice 3 : Mini défi final

const items = [
  {nom : "Épée", type : "Arme", puissance : 25},
  {nom : "Épaulières lourdes", type : "Armure", puissance : 33},
  {nom : "Gants", type : "Armure", puissance : 28},
  {nom : "Hache à deux mains", type : "Arme", puissance : 60},
  {nom : "Bouclier", type : "Main gauche", puissance : 70}
];

items.forEach(item => {
  console.log(item.nom);
});

const puissance = items.map(pui => pui.puissance);
console.log(puissance);

const typeArme = items.filter(arme => arme.type === "Arme");
console.log(typeArme);

const itemFind = items.find(find => find.nom === "Hache à deux mains");
console.log(itemFind);

items.push({nom : "Catalyseur", type : "Main gauche", puissance : 85});
console.log("Tableau :", items);
console.log("Longueur :", items.length);

items.pop()
console.log("le dernier item à été supprimé : ", items);

