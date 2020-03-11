export class PokemonView {
  constructor(cback) {
    this.btn = document.querySelector(".btn-poke");
    this.info = document.querySelector(".pokemon-info");
    this.btn.addEventListener("click", cback);
  }

  renderPokemons(arr) {
    this.info.innerHTML = arr.map(p => this.getSinglePokemon(p)).join("");
  }

  //
  // Return string with html tags of current pokemon
  //   @params : pokemon objects {id, }
  //   @return : html string of pokemon
  //
  getSinglePokemon({ name, photo }) {
    return `<div class="card" style="width: 8rem;">
        <img
          src="${photo}"
          class="card-img-top"
          alt="pokemon"
        />
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
        </div>
      </div>`;
  }
}
