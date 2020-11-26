import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TicketDisplayComponent } from './tickets/display/ticket-display.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {
    path: 'tickets/:to',
    component: TicketsComponent,
    children: [{ path: 'display', component: TicketDisplayComponent }],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
