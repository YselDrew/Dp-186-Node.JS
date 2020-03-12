import { CheckFrameworkView } from "./CheckFrameworkView.js";
import { CheckFrameworkModel } from "./CheckFrameworkModel.js";

export class CheckFrameworkController {
  constructor() {
    this.view = new CheckFrameworkView(this.handleClick.bind(this));
    this.model = new CheckFrameworkModel();
  }

  handleClick() {
    const str = this.view.inp.value;
    if (!str) {
      console.error('No data')
      return
    }

    this.model.checkFrameworkOrPokemon(str).then(data => this.view.showData(data))
  }
}
