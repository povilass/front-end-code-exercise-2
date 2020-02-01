import {handleActions} from "redux-actions";
import {actionExecutors} from "./actions";


export interface ModalReducerState {
    opened?: boolean;
    title: string;
    content: string;
}

const initialState: ModalReducerState = {
    opened: false,
    title: '',
    content: '',
};

export const reducer = handleActions<ModalReducerState>({
    [`${actionExecutors.openModal}`]: (state, {payload}) => ({...state, ...payload, opened: true}),
    [`${actionExecutors.close}`]: () => initialState
}, initialState);