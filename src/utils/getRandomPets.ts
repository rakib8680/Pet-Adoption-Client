


function getRandomPets(allPets: any[], count: number) {
    // Clone the array to avoid mutating the original
    let tempPets = [...allPets];

    // Shuffle array
    for (let i = tempPets.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempPets[i], tempPets[j]] = [tempPets[j], tempPets[i]];
    }

    // Get sub-array of first n elements after shuffled
    return tempPets.slice(0, count);
  }


export default getRandomPets;