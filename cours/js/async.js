// début : 04/06/2026
// async

// Exemple : 

const getUtilisateurs = async () => {
  try {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await reponse.json();
    console.log(data);

    const noms = data.map(user => user.name);
    console.log(noms);
    const filterCity = data.filter(user => user.address.city.includes("S"));
    console.log(filterCity);

  } catch(erreur) {
    console.log("Erreur :", erreur);
  }
};

getUtilisateurs();

const getPost = async () => {
  try {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await reponse.json();
    console.log(data);

    const filterPost = data.filter(user => user.userId === 1);
    console.log(filterPost);
    
    filterPost.forEach(post => {
      console.log(`Post : ${post.title}`);
    })

  } catch(erreur) {
    console.log("erreur : ", erreur);
  }
};

getPost();

const getPersonnage = async () => {
  try {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await reponse.json();
    console.log(data);

    console.log(`La personne s'appel ${data.name}, elle habite à ${data.address.city}`);

  } catch(erreur) {
    console.log("Voici l'erreur : ", erreur);
  }
};

getPersonnage();