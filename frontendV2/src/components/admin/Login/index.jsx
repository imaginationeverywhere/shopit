import React, { useEffect, useState } from 'react';
import ModalWrapComp from '../common/components/ModalWrapComp';
import Button from '../common/components/DashboardButton';
import Input from '../common/components/InputNew';
import useForm from '../customHook/useForm';
import './Login.scss';
// import CutIcon from '../common/components/PriceInput/CutIcon';
import { toast } from 'react-toastify';
import { login } from '../../../api';
import { isTokenValid } from '../utils/helpers';

const index = () => {
  const [showModal, setShowModal] = useState(true);
  const [loading, setLoading] = useState(false);
  const { formValues, handleChange } = useForm({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (localStorage.token) {
      if (isTokenValid()) {
        closeModal();
      }
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await login(formValues);
      console.log(res);
      if (res && res.token) {
        closeModal();
        localStorage.token = res.token;
        toast.success('Login Successful');
      }
    } catch (error) {
      toast.error('Login failed');
    }
    setLoading(false);
  };
  return (
    <>
      {showModal && (
        <ModalWrapComp closeModal={closeModal}>
          <div className="login-form">
            {/* <div onClick={closeModal} className="cut-icon">
        <CutIcon  width='14' height='14' />
      </div> */}
            <form onSubmit={onSubmit} className="form-wrap">
              <h3 style={{ fontSize: '1.3em', textAlign: 'center' }}>
                Sign in to Admin
              </h3>

              <Input
                name="email"
                labelName="Email address"
                placeholder="Enter your email"
                required
                type="email"
                value={formValues.email}
                onChange={handleChange}
              />
              <Input
                name="password"
                labelName="Password"
                placeholder="Password"
                type="password"
                required
                value={formValues.password}
                onChange={handleChange}
              />
              <Button
                disabled={loading}
                loading={loading}
                name={loading ? 'Loading...' : 'SUBMIT'}
                type="submit"
                colored
                classes="submit-btn"
              />
            </form>
          </div>
        </ModalWrapComp>
      )}
    </>
  );
};

export default index;
