import firestore from '@react-native-firebase/firestore';
import axios from "axios";

const getTestsData = (setTests, setLoading) => {
//   const subscriber = firestore().collection('Test');
//   subscriber.onSnapshot(querySnapshot => {
//     const tests = [];
//     querySnapshot.forEach(documentSnapshot => {
//         // console.log(documentSnapshot.id)
//         tests.push({
//           ...documentSnapshot.data(),
//           key: documentSnapshot.id,
//         });
//         setTests(tests);
//         setLoading(false);
//     });
//   });

// // Unsubscribe from events when no longer in use
// return () => subscriber();
const url = 'https://bunny2-istech.herokuapp.com/category/1'
return axios.get(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "axios 0.21.1"
    }
})
.then((response) => {
    const result = response.data;
    setTests(result);
    // console.log(result)
    setLoading(false)
})
.catch((error) => {
    console.error(error)
})
}

export default getTestsData
