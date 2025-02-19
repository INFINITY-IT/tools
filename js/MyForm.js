import FormError from './FormError.js'
import {fill2Objects, isObject} from './object-fn.js'
import {getRequester} from './requester.js'

/**
 * @version Beta
 * @author MHK
 */
class MyForm {
    excepts = ['originalData', 'errors', 'excepts']

    /**
     * @param {Object} data - Request data.
     * @param {Object} options - Request options.
     * @param {boolean} options.check_success - check if response data has <b>success</b> property and it's true
     */
    constructor(data = {}, options = {}) {
        let defOptions = {
            check_success: true,
            keep_error: false,
        }
        options = isObject(options) ? options : {}
        fill2Objects(options, defOptions)
        /**
         * @author MHK
         * @type {any}
         */
        const originalData = JSON.parse(JSON.stringify(data)),
            requester = getRequester()
        for (let field in data) {
            this[field] = data[field]
        }
        /**
         * @deprecated use {<br>.hasError(...),<br>.ifHasError(...),<br>.AnyError(...),<br>.getError(...),<br>.clearError(...)<br>} instead
         * will be removed in stable version
         */
        this.errors = new FormError
        let my_form = this
        const
            onFail = function (errors) {
                my_form.errors.record(errors)
            },
            submitUpload = function (requestType, url) {
                let data = my_form.dataUpload()
                switch (requestType) {
                    case 'put':
                        data.append('_method', 'PUT')
                        requestType = 'post'
                        break
                }
                return new Promise((resolve, reject) => {
                    requester[requestType](url, data, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                        .then(response => {
                            if (defOptions.check_success) {
                                if (response.data.success) resolve(response.data)
                                else reject(response)
                            } else resolve(response.data)
                        })
                        .catch(error => {
                            onFail(error.response?.data?.errors)
                            if (defOptions.keep_error)
                                reject(error)
                            else
                                reject(error.response?.data)
                        })
                })
            },
            submit = function (requestType, url) {
                let data = my_form.data()
                switch (requestType) {
                    case 'put':
                        data._method = 'PUT'
                        requestType = 'post'
                        break
                }
                return new Promise((resolve, reject) => {
                    requester[requestType](url, data)
                        .then(response => {
                            if (defOptions.check_success) {
                                if (response.data.success) resolve(response.data)
                                else reject(response)
                            } else resolve(response.data)
                        })
                        .catch(error => {
                            onFail(error.response?.data?.errors)
                            if (defOptions.keep_error)
                                reject(error)
                            else
                                reject(error.response?.data)
                        })
                })
            }
        this.data = function () {
            return this.only(Object.keys(originalData))
        }
        this.dataUpload = function () {
            let formData = new FormData
            for (let property in originalData) {
                if (this[property] instanceof FileList) {
                    for (let i = 0; i < this[property].length; i++) {
                        let file = this[property][i]
                        formData.append(`${property}[${i}]`, file)
                    }
                } else if (this[property] instanceof File) {
                    formData.append(property, this[property])
                } else if (Array.isArray(this[property])) {
                    for (let i = 0; i < this[property].length; i++) {
                        let file = this[property][i]
                        formData.append(`${property}[${i}]`, file)
                    }
                } else if (isObject(this[property])) {
                    for (let key in this[property]) {
                        formData.append(`${property}[${key}]`, this[property][key])
                    }
                } else formData.append(property, this[property]);
            }
            return formData
        }
        this.only = function () {
            /**
             * @author MHK
             */
            let obj = {},
                subReg = new RegExp(/^(\w+)\.\w+/, 'i')
            if (!arguments.length) return obj
            let attrs = Array.isArray(arguments[0]) ? arguments[0] : arguments
            for (let attr of attrs) {
                if (subReg.test(attr))
                    attr = attr.match(subReg)[1]
                if (Object.hasOwn(this, attr) && !this.excepts.includes(attr))
                    obj[attr] = this[attr]
            }
            return obj
        }
        this.fillFrom = function (obj, force = false) {
            fill2Objects(obj, this, force)
            return this
        }
        this.reset = function () {
            this.fillFrom(originalData, true)
            this.errors.clear()
        }
        this.post = function (url, upload = false) {
            if (typeof url === 'undefined') throw new Error('url is required')
            return upload ? submitUpload('post', url) : submit('post', url)
        }
        this.put = function (url, upload = false) {
            if (typeof url === 'undefined') throw new Error('url is required')
            return upload ? submitUpload('put', url) : submit('put', url)
        }
        this.clear = function (field = null) {
            this.errors.clear(field)
        }
        this.onSuccess = function () {
            this.reset()
        }
        this.hasError = function (name, $v = null) {
            let form_has_errors = false
            if (Array.isArray(name)) {
                name.forEach(n => form_has_errors ||= this.errors.has(n))
            } else form_has_errors = this.errors.has(name)
            return ($v !== null ? $v.$anyError : false) || form_has_errors
        }
        this.ifHasError = function ($v = null, name, class_name = 'border-danger') {
            let form_has_errors = false
            if (Array.isArray(name)) {
                name.forEach(n => form_has_errors ||= this.errors.has(n))
            } else form_has_errors = this.errors.has(name)
            return (($v !== null ? $v.$anyError : false) || form_has_errors) ? class_name : ''
        }
        this.clearError = function (input, cb = null) {
            this.errors.clear(input)
            if (typeof cb === 'function') cb()
        }
        this.clearErrors = function (...attrs) {
            attrs.forEach(attr => this.clearError(attr))
        }
        this.AnyError = function (...attrs) {
            return this.hasError(attrs)
        }
        this.getError = function (name) {
            return this.errors.get(name)
        }
        this.getAnyError = function (...attrs) {
            if (this.hasError(attrs))
                for (let attr of attrs) {
                    if (this.hasError(attr))
                        return this.getError(attr)
                }
            return null
        }
    }
}

export default MyForm
