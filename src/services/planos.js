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

const getPlanos = async () => {
    try {
        const response = await axios.get(baseUrl, getHeaders());
        return response.data;
    } catch (error) {
        return handleError(error);
    }
}

export default { getPlanos }