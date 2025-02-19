/**
 * @source https://www.belltastic.com/blog/global-events-in-vue3
 * @source https://gist.github.com/learncodeacademy/777349747d8382bfb722
 */
class EventBus {
    constructor() {
        this.events = {}
    }

    on(eventName, fn) {
        this.events[eventName] = this.events[eventName] || []
        this.events[eventName].push(fn)
    }

    off(eventName, fn) {
        if (this.events[eventName]) {
            for (let i = 0; i < this.events[eventName].length; i++) {
                if (this.events[eventName][i] === fn) {
                    this.events[eventName].splice(i, 1)
                    break
                }
            }
        }
    }

    emit(eventName, ...data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(function (fn) {
                fn(...data)
            })
        }
    }
}

export default new EventBus()
