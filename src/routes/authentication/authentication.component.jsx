import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserProfileDocument,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  // useEffect(async ()=>{
  //   const response = await getRedirectResult(auth);
  //   console.log(response, 'response');
  //   if(response){
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // },[]);

  return (
    <div className="authentication-container">
      <SignInForm />
      {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
      <SignUpForm />
    </div>
  );
};

export default Authentication;
