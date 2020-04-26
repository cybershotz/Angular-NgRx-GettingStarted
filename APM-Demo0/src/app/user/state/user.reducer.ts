import { UserActions, UserActionTypes } from './user.actions'
import { User } from '../user'


export interface UserState {
    maskUserName: boolean,
    currentUser: User
}

const inititalState: UserState = {
    maskUserName: true,
    currentUser: null
}

export function reducer(state = inititalState, action: UserActions): UserState {
    switch (action.type) {
        case UserActionTypes.MaskUserName:
            return {
                ...state,
                maskUserName: action.payload
            }

        default:
            return state
    }
}