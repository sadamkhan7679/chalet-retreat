import React, {useEffect} from 'react'
import {useSession} from 'next-auth/client'
import {useDispatch, useSelector} from 'react-redux'
import {getMeAction, socialLoginAction} from 'src/store/actions/userAction'
import {loginStatusSelector} from 'src/store/selectors/userSelector'
import {useRouter} from 'next/router'
import {TO_ACCOUNT_SETTING, TO_HOME_PAGE} from 'src/constants'
import {makeStyles, Typography} from '@material-ui/core'
import CircularProgress from '@mui/material/CircularProgress'
import {redirectToSocialConnect} from 'src/store/selectors/accountSettingsSelector'
import {socialConnect} from 'src/services/api'

const useStyles = makeStyles(
  () => ({
    infoContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
    },
    infoSection: {
      minWidth: '25%',
      width: '100%',
      minHeight: '25%',
      maxHeight: '40%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
  }),
  {index: 1},
)

const Auth = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [session] = useSession()
  const loginStatus = useSelector(loginStatusSelector)
  const router = useRouter()
  const redirect = useSelector(redirectToSocialConnect)

  useEffect(() => {
    if (session) {
      const accessToken = session.accessToken
      if (accessToken) {
        const socialData: any = {
          access_token: accessToken,
          type: session.provider,
        }
        if (!redirect) {
          dispatch(socialLoginAction(socialData))
        }
        if (redirect) {
          socialConnect(socialData)
            .then((result: any) => {
              console.log(result)
              if (result.message.status == true) {
                dispatch(getMeAction())
                router.push(TO_ACCOUNT_SETTING)
              }
            })
            .catch((err) => {
              console.log(err)
              router.push(TO_ACCOUNT_SETTING)
            })
        }
      }
    }
  }, [session])

  useEffect(() => {
    if (loginStatus.success === true) {
      !redirect && router.push(TO_HOME_PAGE)
    }
    if (loginStatus.error) {
      setTimeout(() => {
        !redirect && router.push(TO_HOME_PAGE)
      }, 2000)
    }
  }, [loginStatus])

  return (
    <div className={classes.infoContainer}>
      <div className={classes.infoSection}>
        {loginStatus.loading && (
          <>
            <div>
              <Typography variant="h4">Signing In ..... Please Wait</Typography>
            </div>
            <div>
              <CircularProgress />
            </div>
          </>
        )}

        {loginStatus.error && (
          <Typography variant="h4">Something Went Wrong</Typography>
        )}
      </div>
    </div>
  )
}

export default Auth
