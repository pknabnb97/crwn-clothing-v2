import {
  signInWithGooglePopup,
  createUserProfileDocument,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    // const response = await signInWithGooglePopup();
    const {user} = await signInWithGooglePopup();
    // console.log(response);
    const userDocRef = createUserDocumentFromAuth(user);
    //createUserProfileDocument(response);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
