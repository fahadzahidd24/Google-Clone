import env from '../../nodemon.json'
import axios from 'axios'
const BASE_URL = "https://www.googleapis.com/customsearch/v1"
const params = {
    key: env.key,
    cx: env.cx,
}
export const fetchDataFromApi = async(payload) => {
    try {
        const { data } = await axios.get(BASE_URL, { params: { ...params, ...payload } })
        return data
    } catch (error) {
        console.log(error)
    }
};
