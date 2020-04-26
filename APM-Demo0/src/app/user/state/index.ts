import { User } from '../user'
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { UserActions, UserActionTypes } from './user.actions';
import { UserState } from './user.reducer';


const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
    getUserFeatureState,
    state => state.maskUserName
)

export const getCurrent = createSelector(
    getUserFeatureState,
    state => state.currentUser
)
