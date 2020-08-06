import React from 'react'
import Head from 'next/head'

const PageTitle = ({ title }) => {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        {/* Let browser know webapp is optimized for mobile */}
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        {/* SEO */}
        <meta name='author' content='Thiago Silva (dev.thiagosilva.cc)' />
        <meta name='copyright' content='© 2020 Thiago Silva' />
        <meta name='description' content='Sua plataforma de ensino à distância' />
        <meta name='keyword' content='plataforma de ensino, plataforma de estudos, ensino a distancia, estudo a distancia, plataforma ead, ead' />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index, follow' />
        {/* Google Site Verification */}
        <meta name='google-site-verification' content='' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta httpEquiv='cache-control' content='max-age=31536000' />
        <meta httpEquiv='pragma' content='max-age=31536000' />
        <meta httpEquiv='refresh' content='3600;url=https://teachy.vercel.app/' />
        {/* Default policy for specifiying valid sources for Google fonts & stylesheets */}
        {/* <meta http-equiv='Content-Security-Policy' content="style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;" /> */}
        {/* Open Graph Markup: og */}
        <meta property='og:type' content='webapp' />
        <meta property='og:url' content='https://teachy.vercel.app/' />
        <meta property='og:title' content='Estude online' />
        <meta property='og:image' content='https://teachy.vercel.app/img/img.png' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1080' />
        <meta property='og:image:height' content='1080' />
        <meta property='og:image:alt' content='' />
        <meta property='og:description' content='Sua plataforma de ensino à distância' />
        <meta property='og:site_name' content='Firegram' />
        <meta property='og:locale' content='pt_BR' />
        {/* Open Graph Markup: lp */}
        <meta property='lp:type' content='webapp' />
        <meta property='lp:url' content='https://teachy.vercel.app/' />
        <meta property='lp:title' content='Estude online' />
        <meta property='lp:image' content='https://teachy.vercel.app/img/img.png' />
        <meta property='lp:image:type' content='image/png' />
        <meta property='lp:image:width' content='1080' />
        <meta property='lp:image:height' content='1080' />
        <meta property='lp:image:alt' content='' />
        <meta property='lp:description' content='Sua plataforma de ensino à distância' />
        <meta property='lp:site_name' content='Firegram' />
        <meta property='lp:locale' content='pt_BR' />
        {/* Twitter Cards */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:creator' content='@firegram' />
        <meta name='twitter:site' content='@firegram' />
        <meta name='twitter:domain' content='teachy.vercel.app/' />
        <meta name='twitter:title' content='Estude online' />
        <meta name='twitter:description' content='Sua plataforma de ensino à distância' />

        <title>{title}Teachy</title>
      </Head>
    </React.Fragment>
  )
}

export default PageTitle
