import { put, takeEvery } from 'redux-saga/effects'
import getListProducts from "../FetchAPI/getData"
import editData from "../FetchAPI/editData"
import deleteData from "../FetchAPI/deleteData"
import addData from "../FetchAPI/addData"
import searchListData from "../FetchAPI/searchData"
function* getListProduct() {
    try {
        const listProducts = yield getListProducts();
        console.log("[Get players]:", listProducts);
        yield put({
            type: 'get_listP_success',
            payload: listProducts
        })
    } catch (error) {
        yield put({
            type: 'get_listP_failure',
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function  * searchProduct(action){
        try{
            const response = yield searchListData(action.payload)
            console.log("res"+JSON.stringify(response))
            yield put ({
                type: "search_product_success",
                payload: response
            })
        }
        catch (error){

            yield put({
                type: 'search_product_failure',
                payload: {
                    errorMessage: error.message
                }})
        }
}
// function thiếu * thì không chạy được, đây chỉ là cách khai báo thôi hihi ^-^
function* editAProduct(action) {
    try {
        // console.log("REQUEST:", action.payload)
        const response = yield editData(action.payload)

        yield put({
            type: 'edit_product_success',
            payload: response
        })

        yield put({
            type: 'get_list_product_request'
        })
    } catch (error) {
        yield put({
            type: 'edit_product_failure',
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* deleteAProduct(action) {

    try {
        console.log("hehe" + action.payload);

        const response = yield deleteData(action.payload)
        yield put({
            type: 'delete_product_success',
            payload: response
        })
            yield put({
                type: 'get_list_product_request',

            })
    }
    catch (e) {
        yield put({
            type: 'delete_product_failure',
            payload: {
                errorMessage: e.message
            }
        })
    }}

    function* addAProduct(action) {

        try {
            console.log("something in saga " +JSON.stringify( action.payload));
    
            const response = yield addData(action.payload)
            yield put({
                type: 'add_product_success',
                payload: response
            })
            yield put({
                    type: 'get_list_product_request',
    
                })
        }
        catch (e) {
            yield put({
                type: 'add_product_failure',
                payload: {
                    errorMessage: e.message
                }
            })
        }
    

}

export const ProductSaga = [
    takeEvery('get_list_product_request', getListProduct),
    takeEvery('edit_product_request', editAProduct),
    takeEvery('del_product_request', deleteAProduct),
    takeEvery('add_product_request', addAProduct),
    takeEvery('search_product_request', searchProduct)
];