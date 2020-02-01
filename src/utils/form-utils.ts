import {WrappedFieldMetaProps} from "redux-form";

const mapErrorsFromMeta = (meta: WrappedFieldMetaProps) => {
    return meta.touched && meta.error ? meta.error : undefined;
};

export {
    mapErrorsFromMeta
}