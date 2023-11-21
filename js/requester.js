import axios from 'axios'
let requester = axios
requester.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
requester.defaults.headers.common['Content-Type'] = 'application/json'
const
    getRequester = () => {
        return requester
    },
    setRequester = (axios) => {
        requester = axios
    }

export {setRequester, getRequester}
