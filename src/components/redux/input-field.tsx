import Input, {InputProps} from "../form-elements/input";
import * as React from "react";
import {FunctionComponent} from "react";
import {Field, BaseFieldProps, WrappedFieldProps} from "redux-form";
import {mapErrorsFromMeta} from "../../utils/form-utils";

type InputFieldProps = BaseFieldProps<any> & InputProps;

class InputFieldWrapper extends React.Component<WrappedFieldProps & InputProps> {

    render() {
        const {input, meta, ...rest} = this.props;
        return (
            <Input
                {...rest}
                value={input.value}
                onBlur={input.onBlur}
                onChange={input.onChange}
                onFocus={input.onFocus}
                error={mapErrorsFromMeta(meta)}
            />
        );
    }
}

const InputField: FunctionComponent<InputFieldProps> = (props: InputFieldProps) =>
    (
        <Field
            component={InputFieldWrapper}
            {...props}
        />
    );

export default InputField;