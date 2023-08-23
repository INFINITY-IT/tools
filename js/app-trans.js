/**
 * @link https://dev.to/4unkur/how-to-use-laravel-translations-in-js-vue-files-ia
 */
export const
    __ = (key, replace) => {
        let translation, translationNotFound = true
        try {
            translation = key.split('.').reduce((t, i) => t[i] || null, window._translations[window._locale].php)
            if (translation) {
                translationNotFound = false
            }
        } catch (e) {
            translation = key
        }
        if (translationNotFound) {
            translation = window._translations[window._locale]['json'][key]
                ? window._translations[window._locale]['json'][key]
                : key
        }
        if (!Array.isArray(replace) && replace !== undefined) replace = [replace]
        _.forEach(replace, (value, key) => {
            translation = translation.replace(':' + key, value)
        })
        return translation
    },
    trans = (key, replace) => __(key, replace)
