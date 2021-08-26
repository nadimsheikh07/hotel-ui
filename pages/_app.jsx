/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/globals.scss';
import { wrapper } from '../redux/store';
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import withReduxSaga from 'next-redux-saga'

const MyApp = ({ Component, pageProps }) => {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  const store = useStore((state) => state)  

  return (
    <Layout>
      <PersistGate persistor={store.__persistor} loading={<div>Loading...</div>}>
        <Component {...pageProps} />
      </PersistGate>
    </Layout>

  );
};

export default wrapper.withRedux(withReduxSaga(MyApp));