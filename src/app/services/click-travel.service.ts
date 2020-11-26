import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDestination } from '../interfaces/IDestination';

@Injectable({
  providedIn: 'root'
})
export class ClickTravelService {

  baseUrl = "https://travel-api.clicksomeone.com";

  constructor(private http: HttpClient) { }

  getDestinations() {
    return this.http.get<IDestination[]>(this.baseUrl + "/destinations");
  }
}
