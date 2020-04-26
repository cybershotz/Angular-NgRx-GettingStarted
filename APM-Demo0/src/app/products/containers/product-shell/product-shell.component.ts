import { Component, OnInit } from '@angular/core';

import { Product } from '../../product';
import { ProductService } from '../../product.service';
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../../state/product.reducer';
import * as productActions from '../../state/product.actions';
import { takeWhile } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit {
  selectedProduct$: Observable<Product>;
  products$: Observable<Product[]>;
  errorMessage$: Observable<String>;
  displayCode$: Observable<boolean>;

  constructor(private store: Store<fromProduct.State>) { }

  ngOnInit(): void {
    this.store.dispatch(new productActions.Load())
    this.selectedProduct$ = this.store.pipe(select(fromProduct.getCurrentProduct));
    this.displayCode$ = this.store.pipe(select(fromProduct.getShowProductCode));
    this.products$ = this.store.pipe(select(fromProduct.getProducts));
    this.errorMessage$ = this.store.pipe(select(fromProduct.getError));
  } 

  checkChanged(value: boolean): void {
    this.store.dispatch(new productActions.ToggleProductCode(value))
  }

  newProduct(): void {
    this.store.dispatch(new productActions.InitializeCurrentProduct())
  }

  productSelected(product: Product): void {
    this.store.dispatch(new productActions.SetCurrentProduct(product))
  }

}
