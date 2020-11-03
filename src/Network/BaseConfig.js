import axios from 'axios';
const baseURL = "http://localhost:3000";
/* get请求 */
export function getRequest(path) {
    let instance =  axios.create({
        baseURL: baseURL,
        timeout: 8000
    });
    return instance({ url: path });
}