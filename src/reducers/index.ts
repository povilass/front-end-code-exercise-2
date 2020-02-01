import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'
import {reducer as modalReducer} from '../layout/modal/redux/reducer'

export default () => combineReducers({
    form: formReducer,
    modal: modalReducer
})