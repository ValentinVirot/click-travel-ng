import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ITicket } from 'src/app/interfaces/ITicket';

@Component({
  selector: 'app-ticket-display',
  templateUrl: './ticket-display.component.html',
  styleUrls: ['./ticket-display.component.scss'],
})
export class TicketDisplayComponent implements OnInit {
  ticket: ITicket;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.ticket = <ITicket>data;
      console.log(this.ticket);
    });
  }
}
