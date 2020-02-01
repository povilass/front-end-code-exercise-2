import {applyMiddleware, compose, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk';
import createRootReducer from "../reducers/index";

export default () => {

    const mainMiddleware = compose(
        composeWithDevTools<any, any>(
            applyMiddleware<any>(thunkMiddleware)
        )
    );

    const store = createStore(
        createRootReducer(),
        mainMiddleware
    );

    return { store };
}