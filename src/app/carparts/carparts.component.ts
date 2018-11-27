import { Component, OnInit } from '@angular/core';
import {CarPart} from './car-part';
import {CARPARTS} from './mocks';

@Component({
  selector: 'app-carparts',
  templateUrl: './carparts.component.html',
  styleUrls: ['./carparts.component.css']
})
export class CarpartsComponent implements OnInit {

  carParts: CarPart[];

  totalCarParts() {
    return this.carParts.reduce((prev, curr) => prev + curr.inStock, 0);
  }

  constructor() { }

  ngOnInit() {
    this.carParts = CARPARTS;
  }

}