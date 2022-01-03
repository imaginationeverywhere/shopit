import { loadStripe } from '@stripe/stripe-js';

const initStripe = () => {
  return loadStripe(process.env.REACT_APP_STRIPE_KEY);
};

export default initStripe;
