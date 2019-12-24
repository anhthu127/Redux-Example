import { all } from 'redux-saga/effects'
import { ProductSaga } from './Sagas';

function* rootSaga() {
    yield all([
        ...ProductSaga,
    ]);
}
export default rootSaga;
