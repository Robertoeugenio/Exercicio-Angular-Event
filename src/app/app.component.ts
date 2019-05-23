import { Component } from '@angular/core';
import { Driver } from 'selenium-webdriver/ie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products =[]
  title = 'Products0';

  ngOnInit(){
    this.products = this.getProducts();
  }
  getProducts(){
    return[
      {'id': '1', 'title': 'Screw Driver', 'price': 400, 'stock' : 11 },
      {'id': '2', 'title': 'Nut Volt', 'price': 200, 'stock' : 11 },
      {'id': '3', 'title': 'Resistor', 'price': 78, 'stock' : 11 },
      {'id': '4', 'title': 'Tractor', 'price': 20000, 'stock' : 11 },
      {'id': '5', 'title': 'Roller', 'price': 62, 'stock' : 11 },
    ];
  }
}
