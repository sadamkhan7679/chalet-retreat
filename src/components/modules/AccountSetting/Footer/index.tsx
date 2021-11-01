import React from 'react'
import {useSmallSize} from './../../../../hooks/screenSize'
import Divider from '@mui/material/Divider'
import {Typography} from '@material-ui/core'
import {useAccountStyles} from '../styles'

interface Props {
  setTabValue: React.Dispatch<React.SetStateAction<number>>
}

const AccountSettingsFooter: React.FC<Props> = ({setTabValue}) => {
  const isSmallSize = useSmallSize()
  const classes = useAccountStyles()

  return (
    <>
      {isSmallSize && (
        <>
          <Divider style={{margin: '48px -35px 0px -35px'}} />
          <div className={classes.accountSettingsFooter}>
            <div onClick={() => setTabValue(0)}>
              <img src="/images/overview-icon.svg" alt="overview-icon" />
              <Typography>Overview</Typography>
            </div>
            <div onClick={() => setTabValue(1)}>
              <img src="/images/inbox-icon.svg" alt="inbox-icon" />
              <Typography>Inbox</Typography>
            </div>
            <div onClick={() => setTabValue(2)}>
              <img src="/images/bookings-icon.svg" alt="bookings-icon" />
              <Typography>Bookings</Typography>
            </div>
            <div onClick={() => setTabValue(3)}>
              <img src="/images/properties-icon.svg" alt="properties-icon" />
              <Typography>Properties</Typography>
            </div>
          </div>
        </>
      )}{' '}
    </>
  )
}

export default AccountSettingsFooter
