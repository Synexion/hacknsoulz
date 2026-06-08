import { useState, useEffect } from 'react';


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
      <ListeUtilisateur></ListeUtilisateur>
      <ListePosts></ListePosts>
      <ListeCommentaires></ListeCommentaires>
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

// useEffect : introduction

function MonComposant() {
  const [data, setData] = useState(null);

  useEffect(()=> {
    console.log("composant affiché");
  },[]);

  return <div>{data}</div>;
}

function ListeUtilisateur() {
  const [utilisateurs, setUtilisateurs] = useState([]);

  useEffect(() => {
    const fetcher = async ()=> {
      try {
        const reponse = await fetch("https://jsonplaceholder.typicode.com/users/");
        const data = await reponse.json();
        setUtilisateurs(data);
      } catch(erreur) {
        console.log("Voici l'erreur :", erreur);
      }
    }
    fetcher();
  }, []);

  return (
    <ul>
      {utilisateurs.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

function ListePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const recupPoste = async () => {
      try {
        const reponse = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await reponse.json();
        setPosts(data);
      } catch(erreur) {
        console.log("Voici l'erreur :", erreur)
      }
    }
    recupPoste();
  }, []);

  return (
    <ul>
      {posts.filter(post => post.userId === 1).map(post => (
        <li key={post.id}><h2>{post.title}</h2></li>
      ))}
    </ul>
  )
}

// Exercice en autonomie : useEffect 

function ListeCommentaires() {
  const [commentaires, setCommentaires] = useState([]);

  useEffect(() => {
    const recupCommentaire = async () => {
      try {
        const reponse = await fetch("https://jsonplaceholder.typicode.com/comments");
        const data = await reponse.json();
        console.log(data);
        setCommentaires(data);
      } catch(erreur){
        console.log("Voici l'erreur :",erreur)
      }
    }
    recupCommentaire();
  }, []);

  return(
    <ul>
      {commentaires.filter(com => com.postId === 1).map(com => (
        <li key={com.postId}>{com.name} - {com.email}</li>
      ))}
    </ul>
  )
}