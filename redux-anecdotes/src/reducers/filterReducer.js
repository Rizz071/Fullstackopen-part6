

const setFilterString = str => {
    return {
        type: 'STRING_FOR_FILTER',
        payload: {
            string: str.toLowerCase()
        }
    }
}



const filterReducer = (state = { string: '' }, action) => {

    switch (action.type) {
        case 'STRING_FOR_FILTER':
            return { string: action.payload.string }

        default:
            return state
    }
}


export { setFilterString, filterReducer }