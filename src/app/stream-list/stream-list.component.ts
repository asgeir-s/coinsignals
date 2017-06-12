import { Component, OnInit, Input } from '@angular/core';

import { Stream } from "../types/Stream.d";

@Component({
  selector: 'app-stream-list',
  templateUrl: './stream-list.component.html',
  styleUrls: ['./stream-list.component.css']
})
export class StreamListComponent implements OnInit {
  @Input() streams: Stream[]
  columns: {name: string}[]
  constructor() { }

  ngOnInit() {
    this.columns = Object.keys(this.streams[0])
      .map(x => { return { name: x } })
  }

}
