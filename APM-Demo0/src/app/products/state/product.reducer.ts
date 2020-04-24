export function reducer(state, action) {
    console.log('existing state', JSON.stringify(state))
    console.log('payload', action.payload)
    switch (action.type) {
        case 'TOGGLE_PRODUCT_CODE':
            return {
                ...state,
                showProductCode: action.payload
            }

        default:
            return state
    }
}