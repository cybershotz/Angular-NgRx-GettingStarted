import { Action } from '@ngrx/store';
import { Product } from '../product';

export enum ProductActionTypes {
    ToggleProductCode = '[Product] Toggle Product Code',
    SetCurrentProduct = '[Product] Set Current Product',
    ClearCurrentProduct = '[Product] Clear Current Product',
    InitializeCurrentProduct = '[Product] Initialize Current Product',
}

// Build Action Creator
export class ToggleProductCode implements Action {
    readonly type = ProductActionTypes.ToggleProductCode;

    constructor(public payload: boolean) { }
}

// Build Action Creator
export class SetCurrentProduct implements Action {
    readonly type = ProductActionTypes.SetCurrentProduct;

    constructor(public payload: Product) { }
}
// Build Action Creator
export class ClearCurrentProduct implements Action {
    readonly type = ProductActionTypes.ClearCurrentProduct;

    // Typescript automatically provides an empty constructor
}

// Build Action Creator
export class InitializeCurrentProduct implements Action {
    readonly type = ProductActionTypes.InitializeCurrentProduct;
}

export type ProductActions = ToggleProductCode
    | SetCurrentProduct
    | ClearCurrentProduct
    | InitializeCurrentProduct;