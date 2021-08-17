/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/globals.scss';
import { wrapper } from '../redux/store';

const MyApp = ({ Component, pageProps }) => {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  return (

    <Layout>
      <Component {...pageProps} />
    </Layout>

  );
};

export default wrapper.withRedux(MyApp);