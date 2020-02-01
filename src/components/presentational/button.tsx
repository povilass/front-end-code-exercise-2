import React, {MouseEvent, PropsWithChildren, RefObject} from 'react';
import Spinner from "./spinner";

interface ButtonProps {
    type?: "button" | "submit" | "reset";
    id?: string;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    active?: boolean;
    small?: boolean;
    big?: boolean;
    tabIndex?: number;
    onClick?: (event: MouseEvent) => void;
    outerRef?: RefObject<any>;
}

const Button = ({
                    type,
                    onClick,
                    disabled,
                    loading,
                    children,
                    big,
                    small,
                    className,
                    tabIndex,
                    id,
                    outerRef,
                    active,
                }: PropsWithChildren<ButtonProps>) => {
    const disabledClass = disabled ? ' is-disabled' : '';
    const sizeClass = (big ? ' is-big' : '') || (small ? ' is-small' : '');
    const activeClass = active ? 'is-active' : '';
    const modifierClasses = disabledClass + sizeClass + activeClass;

    return (
        <button
            ref={outerRef}
            type={type}
            disabled={disabled || loading}
            className={`button ${className + modifierClasses}`}
            id={id}
            onClick={onClick}
            tabIndex={tabIndex}
        >

            {loading && (
                <Spinner small/>
            )}

            {!loading && children}
        </button>
    );
};
export default Button;
