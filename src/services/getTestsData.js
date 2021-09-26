import axios from "axios";

const getTestsData = async (setTests, setLoading, params) => {
const url = `https://bunny2-istech.herokuapp.com/category/${params}`
    try {
        const response = await axios.get(url, {
            headers: {
                Accept: "application/json",
                "User-Agent": "axios 0.21.1"
            }
        });
        const result = response.data;
        setTests(result);
        // console.log(result)
        setLoading(false);
    } catch (error) {
        console.error(error);
    }
}

export default getTestsData
