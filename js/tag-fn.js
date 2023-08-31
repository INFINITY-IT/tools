import {addArraySum} from './array-fn.js'

export const
    /**
     * @author MHK
     * @param target
     * @param fixedElementSelectors
     */
    scrollToTarget = function (target, ...fixedElementSelectors) {
        addArraySum(true)
        let $target = target instanceof Element ? target : document.querySelector(target),
            margeTop = 5,
            spacer = fixedElementSelectors.sum(fixedElementSelector => document.querySelector(fixedElementSelector) ? document.querySelector(fixedElementSelector).offsetHeight : 0)
        $target.style.scrollMarginTop = (spacer + margeTop) + 'px'
        $target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start',
        })
    },
    documentLanguage = () => document.documentElement.lang,
    getDocTtile = () => document.title,
    setDocTtile = title => document.title = title
