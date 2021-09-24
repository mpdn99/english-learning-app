import axios from "axios";

const getAnswerData = (question_id, setAnswers) => {
  const url = `https://bunny2-istech.herokuapp.com/test/part/question/${question_id}`
  return axios.get(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "axios 0.21.4"
      }
  })
  .then((response) => {
      const result = response.data;
    //   console.log(question_id +' '+result)
      setAnswers(a => a.concat(result));
  })
  .catch((error) => {
      console.error(error)
  })
}
export default getAnswerData;