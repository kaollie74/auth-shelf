import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* getItems(action) {
    try {
        const response = yield axios.get('/api/shelf');
        console.log('in getItemsSaga, response is:', response.data)
        yield put({type: 'SET_ITEMS', payload: response.data })
    } catch (error) {
        console.log('Error with getting items:', error);
    }
}

function* postItem(action) {
    try {
        yield axios.post('/api/shelf', action.payload);
        yield put ({type: 'GET_ITEMS'});
    } catch (error) {
        console.log('Error with posting items:', error);
    }
}

function* deleteItem(action) {
    try {
        yield axios.delete(`/api/shelf/${action.payload.id}`);
        yield put({ type: 'GET_ITEMS' });
    } catch (error) {
        console.log('Error with deleting items:', error);
    }
}

function* getItemsSaga() {
    yield takeEvery('GET_ITEMS', getItems);
    yield takeEvery('ADD_ITEM', postItem);
    yield takeEvery('DELETE_ITEM', deleteItem);
}

export default getItemsSaga;
