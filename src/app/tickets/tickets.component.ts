import { Component, OnInit } from '@angular/core';
import { ClickTravelService } from '../services/click-travel.service';
import { ActivatedRoute } from '@angular/router';
import { ITicket } from '../interfaces/ITicket';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {
  destination: string;
  tickets: ITicket[];
  title = 'Ticket list';

  constructor(
    private clickTravelService: ClickTravelService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.destination = params['to'];

      this.clickTravelService.getTickets(this.destination).subscribe(
        (data) => {
          this.tickets = data;
          console.log(this.tickets);
        },
        (err) => {
          console.error(err);
        }
      );
    });
  }
}
