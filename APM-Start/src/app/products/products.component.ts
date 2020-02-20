import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { isPromise } from '@angular/compiler/src/util';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit{
  constructor(){
    this.filteredProducts = this.products;
  }

  pageTitle: string = 'Products list';
  showImage:boolean = false;
  
  toggleImage():void {
    this.showImage = !this.showImage;
  }
  
  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2020",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2020",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    }
  ];
  
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
    console.log('In OnInit')
  }
}
