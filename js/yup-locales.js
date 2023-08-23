/**
 * @see node_modules/yup/index.js
 */
const
    fr = {
        mixed: {
            default: 'La valeur est invalide',
            required: 'Ce champ est requis',
            defined: 'Ce champ doit être défini',
            notNull: 'Ce champ ne doit pas être nul',
            oneOf: 'La valeur doit être l\'un des éléments suivants: ${values}',
            notOneOf: 'La valeur ne doit pas être l\'un des éléments suivants: ${values}',
            notType: ({path, type, value, originalValue}) => {
                switch (type) {
                    case 'string':
                        return 'Ce champ doit être une chaîne de caractères'
                    case 'number':
                        return 'Ce champ doit être un nombre'
                    case 'date':
                        return 'Ce champ doit être une date'
                    case 'boolean':
                        return 'Ce champ doit être un booléen'
                    case 'object':
                        return 'Ce champ doit être un objet'
                    case 'array':
                        return 'Ce champ doit être un tableau'
                    default:
                        return 'Ce champ doit être de type ${type}'
                }
            }
        },
        string: {
            length: 'Ce champ doit avoir exactement ${length} caractères',
            min: 'Ce champ doit avoir au moins ${min} caractères',
            max: 'Ce champ doit avoir au plus ${max} caractères',
            matches: 'Ce champ doit correspondre au motif suivant: "${regex}"',
            email: 'Ce champ doit être une adresse email valide',
            url: 'Ce champ doit être une URL valide',
            uuid: 'Ce champ doit être un UUID valide',
            trim: 'Ce champ ne doit pas contenir d\'espaces inutiles',
            lowercase: 'Ce champ doit être en minuscules',
            uppercase: 'Ce champ doit être en majuscules',
        },
        number: {
            min: 'Ce champ doit être supérieur ou égal à ${min}',
            max: 'Ce champ doit être inférieur ou égal à ${max}',
            lessThan: 'Ce champ doit être inférieur à ${less}',
            moreThan: 'Ce champ doit être supérieur à ${more}',
            positive: 'Ce champ doit être un nombre positif',
            negative: 'Ce champ doit être un nombre négatif',
            integer: 'Ce champ doit être un nombre entier',
        },
        date: {
            min: 'Ce champ doit être postérieur à ${min}',
            max: 'Ce champ doit être antérieur à ${max}',
        },
        boolean: {
            isValue: 'Ce champ doit être vrai ou faux',
        },
        object: {
            noUnknown: 'Ce champ ne peut pas avoir de clés non spécifiées dans la forme de l\'objet',
        },
        array: {
            min: 'Ce champ doit avoir au moins ${min} éléments',
            max: 'Ce champ doit avoir au plus ${max} éléments',
            length: 'Ce champ doit avoir exactement ${length} éléments',
        },
    },
    nl = {
        mixed: {
            default: 'De waarde is ongeldig',
            required: 'Dit veld is verplicht',
            defined: 'Dit veld moet gedefinieerd zijn',
            notNull: 'Dit veld mag niet leeg zijn',
            oneOf: 'De waarde moet één van de volgende elementen zijn: ${values}',
            notOneOf: 'De waarde mag niet één van de volgende elementen zijn: ${values}',
            notType: ({
                          path,
                          type,
                          value,
                          originalValue
                      }) => {
                switch (type) {
                    case 'string':
                        return 'Dit veld moet een tekenreeks zijn'
                    case 'number':
                        return 'Dit veld moet een getal zijn'
                    case 'date':
                        return 'Dit veld moet een datum zijn'
                    case 'boolean':
                        return 'Dit veld moet een boolean zijn'
                    case 'object':
                        return 'Dit veld moet een object zijn'
                    case 'array':
                        return 'Dit veld moet een array zijn'
                    default:
                        return 'Dit veld moet van het type ${type} zijn'
                }
            }
        },
        string: {
            length: 'Dit veld moet precies ${length} tekens lang zijn',
            min: 'Dit veld moet minimaal ${min} tekens lang zijn',
            max: 'Dit veld mag maximaal ${max} tekens lang zijn',
            matches: 'Dit veld moet overeenkomen met het volgende patroon: "${regex}"',
            email: 'Dit veld moet een geldig e-mailadres zijn',
            url: 'Dit veld moet een geldige URL zijn',
            uuid: 'Dit veld moet een geldige UUID zijn',
            trim: 'Dit veld mag geen overbodige spaties bevatten',
            lowercase: 'Dit veld moet in kleine letters zijn',
            uppercase: 'Dit veld moet in hoofdletters zijn',
        },
        number: {
            min: 'Dit veld moet groter zijn dan of gelijk zijn aan ${min}',
            max: 'Dit veld moet kleiner zijn dan of gelijk zijn aan ${max}',
            lessThan: 'Dit veld moet kleiner zijn dan ${less}',
            moreThan: 'Dit veld moet groter zijn dan ${more}',
            positive: 'Dit veld moet een positief getal zijn',
            negative: 'Dit veld moet een negatief getal zijn',
            integer: 'Dit veld moet een geheel getal zijn',
        },
        date: {
            min: 'Dit veld moet na ${min} zijn',
            max: 'Dit veld moet voor ${max} zijn',
        },
        boolean: {
            isValue: 'Dit veld moet waar of onwaar zijn',
        },
        object: {
            noUnknown: 'Dit veld mag geen ongespecificeerde sleutels hebben in de objectvorm',
        },
        array: {
            min: 'Dit veld moet minimaal ${min} elementen bevatten',
            max: 'Dit veld mag maximaal ${max} elementen bevatten',
            length: 'Dit veld moet precies ${length} elementen bevatten',
        },
    }
export {fr, nl}
