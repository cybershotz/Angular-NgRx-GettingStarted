import { Product } from '../product'
import { ProductActionTypes, ProductActions } from './product.actions'

export interface ProductState {
    showProductCode: boolean,
    currentProductId: number | null,
    products: Product[];
    error: String;
}

const initialState: ProductState = {
    showProductCode: true,
    currentProductId: null,
    products: [],
    error: ''
}

export function reducer(state = initialState, action: ProductActions): ProductState {
    switch (action.type) {
        case ProductActionTypes.ToggleProductCode:
            return {
                ...state,
                showProductCode: action.payload
            }
        case ProductActionTypes.SetCurrentProduct:
            return {
                ...state,
                currentProductId: action.payload.id
            }
        case ProductActionTypes.ClearCurrentProduct:
            return {
                ...state,
                currentProductId: null
            }
        case ProductActionTypes.InitializeCurrentProduct:
            return {
                ...state,
                currentProductId: 0
            }

        case ProductActionTypes.LoadSuccess:
            return {
                ...state,
                products: action.payload,
                error: ''
            }

        case ProductActionTypes.LoadFail:
            return {
                ...state,
                products: [],
                error: action.payload
            }

        case ProductActionTypes.UpdateProductSuccess:
            const updatedProducts = state.products.map(p => p.id === action.payload.id ? action.payload : p)

            return {
                ...state,
                products: updatedProducts,
                currentProductId: action.payload.id,
                error: ''
            }

        case ProductActionTypes.UpdateProductFail:
            return {
                ...state,
                error: action.payload
            }

        case ProductActionTypes.AddProductSuccess:
            return {
                ...state,
                products: [...state.products, action.payload],
                currentProductId: action.payload.id,
                error: ''
            }

        case ProductActionTypes.AddProductFail:
            return {
                ...state,
                error: action.payload
            }

        case ProductActionTypes.DeleteProductSuccess:
            const filteredProducts = state.products.filter(p => p.id != action.payload); 

            return {
                ...state,
                products: filteredProducts,
                currentProductId: null,
                error: ''
            }

        case ProductActionTypes.DeleteProductFail:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}