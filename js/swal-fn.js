import {trans} from './app-trans'
import swal from 'sweetalert'
import {isObject} from './object-fn'

export const
    /**
     * @param {object} options
     * @param {string} options.text - The text of the alert
     * @param {string} options.title - The title of the alert
     * @param {string} options.icon - The icon of the alert
     * @param {string} options.confirmText - The text of the confirm button
     * @param {string} options.cancelText - The text of the cancel button
     */
    swalAskYesNo = (options = {}) => {
        options = isObject(options) ? options : {}
        let
            text = options.text || '',
            title = options.title || '',
            icon = options.icon || 'warning',
            confirmButtonText = options.confirmText || trans('Oui'),
            cancelButtonText = options.cancelText || trans('Non')
        return new Promise((resolve, reject) => {
            swal({
                title: title,
                text: text,
                icon: icon,
                buttons: [cancelButtonText, confirmButtonText],
                dangerMode: true,
            }).then(confirm => confirm ? resolve() : reject())
        })
    },
    swalInfo = (options = {}) => {
        options = isObject(options) ? options : {}
        let
            text = options.text || '',
            title = options.title || '',
            icon = options.icon || 'info',
            confirmButtonText = options.confirmText || trans('OK')
        return swal({
            title: title,
            text: text,
            icon: icon,
            button: confirmButtonText,
            dangerMode: true,
        })
    },
    swalSuccess = (options = {}) => {
        options = isObject(options) ? options : {}
        let
            text = options.text || '',
            title = options.title || '',
            icon = options.icon || 'success',
            confirmButtonText = options.confirmText || trans('OK')
        return swal({
            title: title,
            text: text,
            icon: icon,
            button: confirmButtonText,
            dangerMode: true,
        })
    },
    swalError = (options = {}) => {
        options = isObject(options) ? options : {}
        let
            text = options.text || '',
            title = options.title || '',
            icon = options.icon || 'error',
            confirmButtonText = options.confirmText || trans('OK')
        return swal({
            title: title,
            text: text,
            icon: icon,
            button: confirmButtonText,
            dangerMode: true,
        })
    }
