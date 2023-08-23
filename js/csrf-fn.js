import {response_decrypt} from './crypt-fn'

export const csrf_update = (refresh_url, guard, callback = null, axios = null, key = '$BZMf') => {
    fetch(refresh_url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    })
        .then(response => response.json())
        .then(result => {
            let data = response_decrypt(result, key),
                token = data.token
            if (axios) axios.defaults.headers.common['X-CSRF-TOKEN'] = token
            if (document.querySelector('meta[name=csrf-token]'))
                document.querySelector('meta[name=csrf-token]').setAttribute('content', token)
            document.querySelectorAll('input[name=_token]').forEach(el => el.value = token)
            if (typeof callback == 'function') callback(token, data.auth[guard])
        })
        .catch(error => {
            // Handle any errors
        })
}
