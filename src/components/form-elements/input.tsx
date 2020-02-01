import React from 'react';
import FieldContainer from './field-container';

export interface InputPropsCallbacks {
    onKeyDown?: (event: any) => void;
    onBlur?: (event: any) => void;
    onFocus?: (event: any) => void;
    onChange?: (event: any) => void;
}

export interface InputProps {
    type?: string;
    value?: string | number;
    id?: string;
    name: string;
    label?: string;
    error?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
}

class Input extends React.Component<InputProps & InputPropsCallbacks> {

    render() {
        const {
            type,
            value,
            name,
            label,
            id,
            onKeyDown,
            onBlur,
            disabled,
            error,
            required,
            placeholder,
            onFocus,
            onChange
        } = this.props;

        return (
            <FieldContainer
                id={id}
                label={label}
                error={error}
                disabled={disabled}
                required={required}
                hidden={type === 'hidden'}
                value={value}
                placeholder={placeholder}
            >
                <input
                    type={type}
                    value={value}
                    id={id}
                    className={`form-input`}
                    name={name}
                    required={required}
                    disabled={disabled}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    onBlur={onBlur}
                    aria-required={required}
                    placeholder={placeholder}
                    title={name}
                    onFocus={onFocus}
                />
            </FieldContainer>
        );
    }
}

export default Input;
