import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

interface AirQuality {
  name: string;
  hi: number;
  lo: number;
  value: number;
}

@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.scss'],
})
export class AirQualityComponent implements OnInit {
  @Input() airQualityData: AirQuality;

  constructor() {}

  ngOnInit(): void {
    console.log(this.airQualityData);
  }
}
