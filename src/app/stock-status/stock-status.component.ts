import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-stock-status',
  templateUrl: './stock-status.component.html',
  styleUrls: ['./stock-status.component.css']
})
export class StockStatusComponent {
  @Input() stock: number;
  @Input() productId: number;
  @Output() stockValueChange = new EventEmitter();
  color = '';
  updatstockvalue: number;

  stockValueChanged() {
    this.stockValueChange.emit(
      { id: this.productId, updatstockvalue: this.updatstockvalue });
    this.updatstockvalue = null;

  }
  ngOnChanges() {
    if (this.stock > 10) {
      this.color = 'green';
    } else {
      this.color = 'red';
    }


  }


}
