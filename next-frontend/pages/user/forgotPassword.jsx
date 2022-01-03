import Link from 'next/link';
import { Input, FormModal } from '../../components';

const ForgotPassword = () => {
  return (
    <FormModal heading="Forgot Password">
      <Input className="form-modal-input" label="Enter Email" />
      <Link href="/user/login">
        <a className="form-modal-link">Sign In</a>
      </Link>
      <button className="btn" type="submit" id="login_btn">
        Send email
      </button>
    </FormModal>
  );
};

export default ForgotPassword;
