import Link from "next/link";
import { Input, FormModal } from "../../components";

const Login = () => {
  return (
    <FormModal heading="Login">
      <Input className="form-modal-input" label="Email" />
      <Input className="form-modal-input" label="Password" />
      <Link href="/user/forgotPassword">
        <a className="form-modal-link">Forgot Password</a>
      </Link>
      <button className="btn" type="submit" id="login_btn">Log In</button>
      <Link href="/user/register">
        <a className="form-modal-link">New User?</a>
      </Link>
    </FormModal>
  );
};

export default Login;
