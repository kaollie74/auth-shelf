import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* getItems(action) {
    try {
        const response = yield axios.get('/api/shelf');
        yield put({type: 'SET_ITEMS', payload: response.data })
    } catch (error) {
        console.log('Error with getting items:', error);
    }
}

function* getItemsSaga() {
    yield takeEvery('GET_ITEMS', getItems);
}

export default getItemsSaga;
