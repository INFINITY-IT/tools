export const response_decrypt = (data, key = '$BZMf') => {
    let decrypted_data = atob(data[key])
    decrypted_data = decrypted_data.split('').reverse().join('')
    for (let i = 0; i < data.e; i++) decrypted_data += '='
    return JSON.parse((atob(decrypted_data)))
}
