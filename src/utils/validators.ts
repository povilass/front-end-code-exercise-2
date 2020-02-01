const int = (str: any) => parseInt(str, 10);

const empty = (value: any) => (!value || !value.length);

const isMaxLength = (value: any, length: number) => !((length < 0) || empty(value) || value.length <= length);
const isMinLength = (value: any, length: number) => !(empty(value) || value.length >= length);

const required = (message = 'Required') => (value: any) => {
    if (!value || value.length === 0) {
        return message;
    }

    return undefined;
};

const requiredField = (value: string) => required()(value);

const minLength = (message = 'Minimal length ') => (min: number) => (value: any) => {
    const intLength = int(min) || 0;
    if (isMinLength(value, intLength)) {
        return message + intLength;
    }

    return undefined;
};

const minLengthField = (min: number) => (value: string) => minLength()(min)(value);

const maxLength = (message = 'Maximum length ') => (max: number) => (value: any) => {
    let intLength = int(max);
    intLength = isNaN(intLength) ? -1 : intLength;

    if (isMaxLength(value, intLength)) {
        return message + intLength;
    }

    return undefined;
};

const maxLengthField = (max: number) => (value: string) => maxLength()(max)(value);

export {
    requiredField,
    minLengthField,
    maxLengthField
}