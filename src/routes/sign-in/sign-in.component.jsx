import { getRedirectResult } from 'firebase/auth';

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserProfileDocument,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { useEffect } from 'react';
import SignUpForm from '../../components/directory/sign-up-form/sign-up-form.component';

const SignIn = () => {
  // useEffect(async ()=>{
  //   const response = await getRedirectResult(auth);
  //   console.log(response, 'response');
  //   if(response){
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // },[]);
  const logGoogleUser = async () => {
    // const response = await signInWithGooglePopup();
    const {user} = await signInWithGooglePopup();
    // console.log(response);
    const userDocRef = await createUserDocumentFromAuth(user);
    //createUserProfileDocument(response);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
