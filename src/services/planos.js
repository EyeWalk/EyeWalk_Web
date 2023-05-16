
import axios from "axios";

const baseUrl = "https://api.eyewalk.42g.com.br/api/v1/plan"

const getPlanos = () => {
    return axios.get(baseUrl).then(response => console.log(response.data)).catch(error => console.log(error))
}

export default { getPlanos }