export const
    humanReadableSize = function (number, decimals = 0, showZero = false) {
        let defaultDecimals = decimals
        decimals = Math.min(decimals, 2)
        const suffixes = ['', 'k', 'M', 'B', 'T', 'P', 'E', 'Z', 'Y']
        let level = 0,
            nbr = number,
            dec = 0
        while (nbr >= 1000) {
            dec = nbr % 1000
            nbr = parseInt(nbr / 1000)
            level++
        }
        if (!showZero)
            switch (decimals) {
                case 2:
                    let c = dec / 100,
                        d = dec / 10 - c * 10
                    if (Math.floor(d) === 0) {
                        if (Math.floor(c) === 0)
                            decimals = 0
                        else
                            decimals--
                    }
                    break
                case 1:
                    let c2 = dec / 100
                    if (Math.floor(c2) === 0)
                        decimals = 0
                    break
            }
        let result = nbr + dec / 1000
        switch (decimals) {
            case 0:
                result = Math.floor(result)
                break
            case 1:
                result = Math.floor(result * 10) / 10
                break
            case 2:
                result = Math.floor(result * 100) / 100
                break
        }
        return `${result.toFixed(decimals)}${suffixes[level]}`
    },
    random = (min = 0, max = Infinity) => Math.floor(Math.random() * (max - min + 1)) + min,
    twoDigits = (number) => number < 10 ? `0${number}` : number,
    formatterCurrency = function (number, currency = 'EUR', locales = 'de-DE') {
        /**
         * @author MHK
         * @link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Intl/NumberFormat
         */
        let options = {
            useGrouping: true,
        }
        if (currency != null && typeof currency == 'string' && currency.length) {
            options.currency = currency
            options.style = 'currency'
        }
        return new Intl.NumberFormat(locales, options).format(number)
    }
