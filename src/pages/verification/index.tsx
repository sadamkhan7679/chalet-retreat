import React, {useEffect, useState} from 'react'
import AppPaper from 'src/components/elements/Paper'
import Footer from 'src/components/modules/Footer'
import Header from 'src/components/modules/Header'
import HeadContent from 'src/hoc/headContent'
import {useRouter} from 'next/router'
import {verifyUserApi} from 'src/services/api'
import {TO_HOME_PAGE} from 'src/constants'
import {GetServerSideProps} from 'next'

const EmailVerification = ({query}: any) => {
  const meta = {
    title: `Chalet Retreat`,
    description: `Charlet Retreat. Book one of the world's best chalets. Discover and book chalets everywhere around you. Check-In Check-Out.`,
    keywords: ``,
    route: '/',
  }

  const [status, setStatus] = useState('Email Verification')
  const router = useRouter()

  useEffect(() => {
    if (query.token) {
      setStatus('Verifying Email')
      verifyUserApi(query.token)
        .then((res) => {
          console.log(res)
          if (res.status === 200) {
            setStatus('Email Verified Successfully')
          }

          setTimeout(() => {
            router.push(TO_HOME_PAGE)
          }, 3000)
        })
        .catch((err) => {
          console.log(err)
          setStatus('Email Verification Failed')
          setTimeout(() => {
            router.push(TO_HOME_PAGE)
          }, 3000)
        })
    }
  }, [query])

  return (
    <AppPaper>
      <HeadContent
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        route={meta.route}
      />
      <Header />
      <div style={{paddingTop: '150px'}}>
        <h4>{status}</h4>
      </div>
      <Footer />
    </AppPaper>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {query} = context
  return {
    props: {query}, // will be passed to the page component as props
  }
}

export default EmailVerification
