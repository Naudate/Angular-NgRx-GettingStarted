import { createAction, props } from "@ngrx/store";
import { Product } from "../product";

export const loadProductsSuccess = createAction(
  '[Product Api] Load Success',
  props<{ products: Product[]}>()
);

export const loadProductsFailure = createAction(
  '[Product Api] Load Fail',
  props<{ error: string }>()
);

export const updateProductSuccess = createAction(
  '[Product Api] Update Product Success',
  props<{ product: Product }>()
);

export const updateProductFailure = createAction(
  '[Product Api] Update Product Fail',
  props<{ error: string }>()
);

export const createProductSuccess = createAction(
  '[Product Api] Update Product Success',
  props<{ product: Product }>()
);

export const createProductFailure = createAction(
  '[Product Api] Update Product Fail',
  props<{ error: string }>()
);

export const deleteProductSuccess = createAction(
  '[Product Api] Update Product Success',
  props<{ product: Product }>()
);

export const deleteProductFailure = createAction(
  '[Product Api] Update Product Fail',
  props<{ error: string }>()
);
