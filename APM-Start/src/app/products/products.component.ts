import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductsService } from './products.service';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  providers: [ProductsService ]
})
export class ProductsComponent implements OnInit{
  
  constructor(private productsService: ProductsService){
    this.filteredProducts = this.products;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = message;
  }

  pageTitle: string = 'Products list';
  showImage:boolean = false;
  
  toggleImage():void {
    this.showImage = !this.showImage;
  }
  
  products: IProduct[] = [];
  
  filteredProducts: IProduct[];

  // Filter products
  _listFilter: string;

  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  get listFilter(): string {
    return this._listFilter;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  
  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.filteredProducts = this.productsService.getProducts();
  }
}
