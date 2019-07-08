import axios from 'axios'

axios.interceptors.request.use(config => {
    let prefix = config.url.indexOf('?') === -1 ? '?' : '&'

    config.url = `https://gateway.marvel.com:443${config.url + prefix}apikey=b4d501dcee9bef6f801ce9b6e3de32a3`
    return config
})

export default axios