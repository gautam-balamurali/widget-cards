import { Component, Input, OnInit } from '@angular/core';

interface Temperature {
  name: string;
  value: number;
  hi: number;
  lo: number;
  format: string;
}

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss'],
})
export class TemperatureComponent implements OnInit {
  @Input() temperatureData: Temperature;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => console.log(this.temperatureData), 5000);
  }
}
