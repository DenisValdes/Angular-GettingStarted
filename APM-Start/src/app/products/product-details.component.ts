import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './products';
import { ProductsService } from './products.service';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private productService: ProductsService) { }

  pageTitle: string = 'Product Details';
  errorMessage: string;
  products: IProduct[];
  
  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products.filter((product: IProduct) =>
        product.productId === id);
        console.log(this.products)
      },
      error: err => this.errorMessage = err
    });
  }
  
  onBack(): void{
    this.router.navigate(['/products']);
  }
}
