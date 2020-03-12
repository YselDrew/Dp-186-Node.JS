export class CheckFrameworkModel {
  constructor() {
    this.link = "https://pokeapi.co/api/v2/pokemon/";
    this.data = {
      pokemons: [],
      frameworks: [],
    };
  }

  checkFrameworkOrPokemon(str) {
    const namesArr = str.split(/\W+/gi);
    const urls = namesArr.map(name => `${this.link}${name}`);

    const requests = urls.map(url => fetch(url));

    return Promise.all(requests).then(responses => {
      responses.forEach(response => {
        const name = this.findName(namesArr, response.url);

        if (response.status === 200) {
          this.data.pokemons.push(name);
        } else {
          this.data.frameworks.push(name);
        }
      });
      return this.data;
    });
  }

  findName(arr, str) {
    for (let i = 0; i < arr.length; i++) {
      const name = arr[i];
      if (str.includes(name)) {
        return name;
      }
    }
  }
}
