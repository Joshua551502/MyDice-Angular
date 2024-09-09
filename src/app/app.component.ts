import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {RollData} from "./roll-data";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  diceValues: number[] = [];
  total: number = 0;

  private getRandomDiceValue(){
  return 1 + Math.floor(6*Math.random());
}

private getRollData(numberOfDice: number): RollData{
  const values = [];
  let total = 0;
  for(let i = 0; i < numberOfDice; i++){
    let diceValue = this.getRandomDiceValue()
    values.push(diceValue);
    total += diceValue;
  }
  return {
    numberOfDice: numberOfDice,
    values: values,
    total: total
  };

}

  onRollDice(numberOfDice: number): void{
    let rollData: RollData = this.getRollData(numberOfDice);
    this.diceValues = rollData.values;
    this.total = rollData.total;
  }

  onReset(): boolean{
    this.diceValues = [];
    this.total = 0;
    return false;
  }

  protected readonly parseInt = parseInt;
}
