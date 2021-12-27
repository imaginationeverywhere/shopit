import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { closeModal } from '../../../actions';
import { validate } from '../../../utils';
import { login, register } from '../../../api';
import loader from '../../../assets/loader.gif';

const customStyles = {
  content: {
    top: '50%',
    transform: 'translateY(-50%)',
  },
  overlay: {
    backgroundColor: 'rgba(77,77,77,0.6)',
    zIndex: '10000',
  },
};

Modal.setAppElement('#root');

function LoginModal(props) {
  const { showModal, modal } = props;
  let timer;

  function closeModal() {
    document
      .getElementById('login-modal')
      .classList.remove('ReactModal__Content--after-open');

    timer = setTimeout(() => {
      props.closeModal('login');
    }, 200);
  }

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [inputs, setInputs] = useState({
    name: '',
    'singin-email': '',
    'singin-password': '',
    'register-email': '',
    'register-password': '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    const newErrors = { ...errors, [name]: !validate(value, name) };
    newErrors.onSubmit = false;
    newErrors.reset = false;
    setErrors(newErrors);

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = async (e, signup) => {
    e.preventDefault();
    setLoading(true);

    const inputMap = signup
      ? {
          name: inputs.name,
          'register-email': inputs['register-email'],
          'register-password': inputs['register-password'],
        }
      : {
          'singin-email': inputs['singin-email'],
          'singin-password': inputs['singin-password'],
        };

    const errorMap = Object.keys(inputMap).reduce(
      (acc, inputName) => ({
        ...acc,
        [inputName]: !validate(inputMap[inputName], inputName),
      }),
      {}
    );

    setErrors(errorMap);

    // check if at least one element fails validation
    const shouldNotSubmit = Object.keys(errorMap).some(
      (inputName) => errorMap[inputName]
    );

    if (shouldNotSubmit) {
      setLoading(false);
      return;
    }

    try {
      if (signup) {
        await register({
          name: inputs.name,
          email: inputMap['register-email'],
          password: inputMap['register-password'],
        });
      } else
        await login({
          email: inputMap['singin-email'],
          password: inputMap['singin-password'],
        });

      toast.success(signup ? 'Registration Successful' : 'Login Successful');
      closeModal();
    } catch (err) {
      console.log(err?.response?.data?.errMessage);
      let msg;
      if (err?.response?.data?.errMessage)
        msg = err?.response?.data?.errMessage;
      else msg = signup ? 'Registration failed' : 'Login failed';
      toast.error(msg);
    }

    setLoading(false);
  };

  return (
    <Modal
      isOpen={showModal && 'login' === modal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Login Modal"
      className="modal-dialog modal-dialog-centered"
      id="login-modal"
    >
      <div className="modal-content">
        <div className="modal-body">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={closeModal}
          >
            <span aria-hidden="true">
              <i className="icon-close"></i>
            </span>
          </button>
          <div className="form-box">
            <div className="form-tab">
              <Tabs selectedTabClassName="show" defaultIndex={0}>
                <TabList className="nav nav-pills nav-fill">
                  <Tab className="nav-item">
                    <span className="nav-link">Sign In</span>
                  </Tab>

                  <Tab className="nav-item">
                    <span className="nav-link">Register</span>
                  </Tab>
                </TabList>

                <div className="tab-content">
                  <TabPanel style={{ paddingTop: '2rem' }}>
                    <div>
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="singin-email-2">
                            Username or email address *
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="singin-email-2"
                            name="singin-email"
                            required
                            onChange={handleChange}
                            value={inputs['singin-email']}
                          />
                          {errors['singin-email'] && (
                            <small>Please enter a correct email address</small>
                          )}
                        </div>

                        <div className="form-group">
                          <label htmlFor="singin-password-2">Password *</label>
                          <input
                            type="password"
                            className="form-control"
                            id="singin-password-2"
                            name="singin-password"
                            value={inputs['singin-password']}
                            required
                            onChange={handleChange}
                          />
                          {errors['singin-email'] && (
                            <small>
                              Please enter a password longer than 8 characters
                            </small>
                          )}
                        </div>

                        <div className="form-footer">
                          <button
                            type="submit"
                            className="btn btn-outline-primary-2"
                          >
                            <span>LOG IN</span>
                            {loading ? (
                              <img src={loader} width={30} alt="Loading..." />
                            ) : (
                              <i className="icon-long-arrow-right"></i>
                            )}
                          </button>

                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="signin-remember-2"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="signin-remember-2"
                            >
                              Remember Me
                            </label>
                          </div>

                          <Link to="#" className="forgot-link">
                            Forgot Your Password?
                          </Link>
                        </div>
                      </form>
                      <div className="form-choice">
                        <p className="text-center">or sign in with</p>
                        <div className="row">
                          <div className="col-sm-6">
                            <Link to="#" className="btn btn-login btn-g">
                              <i className="icon-google"></i>
                              Login With Google
                            </Link>
                          </div>
                          <div className="col-sm-6">
                            <Link to="#" className="btn btn-login btn-f">
                              <i className="icon-facebook-f"></i>
                              Login With Facebook
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <form onSubmit={(e) => handleSubmit(e, true)}>
                      <div className="form-group">
                        <label htmlFor="name-2">Your full name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name-2"
                          name="name"
                          required
                          value={inputs['name']}
                          onChange={handleChange}
                        />
                        {errors.name && (
                          <small>Please enter first and last name</small>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="register-email-2">
                          Your email address *
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="register-email-2"
                          name="register-email"
                          required
                          value={inputs['register-email']}
                          onChange={handleChange}
                        />
                        {errors['register-email'] && (
                          <small>Please enter a correct email address</small>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="register-password-2">Password *</label>
                        <input
                          type="password"
                          className="form-control"
                          id="register-password-2"
                          name="register-password"
                          required
                          value={inputs['register-password']}
                          onChange={handleChange}
                        />
                        {errors['register-password'] && (
                          <small>
                            Please enter a password longer than 8 characters
                          </small>
                        )}
                      </div>

                      <div className="form-footer">
                        <button
                          type="submit"
                          className="btn btn-outline-primary-2"
                        >
                          <span>SIGN UP</span>
                          {loading ? (
                            <img src={loader} width={30} alt="Loading..." />
                          ) : (
                            <i className="icon-long-arrow-right"></i>
                          )}
                        </button>

                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="register-policy-2"
                            required
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="register-policy-2"
                          >
                            I agree to the <Link to="#">privacy policy</Link> *
                          </label>
                        </div>
                      </div>
                    </form>
                    <div className="form-choice">
                      <p className="text-center">or sign in with</p>
                      <div className="row">
                        <div className="col-sm-6">
                          <Link to="#" className="btn btn-login btn-g">
                            <i className="icon-google"></i>
                            Login With Google
                          </Link>
                        </div>
                        <div className="col-sm-6">
                          <Link to="#" className="btn btn-login  btn-f">
                            <i className="icon-facebook-f"></i>
                            Login With Facebook
                          </Link>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

function mapStateToProps(state) {
  return {
    showModal: state.modal.showModal,
    modal: state.modal.modal,
  };
}

export default connect(mapStateToProps, { closeModal })(LoginModal);
