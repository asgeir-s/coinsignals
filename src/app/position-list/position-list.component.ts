import { Component, OnInit, Input } from '@angular/core';
import { Position } from "../types/Position.d";

@Component({
  selector: 'cs-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.css']
})
export class PositionListComponent implements OnInit {
  @Input() positions: Position[]
  columns: {name: string}[]
  constructor() { }

  ngOnInit() {
    this.columns = Object.keys(this.positions[0])
      .map(x => { return { name: x } })
    console.log(this.positions)
  }
}