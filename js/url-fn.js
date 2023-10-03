export const
    app_url = (secure = false) => ((typeof process !== 'undefined' ? process.env.MIX_APP_URL : import.meta.env.VITE_APP_URL) || '').replace('http://', secure ? 'https://' : 'http://'),
    url_params = () => new URLSearchParams(window.location.search),
    changeUrl = (url, title, data = {}) => window.history.pushState(data, title, url),
    openLink = (link, target = '_blank') => window.open(link, target),
    reloadPage = () => location.href = location.href,
    asset = (path, secure = false) => {
        let url = app_url(secure) + (app_url(secure).endsWith('/') ? '' : '/')
        path = path.startsWith('/') ? path.slice(1) : path
        return url + path
    },
    redirectTo = (url) => openLink(url, '_self')
