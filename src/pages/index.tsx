import React from 'react'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'
import AppPaper from 'src/components/elements/Paper'
import Footer from 'src/components/modules/Footer'
import Header from 'src/components/modules/Header'
import HomeBody from 'src/components/modules/home'
import HeadContent from 'src/hoc/headContent'
import {getAllProperties} from 'src/services/api'

const Home = ({properties}: any) => {
  const {t} = useTranslation('common')
  const meta = {
    keywords: ``,
    route: '/',
  }

  return (
    <AppPaper>
      <HeadContent
        title={t('title')}
        description={t('meta_description')}
        keywords={meta.keywords}
        route={meta.route}
      />
      <Header />
      <HomeBody properties={properties} />
      <Footer />
    </AppPaper>
  )
}

export default Home

export async function getServerSideProps({locale}: any) {
  const {data} = await getAllProperties({is_active: 1, is_published: 1})

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header', 'hero'])),
      properties: data?.items,
    },
  }
}
