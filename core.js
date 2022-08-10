export class Types {
    static String = 'string'
    static Number = 'number'
    static Int = 'int'
    static Boolean = 'boolean'
    static BigInt = 'bigint'
    static Float = 'float'
    static Object = 'object'
    static Symbol = 'symbol'
    static Func = 'function'
    static Undefined = 'undefined'
    static NaN = 'NaN'
    static Empty = 'null'

    static Array = 'array'
    static EmptyArray = 'emptyArray'
    static ArrayOfString = 'arrayOfString'
    static ArrayOfNumber = 'arrayOfNumber'
    static ArrayOfFloat = 'arrayOfFloat'
    static ArrayOfInt = 'arrayOfInt'
    static ArrayOfBigInt = 'arrayOfBigInt'
    static ArrayOfBoolean = 'arrayOfBoolean'
    static ArrayOfSymbol = 'arrayOfSymbol'
    static ArrayOfFunc = 'arrayOfFunc'
    static ArrayOfObject = 'arrayOfObject'
    static ArrayOfNaN = 'arrayOfNaN'
    static ArrayOfUndefined = 'arrayOfUndefined'
    static ArrayOfEmpty = 'arrayOfEmpty'
    static ArrayOfArray = 'arrayOfArray'

    static isString = value => typeof value === Types.String
    static isNumber = value => typeof value === Types.Number
    static isInt = value => Types.isNumber(value) ? Math.floor(value) === value : false
    static isBoolean = value => typeof value === Types.Boolean
    static isBigInt = value => typeof value === Types.BigInt
    static isFloat = value => Types.isNumber(value) ? value % 1 !== 0 : false
    static isObject = value => typeof value === Types.Object
    static isSymbol = value => typeof value === Types.Symbol
    static isFunc = value => typeof value === Types.Func
    static isUndefined = value => typeof value === Types.Undefined
    static isNaN = value => Types.isNumber(value) && String(value) === 'NaN'
    static isEmpty = value => value === null

    static isArray = value => value instanceof Array
    static isEmptyArray = value => Types.isArray(value) ? value.length === 0 : false
    static isArrayOfString = value => Types.isArray(value) ? value.every(a => Types.isString(a)) : false
    static isArrayOfNumber = value => Types.isArray(value) ? value.every(a => Types.isNumber(a)) : false
    static isArrayOfFloat = value => Types.isArray(value) ? value.every(a => Types.isFloat(a)) : false
    static isArrayOfInt = value => Types.isArray(value) ? value.every(a => Types.isInt(a)) : false
    static isArrayOfBigInt = value => Types.isArray(value) ? value.every(a => Types.isBigInt(a)) : false
    static isArrayOfBoolean = value => Types.isArray(value) ? value.every(a => Types.isBoolean(a)) : false
    static isArrayOfObject = value => Types.isArray(value) ? value.every(a => Types.isObject(a)) : false
    static isArrayOfSymbol = value => Types.isArray(value) ? value.every(a => Types.isSymbol(a)) : false
    static isArrayOfFunc = value => Types.isArray(value) ? value.every(a => Types.isFunc(a)) : false
    static isArrayOfUndefined = value => Types.isArray(value) ? value.every(a => Types.isUndefined(a)) : false
    static isArrayOfNaN = value => Types.isArray(value) ? value.every(a => Types.isNaN(a)) : false
    static isArrayOfEmpty = value => Types.isArray(value) ? value.every(a => Types.isEmpty(a)) : false
    static isArrayOfArray = value => Types.isArray(value) ? value.every(a => Types.isArray(a)) : false

    static typeMap = {
        [Types.String]: Types.isString,
        [Types.Number]: Types.isNumber,
        [Types.Int]: Types.isInt,
        [Types.BigInt]: Types.isBigInt,
        [Types.Float]: Types.isFloat,
        [Types.Boolean]: Types.isBoolean,
        [Types.Symbol]: Types.isSymbol,
        [Types.Object]: Types.isObject,
        [Types.Func]: Types.isFunc,
        [Types.Undefined]: Types.isUndefined,
        [Types.NaN]: Types.isNaN,
        [Types.Empty]: Types.isEmpty,
        [Types.Array]: Types.isArray,
        [Types.EmptyArray]: Types.isEmptyArray,
        [Types.ArrayOfString]: Types.isArrayOfString,
        [Types.ArrayOfNumber]:  Types.isArrayOfNumber,
        [Types.ArrayOfFloat]: Types.isArrayOfFloat,
        [Types.ArrayOfInt]: Types.isArrayOfInt,
        [Types.ArrayOfBigInt]:  Types.isArrayOfBigInt,
        [Types.ArrayOfBoolean]: Types.isArrayOfBoolean,
        [Types.ArrayOfSymbol]:  Types.isArrayOfSymbol,
        [Types.ArrayOfFunc]:  Types.isArrayOfFunc,
        [Types.ArrayOfObject]:  Types.isArrayOfObject,
        [Types.ArrayOfNaN]: Types.isArrayOfNaN,
        [Types.ArrayOfUndefined]: Types.isArrayOfUndefined,
        [Types.ArrayOfEmpty]: Types.isArrayOfEmpty,
        [Types.ArrayOfArray]: Types.isArrayOfArray,
    }

    static new = (type, value) => {

    }

    static is = value => {

    }
}
