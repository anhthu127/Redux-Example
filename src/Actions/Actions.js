
export function getListProduct() {
    return ({
        type: "get_list_product_request",

    })
}
export function editProduct(payload) {
    return ({
        type: "edit_product_request",
        payload
    })}

export function deleteProduct(payload){
    return ({
        type: "del_product_request",
        payload
    })
}
export function addProduct(something){
    console.log("something in action " +JSON.stringify(something ));
    return({
        type: "add_product_request",
        payload: something
    })
}
export function searchProduct( text){
    return({
        type: "search_product_request",
        payload: text
    })
}

