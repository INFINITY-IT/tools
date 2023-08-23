/**
 * @see https://vuelidate.js.org/#sub-builtin-validators
 */
import {helpers} from 'vuelidate/lib/validators'

export const
    boolean = value => !helpers.req(value) || helpers.regex(`${value}`, /^(true|false)$/i),
    requiredIfFalse = param => (value, parentVm) => helpers.ref(param, null, parentVm) === false ? helpers.req(value) : true,
    requiredIfTrue = param => (value, parentVm) => helpers.ref(param, null, parentVm) === true ? helpers.req(value) : true,
    when = (param, param_val) => (value, parentVm) => (helpers.ref(param, null, parentVm) === param_val) ? helpers.req(value) : true,
    callback = callback => typeof callback == 'function' ? callback() : false,
    greaterThan = min => (value) => !helpers.req(value) || value > min,
    isTrue = value => value === true,
    isNotTrue = value => value !== true,
    isFalse = value => value === false,
    isNotFalse = value => value !== false,
    isNull = value => value === null
