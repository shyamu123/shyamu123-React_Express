import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../Type";
import { takeEvery, put } from 'redux-saga/effects';
import Topratedd from '../../Homepege/Section3/Topratedd.json'

function* getProduct(){
    yield put({type: SET_PRODUCT_LIST, Topratedd})
}

function* productSaga(){
    yield takeEvery(PRODUCT_LIST, getProduct)
}

export default productSaga