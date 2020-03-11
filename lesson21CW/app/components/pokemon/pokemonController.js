import { PokemonModel } from "./pokemonModel.js";
import { PokemonView } from "./pokemonView.js";

export class PokemonController {
  constructor() {
    this.model = new PokemonModel();
    // this.view = new PokemonView(this.handleClickRandomPokemon);
    // ; problem with context
    
    // 1. 
    this.view = new PokemonView(this.handleClickRandomPokemon.bind(this));
    
    // 2.
    // this.view = new PokemonView(() => this.handleClickRandomPokemon());

    // 3.
    // this.view = new PokemonView(this.handleClickRandomPokemon);
  }

  // 3.
  // handleClickRandomPokemon = () => {
  //   this.model.getRandomPokemon().then(arr => this.view.renderPokemons(arr));
  // }

  handleClickRandomPokemon() {
    this.model.getRandomPokemon().then(arr => this.view.renderPokemons(arr));
  }
}
