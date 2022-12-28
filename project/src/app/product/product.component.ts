import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  nike;
  vans;
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
	  this.nike = this.dataService. shoes_vans;
    this.vans = this.dataService. shoes_nike;
  }
}
