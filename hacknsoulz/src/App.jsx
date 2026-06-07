import { useState } from 'react';

// 
function App() {
  return (
    <div>
      <h1>HacknSoulz</h1>
      <PersonnageNom nom="Synexion" classe="Sacresprit"></PersonnageNom>
      <PersonnageNom nom="Ellana" classe="Voleuse"></PersonnageNom>
      <Compteur></Compteur>
      <Item nom="Eldruin" type="épée" puissance="900"/>
      <Item nom="Bouclier d'os" type="main gauche" puissance="700"></Item>
      <Item nom="Amulette en bronze" type="bijoux" puissance="250"></Item>
      <StatJoueur label="Vie" valeur="5000"></StatJoueur>
      <StatJoueur label="Armure" valeur="17400"></StatJoueur>
      <StatJoueur label="Dégâts" valeur="3500"></StatJoueur>
    </div>
  );
  
}
// Composant
function PersonnageNom({nom, classe}) {
  return (
    <div>
      <h2>{nom}</h2>
      <p>{classe}</p>
    </div>
  );
}

function Compteur() {
  const [count, setCount]=useState(0);

  return(
    <div>
      <p>Kills :{count}</p>
      <button onClick={()=> setCount(count+ 1)}>+1 kill</button>
    </div>
  );
}

// Exercice 1 : Entrainement en autonomie sur les composants
function Item({nom,type,puissance}) {
  return(
    <div>
      <h3>{nom}</h3>
      <p>C'est une {type} qui a une puissance de {puissance}</p>
    </div>
  );
}

// Exercice 2 : Autres exercices

function StatJoueur({label, valeur}) {
  const [count, setCount]=useState({valeur});
  
  return(
    <div>
      <p>{label} : {valeur}</p>
    </div>
  );
}

export default App