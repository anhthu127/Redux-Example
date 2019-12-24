const DEFAULT_STATE = {
    listP: null
}

export default (state = DEFAULT_STATE, action) => {

    switch (action.type) {
        case 'get_list_product_request':
            return {
                ...state,
            }
        case 'get_listP_success':
            console.log("hi" + action.payload);
            return {
                ...state,
                listP: action.payload
            }
        case 'get_listP_failure':
            return {
                ...state,
                listP: action.payload.error.message
            }

            case "search_product_request":
            return {
                ...state,
                
            }
            case "search_product_success":
            return {
                ...state,
                listP: action.payload
            }
            case 'search_listP_failure':
            return {
                ...state,
                listP: action.payload.error.message
            }
        default:
            return state;
    }


}
