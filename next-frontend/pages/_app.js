import { Provider } from "react-redux";
import { createWrapper } from 'next-redux-wrapper';
import Layout from "../layout/Layout.jsx";
import "../styles/globals.scss";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
