import { Component, OnInit } from '@angular/core';
import {CarPart} from './car-part';
import {CARPARTS} from './mocks';
import {CarpartsDataService} from './carparts-data.service';

@Component({
  selector: 'app-carparts',
  templateUrl: './carparts.component.html',
  styleUrls: ['./carparts.component.css']
})
export class CarpartsComponent implements OnInit {

  carParts: CarPart[];

  constructor(private carpartsDataService: CarpartsDataService) {
    console.log('log constructor');
  }

  ngOnInit() {
    console.log('log ngOnInit');
//    this.carParts = CARPARTS;

    this.carpartsDataService.getCarParts()
      .subscribe(response => this.carParts = response['data']) ;

  }

  totalCarParts() {
    if ( Array.isArray(this.carParts)) {
      return this.carParts.reduce((prev, curr) => prev + curr.inStock, 0);
    }
  }

  upQuantity(carPart) {
    carPart.quantity ++;
  }

  downQuantity(carPart) {
    carPart.quantity --;
  }

  keyupQuantity(carPart, event) {
    carPart.quantity = event.target.value;
  }
}
