import {isObject} from './object-fn.js'

export const
    isArray = array => Array.isArray(array),
    addArrayPluck = (array = null, force = false) => {
        array = isArray(array) ? array : null
        if (typeof (array || Array.prototype).pluck !== 'function' || force)
            (array || Array.prototype).pluck = function (name) {
                let sol = []
                for (var i in this) {
                    if (this[i].hasOwnProperty(name)) sol.push(this[i][name])
                }
                return sol
            }
    },
    addArrayFindItemByAttr = (array = null, force = false) => {
        array = isArray(array) ? array : null
        if (typeof (array || Array.prototype).findItemByAttr !== 'function' || force)
            (array || Array.prototype).findItemByAttr = function (attr, val, default_ = null) {
                let self = this,
                    item = default_
                for (let i in self) {
                    let obj = self[i]
                    if (isObject(obj)) {
                        if (obj.hasOwnProperty(attr) && obj[attr] == val) {
                            item = obj
                            break
                        }
                    }
                }
                return item
            }
    },
    addArrayFilterByItemAttr = (array = null, force = false) => {
        array = isArray(array) ? array : null
        if (typeof (array || Array.prototype).filterByItemAttr !== 'function' || force)
            (array || Array.prototype).filterByItemAttr = function (attr, val) {
                let self = this,
                    items = []
                for (let i in self) {
                    let obj = self[i]
                    if (isObject(obj)) {
                        if (obj.hasOwnProperty(attr) && obj[attr] == val) items.push(obj)
                    }
                }
                return items
            }
    },
    addArraySum = (array = null, force = false) => {
        array = isArray(array) ? array : null
        if (typeof (array || Array.prototype).sum !== 'function' || force)
            (array || Array.prototype).sum = function (param = null, is_property = false) {
                let total = 0
                if (typeof param == 'function') this.forEach(element => total += param(element))
                else if (!!is_property) this.forEach(element => total += element[param])
                else this.forEach(element => total += element)
                return total
            }
    }
