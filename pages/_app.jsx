/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/globals.scss';
import { Provider } from 'react-redux';
import withRedux from "next-redux-wrapper";
import store from '../redux/store';

const MyApp = ({ Component, pageProps }) => {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);