import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetCardsComponent } from '.';
import {
  AirQualityComponent,
  AudioComponent,
  DisplaysComponent,
  LightingComponent,
  TemperatureComponent,
} from './widget-cards';

@NgModule({
  declarations: [
    WidgetCardsComponent,
    AirQualityComponent,
    TemperatureComponent,
    AudioComponent,
    DisplaysComponent,
    LightingComponent,
  ],
  imports: [CommonModule],
})
export class FeaturesModule {}
