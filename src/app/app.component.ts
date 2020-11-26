import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { IDestination } from './interfaces/IDestination';
import { ClickTravelService } from './services/click-travel.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Choose your dream destination...';
  destinations: IDestination[];

  constructor(private clickTravelService: ClickTravelService) {

  }

  ngOnInit() {
    this.clickTravelService.getDestinations().pipe(map(e => e.filter(e => e.isDreamDestination == true))).subscribe(data => {
      this.destinations = data;
      console.log(this.destinations)
    }, err => {
      alert('An error occured while getting dream destinations: ' + err);
      console.error(err);
    });
  }
}
