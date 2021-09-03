import auth from '@react-native-firebase/auth';

const SignInWithMail = ({email, pass}) => {
    auth()
    .signInWithEmailAndPassword(email, pass)
    .catch(error => {
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
            setErrorMsg('Incorrect username or password.');
        }
        console.log(error);
    });
}

export default SignInWithMail;