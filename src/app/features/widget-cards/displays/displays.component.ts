import { Component, Input, OnInit } from '@angular/core';

interface Displays {
  name: string;
  on_time: string;
  total: number;
  value: number;
}

@Component({
  selector: 'app-displays',
  templateUrl: './displays.component.html',
  styleUrls: ['./displays.component.scss'],
})
export class DisplaysComponent implements OnInit {
  @Input() displayData: Displays;
  constructor() {}

  ngOnInit(): void {
    console.log(this.displayData);
  }
}
