import axios from "axios";

const getPartsData = (test_id, setParts, setLoading) => {
  const url = `https://bunny2-istech.herokuapp.com/test/${test_id}`
  return axios.get(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "axios 0.21.4"
      }
  })
  .then((response) => {
      const result = response.data;
      // console.log(result)
      setParts(result);
      setLoading(false);
  })
  .catch((error) => {
      console.error(error)
  })
}
export default getPartsData;