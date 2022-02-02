import Head from 'next/head';
import React from 'react';
import { metaData } from '../Utils';

interface IProps {
  data: {
    description?: string;
    image?: string;
    keywords?: string;
    siteName?: string;
    title?: string;
    url?: string;

    facebook?: {
      description?: string;
      image?: string;
      siteName?: string;
      title?: string;
      url?: string;
    };

    twitter?: {
      description?: string;
      image?: string;
      siteName?: string;
      title?: string;
      url?: string;
    };
  };
}

const Header = (props: IProps) => {
  const { data } = props;

  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
      <link rel="manifest" href="./site.webmanifest" />
      <title>Welcome | INUX</title>

      <meta name="title" content={data.title || metaData.title} />
      <meta
        name="description"
        content={data.description || metaData.description}
        key="description"
      />

      <meta name="keywords" content={data.keywords || metaData.keywords} />

      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content="" />
      <meta itemProp="description" content={data.description} />
      <meta itemProp="image" content={data.image} />
      {/* Google / Search Engine Tags Ends */}

      {/* Facebook Meta Tags */}
      <meta property="og:type" content="website" key="facebook type" />

      {/* <meta name="geo.placename" content={metaData.geo.placeName} />
      <meta name="geo.position" content={metaData.geo.position} />
      <meta name="geo.region" content={metaData.geo.region} /> */}
    </Head>
  );
};

export default Header;
