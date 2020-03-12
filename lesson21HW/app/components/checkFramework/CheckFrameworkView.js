export class CheckFrameworkView {
  constructor(checkString) {
    this.btn = document.querySelector(".check-framework");
    this.inp = document.querySelector(".framework-inp");
    this.frameworks = document.querySelector(".frameworks-elems");
    this.pokemons = document.querySelector(".pokemons-elems");
    this.btn.addEventListener("click", checkString);
  }

  showData(names) {
    this.showPokemons(names.pokemons);
    this.showFrameworks(names.frameworks);
  }

  showPokemons(names) {
    const output = names
      .map(name => {
        return `<div>${name}</div>`;
      })
      .join("");

    this.pokemons.innerHTML = output;
  }

  showFrameworks(names) {
    const output = names
      .map(name => {
        return `<div>${name}</div>`;
      })
      .join("");

    this.frameworks.innerHTML = output;
  }
}
