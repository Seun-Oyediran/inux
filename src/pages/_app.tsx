import React from 'react';
import type { AppProps } from 'next/app';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../../public/css/globals.css';
import '../../public/css/responsive.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
