import React, {PropsWithChildren, RefObject} from 'react';

interface FieldContainerProps {
    label?: string;
    id?: string;
    disabled?: boolean;
    hidden?: boolean;
    error?: string;
    value?: string | number;
    className?: string;
    placeholder?: string;
    required?: boolean;
    outerRef?: RefObject<any>;
}

const FieldContainer = ({
                            children,
                            label,
                            id,
                            disabled,
                            hidden,
                            error,
                            value,
                            className,
                            required,
                            placeholder,
                            outerRef,
                        }: PropsWithChildren<FieldContainerProps>) => {
    const errorClass = error ? ' has-error' : '';
    const disabledClass = disabled ? ' is-disabled' : '';
    const hiddenClass = hidden ? ' is-hidden' : '';
    const modifierClasses = disabledClass + hiddenClass + errorClass;
    const labelHasValue = value || !!placeholder;

    return (
        <div ref={outerRef} className={`field-container${modifierClasses} ${className}`}>
            <div className={`field-container__field ${errorClass + disabledClass}`}
            >
                {children}
                {!!label && (
                    <label
                        className={`field-container__label ${labelHasValue ? 'has-value' : ''} ${disabled ? 'is-disabled' : ''}`}
                        htmlFor={id}
                        title={label}
                    >
                        <span className="field-container__label-text">{label}</span>
                        {required && (<span className="field-container__label-required">*</span>)}
                    </label>
                )}
            </div>

            {!!error && (
                <div className="field-container__error">
                    {error}
                </div>
            )}
        </div>
    );
};
export default FieldContainer;
