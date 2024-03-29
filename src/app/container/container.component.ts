import { Component,ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class containerComponent {
  itemsInCart:number = 0
  name:string = 'mithlaj mattathodi'
  product= {
    name : 'iphone 13',
    price : 789,
    color : "red",
    discount: 8.5,
    inStock:22,
    pImage:'https://www.cnet.com/a/img/resize/aa6701977dfc0cc39bb89d3885105b84658ac3aa/hub/2023/10/04/449da917-ee79-46a2-8fba-928978f4b096/iphone-15-29.jpg?auto=webp&fit=crop&height=675&width=1200'
  }

  getDiscountedPrice(){
    return this.product.price - (this.product.price*this.product.discount/100)
  }

  onInput(event:any){
    this.name =  event.target.value
    // console.log(event);
  }

  incrementValueCart(){
    if(this.itemsInCart<this.product.inStock)
    this.itemsInCart++
  } 
   decrementValueCart(){
    if(this.itemsInCart>0)
    this.itemsInCart--
  }

  searchText:string=''

  @ViewChild('ProductListComponent') productListComponent:ProductListComponent

  setSearchText(value:any){
    this.searchText=value
  }
}

