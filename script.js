/*écrivez une fonction asynchrone iterateWithAsyncAwait qui prend un tableau de valeurs et 
enregistre chaque valeur avec un délai de 1 seconde entre les journaux.*/

async function iterateWithAsyncAwait(array) {
    for (const value of array) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Attendre 1 seconde
        console.log(value);
    }
}

// Exemple d'utilisation de la fonction
const myArray = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(myArray);


/*En attente d'un appel : créez une fonction asynchrone waitCall qui simule la récupération de données à partir d'une API. 
Utilisez wait pour attendre la réponse de l'API, puis enregistrez les données.*/
async function waitCall() {
    // Simuler une requête à une API avec un délai de 3 secondes
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Données récupérées de l'API
    const data = { id: 1, name: 'Exemple de données' };

    console.log('Données récupérées:', data);
}

// Appel de la fonction waitCall
waitCall();



/*créez une fonction asynchrone concurrentRequests qui effectue deux appels d'API simultanément à l'aide de Promise.all() . 
Enregistrez les résultats combinés une fois les deux demandes résolues.*/
async function concurrentRequests() {
    // Promesses représentant les deux appels d'API
    const request1 = new Promise(resolve => setTimeout(() => resolve('Résultat de la requête 1'), 2000));
    const request2 = new Promise(resolve => setTimeout(() => resolve('Résultat de la requête 2'), 1500));

    // Utilisation de Promise.all pour attendre que les deux promesses se résolvent
    const results = await Promise.all([request1, request2]);

    // Affichage des résultats combinés une fois les deux demandes résolues
    console.log('Résultats combinés:', results);
}

// Appel de la fonction concurrentRequests
concurrentRequests();