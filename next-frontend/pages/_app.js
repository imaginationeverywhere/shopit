import { Provider } from "react-redux";
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

export default MyApp;
