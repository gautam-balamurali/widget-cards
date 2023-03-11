import { Component, Input, OnInit } from '@angular/core';

interface Lighting {
  name: string;
  total: number;
  value: number;
}

@Component({
  selector: 'app-lighting',
  templateUrl: './lighting.component.html',
  styleUrls: ['./lighting.component.scss'],
})
export class LightingComponent implements OnInit {
  @Input() lightingData: Lighting;

  constructor() {}

  ngOnInit(): void {
    console.log(this.lightingData);
  }
}
