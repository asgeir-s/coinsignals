import { Component } from '@angular/core';
import { Position } from "./types/Position.d";

@Component({
  selector: 'cs-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!'; 

  dummyPositions: Position[] = [
    {
      coin: "bitcoin",
      amount: 4,
      timestamp: 143323232232,
      closed: false
    },
    {
      coin: "ether",
      amount: 40,
      timestamp: 143323232333,
      closed: false
    }
  ]

}
