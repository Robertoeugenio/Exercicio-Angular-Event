import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter } from '@angular/common/src/facade/async';

@Component({
  selector: 'app-stock-status',
  templateUrl: './stock-status.component.html',
  styleUrls: ['./stock-status.component.css']
})
export class StockStatusComponent {
  @Input() stock: number;
  @Input() productId: number;
  @Input() stockValueChange = new EventEmitter();
  color = '';
  updatestockvalue: number;

  stockValueChanged() {
    this.stockValueChange.emit(
      { id: this.productId, updatestockvalue: this.updatestockvalue });
    this.updatestockvalue = null;

  }
  ngOnChanges() {
    if (this.stock > 10) {
      this.color = 'green';
    } else {
      this.color = 'red';
    }


  }


}
