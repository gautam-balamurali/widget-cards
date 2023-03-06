import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Globalconfig } from '../../config/app-config';

@Injectable({
  providedIn: 'root',
})
export class WidgetDataService {
  serverUrl = Globalconfig.apiEndpoint;

  constructor(public http: HttpClient) {}

  /**
   * Fetches widget data
   * @returns widget data
   */
  fetchWidgetData() {
    return this.http.get(this.serverUrl);
  }
}
