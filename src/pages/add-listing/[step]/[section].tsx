import React from 'react'
import {GetStaticPaths} from 'next'
import HeadContent from 'src/hoc/headContent'
import {useRouter} from 'next/router'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import AppPaper from 'src/components/elements/Paper'
import Header from 'src/components/modules/Header'
import ListingStepOneBody from 'src/components/modules/listing-step-one'
import ListingStepThreeBody from 'src/components/modules/listing-step-three'
import ListingStepTwoBody from 'src/components/modules/listing-step-two'
import {
  ListingSectionVariant,
  ListingStepParams,
  ListingStepVariant,
} from 'src/types/listing'
import {useSmallSize} from 'src/hooks'

const stepComponentMap: Record<ListingStepVariant, React.ElementType> = {
  one: ListingStepOneBody,
  two: ListingStepTwoBody,
  three: ListingStepThreeBody,
}

const stepSectionsMap: Record<ListingStepVariant, ListingSectionVariant[]> = {
  one: [
    'address',
    'amenities',
    'customer-expectations-and-security',
    'guests',
    'property-type',
    'inbetween',
  ],
  two: [
    'profile-photo',
    'property-photos',
    'property-description',
    'inbetween',
  ],
  three: [
    'basic-fee',
    'basic-pricing',
    'calendar',
    'cancellation-policies',
    'guest-reception',
    'inbetween',
    'laws-and-taxes',
    'phone-number',
    'rules',
    'rental-parameters',
  ],
}

const AddListingPage = () => {
  const router = useRouter()
  const step = router.query.step as ListingStepVariant
  const isSmallSize = useSmallSize()

  const Component = stepComponentMap[step]

  const meta = {
    title: `Add Listing`,
    description: `Charlet Retreat. Book one of the world's best chalets. Discover and book chalets everywhere around you. Check-In Check-Out.`,
    keywords: ``,
    route: '/add-listing/*',
  }

  return (
    <>
      <HeadContent
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        route={meta.route}
      />
      <AppPaper style={{paddingTop: isSmallSize ? '135px' : '100px'}}>
        <Header appBarProps={{position: 'sticky'}} type="listing" />
        <Component />
      </AppPaper>
    </>
  )
}

export default AddListingPage

export const getStaticPaths: GetStaticPaths<ListingStepParams> = async () => {
  const steps: ListingStepVariant[] = ['one', 'two', 'three']
  const paths: {params: ListingStepParams; locale: string}[] = []

  steps.forEach((step) => {
    stepSectionsMap[step]?.forEach((section) => {
      paths.push({
        params: {step, section},
        locale: 'en',
      })
      paths.push({
        params: {step, section},
        locale: 'fr',
      })
    })
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({locale}: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header', 'hero'])),
    },
  }
}
