import SignUpForm from '../../components/signUpForm/SignUpForm';
import {
  signInWithGoglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';

const SignIn = () => {
  const logGoolgeUser = async () => {
    const { user } = await signInWithGoglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <button onClick={logGoolgeUser}>Sign in with Google popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
