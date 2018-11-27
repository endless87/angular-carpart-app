import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
//  template: `<h1>Angular App root component</h1>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  title = 'carpart-app';
  title = 'Ultra Racing';

  carParts = [
    {
      'id': 1,
      'name': 'Super Tires',
      'description': 'These tires are the very best',
      'price': 4.99,
      'inStock': 5
    },
    {
      'id': 2,
      'name': 'Reinforced Shocks',
      'description': 'Shocks made from kryptonite',
      'price': 9.99,
      'inStock': 4
    },
    {
      'id': 3,
      'name': 'Padded Seats',
      'description': 'Super soft seats for a smooth ride',
      'price': 24.99,
      'inStock': 0
    }
    ];

}
