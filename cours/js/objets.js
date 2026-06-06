// date : 02/06/2026

// Bloc 0 : Remise en route

// 1. Déclare une variable "nomPersonnage" avec la valeur "Lilith"
//    et affiche-la dans la console

let nomPersonnage = "Lilith";
console.log(nomPersonnage);

// 2. Déclare une variable "niveau" avec la valeur 85
//    Ajoute 15 à cette variable et affiche le résultat

let niveau = 85;

niveau += 15;
console.log(niveau);

if(niveau > 90){
  console.log("Personnage puissant");
}else{
  console.log("Personnage faible");
}

// Bloc 1 : Théorie d'objet

const item = {
  nom : "lame",
  type : "arme",
  rarete : "classique",
  itemLevel : 700
};

console.log(item.nom, item.itemLevel);

const joueur = {
  pseudo : "Synexion",
  classe : "Voleur",
  niveau : 1,
  estConnecte : true
};

console.log(joueur.pseudo);

joueur.niveau = 15;

joueur.estConnecte = false;

console.log(joueur.niveau, joueur.estConnecte);

// Objet imbriqué

const build = {
  nom : "Poison",
  classe : joueur.classe,
  competencePrincipale : {
    nom : "lame sournoise",
    degats : 150,
    type : "Physique"
  }
};

console.log(build.nom, build.competencePrincipale.nom, build.competencePrincipale.degats);

build.competencePrincipale.degats = 2000000;

console.log(build.competencePrincipale.degats);

// Exercice final du bloc 1 

const serveur = {
  nom : "HacknSoulz",
  region : "EU",
  joueurs : {
    connectes : 9,
    maximum : 18
  }
}

console.log(serveur.nom, serveur.region, serveur.joueurs.connectes);

serveur.joueurs.connectes += 150;

console.log(serveur.joueurs.connectes);

// Exercice plus complexe 
// Exercice 1 --------

const profil = {
  pseudo : "Synexion",
  formation : {
    titre : "Développeur web et web mobile",
    duree : "8 mois",
    resultat : "Obtenu"
  },
  competence : {
    html : true,
    css : true,
    js : false,
    php : false,
  },
  disponible : false
};

console.log(profil.pseudo, profil.formation.titre);

if(profil.competence.php === true){
  console.log("Synexion maitrise le PHP");
} else {
  console.log("PHP non maitrisé");
};

// Correction du if
// Pas besoin du === true parce que c'est déjà un booléen 

// if(profil.competence.php){
//   console.log("Synexion maitrise le PHP");
// } else {
//   console.log("PHP non maitrisé");
// };

profil.disponible = true;

// Correction de l'inversion de valeur

// profil.disponible = !profil.disponible;

console.log(profil.disponible);

// Exercice 2 ------------

const partie = {
  joueur : {
    pseudo : "Ellana",
    classe : "Voleur"
  },
  session : {
    duree : 50,
    monstreTuer : 277,
    orCollecter : 1500000
  },
  terminee : false
};

console.log(partie.joueur.pseudo, partie.joueur.classe);

partie.session.duree += 45;

partie.session.monstreTuer += 320;

console.log(partie.session.monstreTuer, partie.session.orCollecter, partie.session.duree);

partie.terminee = !partie.terminee;

console.log(partie.terminee);

// Exercice 3 ( libre ) ------------

const player = {
  nom : "Barbouche",
  classe : "Barbare",
  level : 55
};

const dungeon = {
  caract : {
    nom : "Chambre de l'Exarque",
    level : 50,
    difficulte : "moyenne"
  },
  affixe : {
    danseDesLames : "Quand les ennemies meurent, des lames tournoyantes ont des chances d'apparaitre autour du cadavre",
    monarchieAbsolue : "Les monstres élites ont des chances de renaitre en tant que Élite Monarque"
  },
  accompli : false
};

if(player.level > dungeon.caract.level){
  dungeon.caract.difficulte = "Haute";
  dungeon.caract.level = player.level+3;
  console.log("La difficulté à été augmenté à " + " " + dungeon.caract.difficulte+ ". "+ "Niveau du donjon : " + " " + dungeon.caract.level);
}

dungeon.accompli = !dungeon.accompli;
console.log(dungeon.accompli);

if(dungeon.accompli === true){
  player.level += 7;
  console.log(player.level);
}


console.log(player.level + " Vous avez gagnez 7 niveaux en accomplissent ce donjon !");