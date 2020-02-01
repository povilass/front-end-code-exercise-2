
const parseAlphanumericalValue = (value: string = "") => {
   return value.replace(/[^a-z0-9]/gi,'')
};

export {
    parseAlphanumericalValue
}