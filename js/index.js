export {default as MyForm} from './MyForm.js'
export {default as EventBus} from './EventBus.js'
export {default as hasPagination} from './HasPagination.js'
export * from './swal-fn.js'
export * from './app-trans.js'
export * from './object-fn.js'
export * from './url-fn.js'
export * from './tag-fn.js'
export * from './number-fn.js'
export * from './crypt-fn.js'
export * from './csrf-fn.js'
export * from './config-fn.js'
export * from './array-fn.js'
/**
 * use with Vue.js 2
 */
import {__, trans} from './app-trans.js'

export const AppTrans = {
    methods: {__, trans},
}
