import { Action } from '@ngrx/store';
import { Product } from '../product';

export enum ProductActionTypes {
    ToggleProductCode = '[Product] Toggle Product Code',
    SetCurrentProduct = '[Product] Set Current Product',
    ClearCurrentProduct = '[Product] Clear Current Product',
    InitializeCurrentProduct = '[Product] Initialize Current Product',
    Load = '[Product] Load',
    LoadSuccess = '[Product] Load Success',
    LoadFail = '[Product] Load Fail',
    UpdateProduct = '[Product] Update Product',
    UpdateProductSuccess = '[Product] Update Product Success',
    UpdateProductFail = '[Product] Update Product Fail',
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

// Build Action Creator
export class Load implements Action {
    readonly type = ProductActionTypes.Load;
}

// Build Action Creator
export class LoadSuccess implements Action {
    readonly type = ProductActionTypes.LoadSuccess;

    constructor(public payload: Product[]) { }
}

// Build Action Creator
export class LoadFail implements Action {
    readonly type = ProductActionTypes.LoadFail;

    constructor(public payload: string) { }
}

// Build Action Creator
export class UpdateProduct implements Action {
    readonly type = ProductActionTypes.UpdateProduct;

    constructor(public payload: Product) { }
}

// Build Action Creator
export class UpdateProductSuccess implements Action {
    readonly type = ProductActionTypes.UpdateProductSuccess;

    constructor(public payload: Product) { }
}

// Build Action Creator
export class UpdateProductFail implements Action {
    readonly type = ProductActionTypes.UpdateProductFail;

    constructor(public payload: string) { }
}

export type ProductActions = ToggleProductCode
    | SetCurrentProduct
    | ClearCurrentProduct
    | InitializeCurrentProduct
    | Load
    | LoadSuccess
    | LoadFail
    | UpdateProduct
    | UpdateProductSuccess
    | UpdateProductFail