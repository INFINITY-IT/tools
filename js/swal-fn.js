import {trans} from './app-trans.js'
import swal from 'sweetalert'
import {isObject} from './object-fn.js'

export const
    /**
     * @param {object} options
     * @param {string} options.text - The text of the alert
     * @param {string} options.title - The title of the alert
     * @param {string} options.icon - The icon of the alert
     * @param {string} options.confirmText - The text of the confirm button
     * @param {string} options.cancelText - The text of the cancel button
     * @param {boolean} options.dangerMode - Whether the alert should be red
     */
    swalAskYesNo = (options = {}) => {
        options = isObject(options) ? options : {}
        let
            text = options.text || '',
            title = options.title || '',
            icon = options.icon || 'warning',
            confirmButtonText = options.confirmText || trans('Oui'),
            cancelButtonText = options.cancelText || trans('Non'),
            dangerMode = options.dangerMode || false
        return new Promise((resolve, reject) => {
            swal({
                title: title,
                text: text,
                icon: icon,
                buttons: [cancelButtonText, confirmButtonText],
                dangerMode: dangerMode,
            }).then(confirm => confirm ? resolve() : reject())
        })
    },
    swalInfo = (options = {}) => {
        options = isObject(options) ? options : {}
        let
            text = options.text || '',
            title = options.title || '',
            icon = options.icon || 'info',
            confirmButtonText = options.confirmText || trans('OK'),
            dangerMode = options.dangerMode || false
        return swal({
            title: title,
            text: text,
            icon: icon,
            button: confirmButtonText,
            dangerMode: dangerMode,
        })
    },
    swalSuccess = (options = {}) => {
        options = isObject(options) ? options : {}
        return swalInfo({icon: 'success', ...options})
    },
    swalError = (options = {}) => {
        options = isObject(options) ? options : {}
        return swalInfo({icon: 'error', dangerMode: true, ...options})
    }
