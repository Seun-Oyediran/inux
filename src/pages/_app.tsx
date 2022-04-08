import React, { Fragment } from 'react';
import type { AppProps } from 'next/app';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../public/css/globals.css';
import '../../public/css/responsive.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // eslint-disable-next-line
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
