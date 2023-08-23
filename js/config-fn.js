export const env = attr => {
    return import.meta.env[attr] ?? ''
}
