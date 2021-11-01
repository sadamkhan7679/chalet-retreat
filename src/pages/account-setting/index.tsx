import React, {Fragment} from 'react'
import Header from 'src/components/modules/Header'
import HeadContent from 'src/hoc/headContent'
import {useSelector} from 'react-redux'
import {fetchingData} from 'src/store/selectors/accountSettingsSelector'
import LoadingBackdrop from './../../components/modules/AccountSetting/loadingBackdrop'

const Setting = () => {
  const meta = {
    title: 'Account Settings',
    description:
      "Chalet Retreat. Book one of the world's best chalets. Discover and book chalets everywhere around you. Check-In Check-Out.",
    keywords: '',
    route: '/account-setting',
  }

  const loading = useSelector(fetchingData)

  return (
    <Fragment>
      <HeadContent
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        route={meta.route}
      />
      {loading && <LoadingBackdrop />}
      <Header />
    </Fragment>
  )
}

export default Setting
