import {isObject} from './object-fn.js'

class FormError {
    constructor() {
        const resetErrors = () => {
            this.errors = {}
        }
        resetErrors()

        /**
         * @author MHK
         * @param field
         * @returns String[]
         */
        this.getMessages = function (field) {
            if (isObject(this.errors) && this.has(field)) {
                return this.errors[field]
            }
            return []
        }

        this.has = function (field) {
            return isObject(this.errors) && this.errors.hasOwnProperty(field)
        }

        this.any = function () {
            return isObject(this.errors) && !!Object.keys(this.errors).length
        }

        this.get = function (field) {
            if (this.has(field)) {
                return this.errors[field][0]
            }
        }

        this.record = function (errors) {
            this.errors = isObject(errors) ? errors : {}
        }

        this.clear = function (field = null) {
            if (field) {
                if (this.has(field)) delete this.errors[field]
                return
            }
            resetErrors()
        }
    }
}

export default FormError
