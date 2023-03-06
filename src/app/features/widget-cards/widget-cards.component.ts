import { Component, OnInit } from '@angular/core';
import { WidgetDataService } from 'src/app/core/services';

@Component({
  selector: 'app-widget-cards',
  templateUrl: './widget-cards.component.html',
  styleUrls: ['./widget-cards.component.scss'],
})
export class WidgetCardsComponent implements OnInit {
  widgetData = [];

  constructor(public dataService: WidgetDataService) {}

  ngOnInit(): void {
    this.dataService.fetchWidgetData().subscribe((response) => {
      this.widgetData = response[0]?.data;
      console.log(this.widgetData[0], this.widgetData);
    });
  }
}
