import * as React from "react";
import {PropsWithChildren} from "react";

interface Props {
    isOpened?: boolean;
    onOverlayClick?: () => void;
}

class Modal extends React.Component<PropsWithChildren<Props>> {

    static defaultProps = {
        isOpened: false,
        onOverlayClick: (): void => null
    };

    render() {
        const {onOverlayClick, children, isOpened} = this.props;
        return (
            <div className={`modal ${isOpened ? 'is-opened' : ''}`}>
                <div role="button" className={`modal__overlay`} onClick={() => onOverlayClick()}/>
                <div className="modal-container">
                    {children}
                </div>
            </div>
        );
    }
}

export default Modal;