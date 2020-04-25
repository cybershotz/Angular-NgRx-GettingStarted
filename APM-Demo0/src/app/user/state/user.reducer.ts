import { User } from '../user'
import { createFeatureSelector, createSelector } from '@ngrx/store'

export interface UserState {
    maskUserName: boolean,
    currentUser: User
}

const inititalState: UserState = {
    maskUserName: true,
    currentUser: null
}

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
    getUserFeatureState,
    state => state.maskUserName
)

export const getCurrent = createSelector(
    getUserFeatureState,
    state => state.currentUser
)

export function reducer(state = inititalState, action): UserState {
    switch (action.type) {
        case 'MASK_USER_NAME':
            return {
                ...state,
                maskUserName: action.payload
            }

        default:
            return state
    }
}