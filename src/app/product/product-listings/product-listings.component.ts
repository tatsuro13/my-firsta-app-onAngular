import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any;

  constructor(private productservice: ProductService) {}

  ngOnInit(): void {
    // this.products = this.productservice.getProducts();

    const productObservable = this.productservice.getProducts();
    productObservable.subscribe(
      (data) => {
        this.products = data;
        //console.log('got value ' + data);
      },
      (err) => {
        console.error('something wrong occurred: ' + err);
      }
    );
  }
}
