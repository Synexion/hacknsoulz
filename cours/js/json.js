// début : 04/06/2026
// JSON

// Exercice 1 : traduire du Json en JS

const reponseAPI = '{"nom":"Lilith","tier":5,"actif":true}';
const objet = JSON.parse(reponseAPI);
console.log(`Voici le nom de l'objet : ${objet.nom} et son tier : ${objet.tier}`);

// Exercice 2 : traduire du JS en Json

const build = {
  nom: "Bone Spear",
  classe: "Nécromancien",
  tier: "S",
  actif: true
};

const tradJs = JSON.stringify(build);

console.log(tradJs, typeof tradJs);

// Exercice 3 : les deux ensemble 

const reponse = '[{"nom":"Bone Spear","tier":"S"},{"nom":"Twisting Blades","tier":"A"},{"nom":"Ball Lightning","tier":"S"}]';
const reponseTradJs = JSON.parse(reponse);
console.log(reponseTradJs);

const resultat = (reponseTradJs, tier) => {
  return reponseTradJs.filter(t => t.tier === tier);
}
console.log(resultat(reponseTradJs, "S"));