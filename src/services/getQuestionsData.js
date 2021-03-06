import { useEffect } from 'react';
import axios from "axios";

const getQuestionsData = async (part_id, setQuestions) => {
  const url = `https://bunny2-istech.herokuapp.com/test/part/${part_id}`
  try {
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "axios 0.21.4"
      }
    });
    const result = response.data;
    setQuestions(r => r.concat(result));
  } catch (error) {
    console.error(error);
  }
}
export default getQuestionsData;