export const
    addArrayPluck = (force = false) => {
        if (typeof Array.prototype.pluck !== 'function' || force)
            Array.prototype.pluck = function (name) {
                let sol = []
                for (var i in this) {
                    if (this[i].hasOwnProperty(name)) sol.push(this[i][name])
                }
                return sol
            }
    },
    addArrayFindItemByAttr = (force = false) => {
        if (typeof Array.prototype.findItemByAttr !== 'function' || force)
            Array.prototype.findItemByAttr = function (attr, val, default_ = null) {
                let self = this,
                    item = default_
                for (let i in self) {
                    let obj = self[i]
                    if (typeof obj === 'object' /*&& !Array.isArray(obj)*/ && obj !== null) {
                        if (obj.hasOwnProperty(attr) && obj[attr] == val) {
                            item = obj
                            break
                        }
                    }
                }
                return item
            }
    },
    addArrayFilterByItemAttr = (force = false) => {
        if (typeof Array.prototype.filterByItemAttr !== 'function' || force)
            Array.prototype.filterByItemAttr = function (attr, val) {
                let self = this,
                    items = []
                for (let i in self) {
                    let obj = self[i]
                    if (typeof obj === 'object' /*&& !Array.isArray(obj)*/ && obj !== null) {
                        if (obj.hasOwnProperty(attr) && obj[attr] == val) items.push(obj)
                    }
                }
                return items
            }
    },
    addArraySum = (force = false) => {
        if (typeof Array.prototype.sum !== 'function' || force)
            Array.prototype.sum = function (param = null, is_property = false) {
                let total = 0
                if (typeof param == 'function') this.forEach(element => total += param(element))
                else if (!!is_property) this.forEach(element => total += element[param])
                else this.forEach(element => total += element)
                return total
            }
    }
