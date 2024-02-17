export function fetchCharacters() {
  return fetch("https://hp-api.onrender.com/api/characters/")
    .then((response) => response.json())
    .then((responseData) => {
      return responseData.map((obj) => {
        return {
          name: obj.name,
          alternate_names: obj.alternate_names,
          species: obj.species,
          house: obj.house,
          gender: obj.gender,
          wizard: obj.wizard,
          dateOfBirth: obj.dateOfBirth,
          alive: obj.alive,
          image: obj.image,
          id: obj.id,
        };
      });
    });
}
