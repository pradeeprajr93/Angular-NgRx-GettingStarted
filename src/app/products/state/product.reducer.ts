import { Product } from './../product';
import { createReducer, on, createAction } from '@ngrx/store';

import * as AppState from './../../state/app.state';

export interface ProductState {
    showProductCode: boolean;
    products: Product[];
    selectedProduct: Product;
}

export interface State extends AppState.State {
    products: ProductState
}

export const productReducer = createReducer<ProductState>(
    {
        showProductCode: false,
        products: [],
        selectedProduct: null
    },
    on(createAction('[Product] Toggle Product Code'), (state): ProductState => {
        return {
            ...state,
            showProductCode: !state.showProductCode
        }
    })
)