import React, {useState, useEffect} from 'react'
import {Grid, Typography, Container, Box, Avatar} from '@material-ui/core'
import {accountItems} from './data'
import {useRouter} from 'next/router'
import PersonalInfo from './personlaInfo'
import Payment from './Payment'
import Security from './security'
import Host from './host'
import Notification from './notification'
import clsx from 'clsx'
import {useTheme} from '@material-ui/styles'
import {useSelector, useDispatch} from 'react-redux'
import {useAccountStyles} from './styles'
import {redirectToSocialConnect} from 'src/store/selectors/accountSettingsSelector'
import {setRedirectToSocialConnect} from 'src/store/actions/accountSettingsAction'

interface Props {
  getMeData: any
  payoutSection: boolean
  setPayoutSection: React.Dispatch<React.SetStateAction<boolean>>
}
const AccountSetting: React.FC<Props> = ({
  getMeData,
  setPayoutSection,
  payoutSection,
}) => {
  const router = useRouter()
  const accountRoute = router.route.replace('/', '')
  const dispatch = useDispatch()
  const classes = useAccountStyles()
  const [value, setValues] = useState('')
  const name = getMeData?.name.split(' ')[0]
  const theme: any = useTheme()

  const redirect = useSelector(redirectToSocialConnect)

  useEffect(() => {
    redirect && setValues(redirect)
    redirect && dispatch(setRedirectToSocialConnect(null))
  }, [])

  return (
    <>
      {accountRoute !== 'my-properties' ? (
        <div>
          {!value ? (
            <Container
              className={clsx(
                classes.container,
                classes.accountSettingsWrapper,
              )}
            >
              <Box>
                <Typography
                  variant="body1"
                  className={classes.accountHeaderBold}
                >
                  Hello, {name && name} 👋
                </Typography>
                <Typography
                  variant="body2"
                  className={classes.accountHeaderNormal}
                >
                  Change your profile and account settings.
                </Typography>
              </Box>
              <Grid className={classes.accountDetail}>
                {accountItems &&
                  accountItems.map((item, index) => {
                    return (
                      <Grid
                        item
                        lg={4}
                        md={6}
                        sm={12}
                        className={classes.accountGridItem}
                        key={index}
                        onClick={() => setValues(item?.flag)}
                      >
                        <Box className={classes.accountCard}>
                          <Avatar
                            src={item?.image}
                            style={{justifyContent: 'flex-start'}}
                          />
                          <Typography
                            variant="body1"
                            style={{color: theme.palette.text.primary}}
                          >
                            {item?.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            style={{color: theme.palette.text.secondary}}
                          >
                            {item?.contents}
                          </Typography>
                        </Box>
                      </Grid>
                    )
                  })}
              </Grid>
            </Container>
          ) : (
            ''
          )}
        </div>
      ) : (
        ''
      )}
      <div
        className={classes.accountSettingsWrapper}
        style={{
          display: !value ? 'none' : undefined,
          paddingLeft: payoutSection ? '0px' : undefined,
          paddingRight: payoutSection ? '0px' : undefined,
        }}
      >
        {value == 'personal' && (
          <PersonalInfo back="personal" setValues={setValues} />
        )}
        {value == 'security' && (
          <Security back="security" setValues={setValues} />
        )}
        {value == 'payment' && (
          <Payment
            goBack={setValues}
            setPayoutSection={setPayoutSection}
            payoutSection={payoutSection}
          />
        )}
        {value == 'notification' && (
          <Notification back="notification" setValues={setValues} />
        )}
        {value == 'Host' && <Host />}
      </div>
    </>
  )
}

export default AccountSetting
