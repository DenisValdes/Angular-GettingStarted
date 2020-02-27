import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './products';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              private router: Router) { }

  pageTitle: string = 'Product Details';
  product: IProduct;

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
  }
  
  onBack(): void{
    this.router.navigate(['/products']);
  }
}
