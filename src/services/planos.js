
import axios from "axios";

const baseUrl = "https://api.eyewalk.42g.com.br/api/v1/plan"

const getHeaders = () => {
    return {
        headers: {
            "Cache-Control": "no-cache",
            "Accept-Language": "en",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    }
}

const handleError = (error) => {
    if (error === undefined || error.response === undefined)
        throw new Error("Server Error")
    else
        throw new Error(error.response.data.message)
}

const getPlanos = () => {
    return axios
        .get(baseUrl, getHeaders())
        .then(response => response.data)
        .catch(error => handleError(error))
}

export default { getPlanos }