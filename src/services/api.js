import axios from 'axios'

localStorage.setItem('key', 'b4d501dcee9bef6f801ce9b6e3de32a3')

axios.defaults.baseURL = 'https://gateway.marvel.com:443'

export default axios