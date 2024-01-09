import { Component, Input } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input() productListComp:ProductListComponent
  product:product

  ngOnInit(){
    this.product=this.productListComp.selectedProduct
  }
}
