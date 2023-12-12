import axios from "axios";
import {getItem} from "../helpers/Persistance-storage";

axios.defaults.baseURL = 'https://api.realworld.io/api'

axios.interceptors.request.use(config => {
    const token = getItem("token")
    const authorization = token ? `Token ${token}` : ''
    config.headers.setAuthorization(authorization)
    return config
})

export default axios