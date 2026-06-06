// début : 04/06/2026
// ES6 + 

// destructuring

const joueur = {pseudo : "Toasty", classe : "Barbare", niveau : 48};

console.log(`Depuis peu, ${joueur.pseudo} joue ${joueur.classe} et il est niveau ${joueur.niveau}.`);

// const { pseudo, niveau, classe } = joueur;

// console.log(`Je suis ${pseudo} ! Votre pire cauchemar, préparez vous à affronter le plus grand ${classe} de tout les temps ! Vous êtes des mouches comparé à mon niveau : ${niveau}`);

// Spread operator 

const competencesBase = ["Lame sournoise", "Passage des lames"];
const competencesAvancees = ["Clone de l'ombre", "Imprégination d'ombre"];

const allComp = [...competencesBase,...competencesAvancees];
console.log(allComp);

const stats = { vie: 5000, armure: 300 };
const bonus = { degats: 1500, vitesse: 20 };

const persoComplet = {...stats, ...bonus};
console.log(persoComplet);

// Exercice final 

const hero = { pseudo: "Darkblade", classe: "Voleur", niveau: 67 };
const equipement = { arme: "Dague empoisonnée", armure: "Cuir renforcé" };
const competences = ["Lame sournoise", "Passage des lames"];
const nouvelles = ["Frappe mortelle", "Évasion"];

const persoPrincipal = {...hero,...equipement};
const toutesComp = [...competences,...nouvelles];

const {pseudo,niveau} = persoPrincipal;

console.log(`${pseudo} (niveau ${niveau}) possède ${toutesComp.length} compétences`);