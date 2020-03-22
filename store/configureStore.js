import { createStore, combineReducers } from 'redux';
import countReducer from '../reducers/countReducer';
const rootReducer = combineReducers(
    { count: countReducer }
);
const configureStore = () => {
    return createStore(
        rootReducer,
        window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_(),
    );
}
export default configureStore;