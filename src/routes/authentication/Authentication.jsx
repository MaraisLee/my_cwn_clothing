import SignInForm from '../../components/signInForm/SignInForm';
import SignUpForm from '../../components/signUpForm/SignUpForm';

import './authentication.scss';

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
