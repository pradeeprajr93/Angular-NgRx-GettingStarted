import { createReducer, on, createAction, createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from './../../state/app.state';

export interface UserState {
    maskUserName: boolean;
}

export interface State extends AppState.State {
    user: UserState;
}

const userFeatureSelector = createFeatureSelector<UserState>("user");

export const getMaskUserName = createSelector(
    userFeatureSelector,
    state => state.maskUserName
);

export const userReducer = createReducer<UserState>(
    {
        maskUserName: false
    }, 
    on(createAction('[User] Toggle mask user name'), 
    state => ({...state, maskUserName: !state.maskUserName}))
);