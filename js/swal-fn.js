import {trans} from './app-trans'

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
        let
            text = options.text || '',
            title = options.title || '',
            icon = options.icon || 'warning',
            confirmButtonText = options.confirmText || trans('Oui'),
            cancelButtonText = options.cancelText || trans('Non')
        return new Promise((resolve, reject) => {
            this.$swal({
                title: title,
                text: text,
                icon: icon,
                buttons: [cancelButtonText, confirmButtonText],
                dangerMode: true,
            }).then(confirm => confirm ? resolve() : reject())
        })
    }
