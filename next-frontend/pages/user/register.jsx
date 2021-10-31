import Link from "next/link";
import { Input, FormModal } from "../../components";

const Register = () => {
  return (
    <FormModal heading="Register">
      <Input className="form-modal-input" label="Name" type="text"/>
      <Input className="form-modal-input"  label="Email" type="email"/>
      <Input className="form-modal-input"  label="Password" type="password"/>
      <Input className="form-modal-input"  label="Avatar" type="file"/>
     
      <button className="btn" type="submit" id="login_btn">Register</button>
      
    </FormModal>
  );
};

export default Register;
