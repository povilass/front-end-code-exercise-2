import * as React from "react";
import Modal from "../../components/modals/modal";
import {bindActionCreators, compose, Dispatch} from "redux";
import {ModalReducerState} from "./redux/reducer";
import actions from "./redux/actions";
import {connect} from "react-redux";

type DispatchProps = typeof actions;

interface Props extends ModalReducerState, DispatchProps {
}

const SimpleModal = ({opened, title, content, onClose}: Props) => (
    <Modal isOpened={opened} onOverlayClick={onClose}>
        <div className="simple-modal-content-wrap">
            <div className="simple-modal__title">{title}</div>
            <div className="simple-modal__content">{content}</div>
        </div>
    </Modal>
);

const mapStateToProps = (state: any) => ({...state.modal});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export default compose<any>(
    connect(mapStateToProps, mapDispatchToProps)
)(SimpleModal);