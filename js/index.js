export {default as MyForm} from './MyForm'
export {default as EventBus} from './EventBus'
export {default as hasPagination} from './HasPagination'
export * from './swal-fn'
export * from './app-trans'
export * from './object-fn'
export * from './url-fn'
export * from './tag-fn'
export * from './number-fn'
export * from './crypt-fn'
export * from './csrf-fn'
export * from './config-fn'
export * from './array-fn'
/**
 * use with Vue.js 2
 */
import {__, trans} from './app-trans'

export const AppTrans = {
    methods: {__, trans},
}
