export class CheckFrameworkView {
  constructor(checkString) {
    this.btn = document.querySelector(".check-framework");
    this.inp = document.querySelector(".framework-inp");
    this.frameworks = document.querySelector(".frameworks");
    this.pokemons = document.querySelector(".pokemons");
    this.btn.addEventListener("click", checkString);
  }

  showData(names) {
    this.showPokemons(names.pokemons)
    this.showFrameworks(names.frameworks)
  }

  showPokemons(names) {
    const output = names.map(name => {
      return `<li>${name}</li>`;
    }).join('');

    this.pokemons.innerHTML = `<ul>${output}</ul>`;
  }

  showFrameworks(names) {
    const output = names.map(name => {
      return `<li>${name}</li>`;
    }).join('');

    this.frameworks.innerHTML = `<ul>${output}</ul>`;
  }
}
