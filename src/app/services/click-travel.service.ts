import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IDestination } from '../interfaces/IDestination';
import { ITicket } from '../interfaces/ITicket';

@Injectable({
  providedIn: 'root',
})
export class ClickTravelService {
  constructor(private http: HttpClient) {}

  getDestinations() {
    return this.http.get<IDestination[]>(
      environment.apiBaseUrl + '/destinations'
    );
  }

  getTickets(to: string) {
    return this.http.get<ITicket[]>(
      environment.apiBaseUrl +
        '/tickets?filter=%7B%0A%20%20%22where%22%3A%20%7B%0A%20%20%20%20%22to%22%3A%20%22' +
        to +
        '%22%0A%20%20%7D%0A%7D'
    );
  }
}
