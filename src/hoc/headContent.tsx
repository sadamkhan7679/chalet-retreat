import Head from 'next/head'

function HeadContent({description, title, keywords, route}: any) {
  const url = process.env.NEXT_PUBLIC_API_URL
  const imageUrl = ``

  return (
    <Head>
      {/* Meta tags for browser link preview (SEO) */}
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta
        name="viewport"
        content="width=device-width,minimum-scale=1, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <meta name="type" content="website" />
      <meta name="url" content={url + route} />
      <meta name="image" content={imageUrl} />
      <link href="/favicon.ico" rel="shortcut icon" />
      <meta name="theme-color" content="rgb(40, 40, 40)" />
      <meta httpEquiv="Expires" content="3" />

      {/* Facebook sharing (Open Graph Markup)  */}
      <meta property="og:url" content={url} />
      <meta property="fb:app_id" content={process.env.Facebook_APP_ID || ''} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* Meta tags for twitter link preview  */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap"
        rel="stylesheet"
      />

      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Lighthouse Details  */}
      {/* <link rel="manifest" href="/manifest.json" /> */}

      {/* fonts  */}
    </Head>
  )
}

export default HeadContent
