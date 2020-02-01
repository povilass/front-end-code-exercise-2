import {createAction} from "redux-actions";
import {ModalReducerState} from "./reducer";

export const actionExecutors = {
    openModal: createAction<Pick<ModalReducerState, "title" | "content">>("MODAL_OPEN"),
    close: createAction("MODAL_CLOSE"),
};

export default {
    onOpen: actionExecutors.openModal,
    onClose: actionExecutors.close,
}