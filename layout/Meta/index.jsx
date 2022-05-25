import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'

const Meta = ({ title, description, keywords, url, ogImage }) => (
  <NextHead>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <title>{`${title} | The Rockademy`}</title>
    { url && (
      <>
        <link rel="canonical" href={url} />
        <meta property="og:url" content={url} />
        <meta name="twitter:site" content={url} />
      </>
    )}
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage} />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
  </NextHead>
);

Meta.propTypes = {
  title: string,
  description: string,
  keywords: string,
  url: string,
  ogImage: string,
}

Meta.defaultProps = {
  title: 'The Rockadaemy',
  description: 'The Rockadaemy',
  keywords: '',
  url: '',
  ogImage: '/static/images/favicon.png',
}

export { Meta }
