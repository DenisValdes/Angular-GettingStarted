import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IProduct } from './products';

@Injectable({
    providedIn: 'root'
})
export class ProductsService{
  private productUrl: string = 'api/products/products.json';
  constructor(private http: HttpClient){}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handlingError)
    );
  }

  private handlingError(err: HttpErrorResponse){
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error occured: ${err.error.message}`;
    }
    else{
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    alert(errorMessage);
    return throwError(errorMessage);
  }
}