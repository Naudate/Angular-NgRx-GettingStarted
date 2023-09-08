import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { Store } from '@ngrx/store';
import { State, getCurrentProduct, getError, getProducts, getShowProductCode } from 'src/app/products/';
import { ProductApiActions, ProductPageActions } from '../actions';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit {

  products$: Observable<Product[]>;
  selectedProduct$: Observable<Product>;
  displayCode$: any;
  errorMessage$: Observable<string>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(ProductPageActions.loadProducts());
    this.selectedProduct$ = this.store.select(getCurrentProduct);
    this.errorMessage$ = this.store.select(getError);
    this.products$ = this.store.select(getProducts);
    this.store.dispatch(ProductPageActions.loadProducts());
    this.displayCode$ = this.store.select(getShowProductCode);
  }

  checkChanged(): void {
    this.store.dispatch(ProductPageActions.toggleProductCode());
  }

  newProduct(): void {
    this.store.dispatch(ProductPageActions.initializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(ProductPageActions.SetCurrentProduct({currentProductId: product.id}));
  }
}
