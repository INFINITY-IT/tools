export const
    isObject = (obj) => {
        /**
         * @author MHK
         */
        return !Array.isArray(obj) && (typeof obj === 'object') && (obj !== null);
    },
    fill2Objects = (from, to, force = false) => {
        /**
         * @author MHK
         */
        if (!isObject(from) || !isObject(to)) return;
        for (const [key, value] of Object.entries(from)) {
            if (Object.hasOwn(to, key) || force) {
                if (isObject(to[key]))
                    fill2Objects(value, to[key], force)
                else
                    to[key] = JSON.parse(JSON.stringify(value))
            }
        }
    },
    hasAttr = (obj, attr) => Object.hasOwn(obj, attr)
