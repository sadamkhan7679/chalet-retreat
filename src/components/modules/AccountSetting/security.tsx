import React, {useState} from 'react'
import {
  Grid,
  Typography,
  Container,
  Box,
  Avatar,
  Button,
} from '@material-ui/core'
import {useSecurityStyles} from './styles'
import InnerHeader from './Header'
import {UpdateCurrentPassword, deleteSocialConnect} from 'src/services/api/auth'
import Divider from '@mui/material/Divider'
import {useSmallSize} from 'src/hooks/screenSize'
import {useDispatch} from 'react-redux'
import {signIn, signOut} from 'next-auth/client'
import {
  fetchingApiData,
  setRedirectToSocialConnect,
} from 'src/store/actions/accountSettingsAction'
import {updateUserAction} from 'src/store/actions/userAction'
import {useSecurityConnections} from 'src/hooks'

const redirectUrl = process.env.NEXT_PUBLIC_SOCIAL_LOGIN_REDIRECT_URL

// const redirectUrl = "http://localhost:3000/auth?redirect=true";

interface Props {
  back: string
  setValues?: any
}
const Security: React.FC<Props> = ({back, setValues}) => {
  const isSmallSize = useSmallSize()
  const classes = useSecurityStyles()
  const dispatch = useDispatch()
  const [error, setError] = useState('')
  const [Success, setSuccess]: number | any = useState('')

  const {facebookData, googleData, PasswordData, setPasswordData} =
    useSecurityConnections()
  console.log(facebookData)
  console.log(googleData)

  const handleInputChange = (event: any) => {
    setError('')
    const {name, value} = event.target
    setPasswordData({...PasswordData, [name]: value})
  }
  const handlePasswordSave = () => {
    console.log('update password')
    setError('')
    if (PasswordData.current_password === '') {
      setError('Current Password is required')
      return
    }
    if (PasswordData.password === '') {
      setError('New Password is required')
      return
    }
    if (PasswordData.password_confirmation === '') {
      setError('Confirm Password is required')
      return
    }
    if (PasswordData.password !== PasswordData.password_confirmation) {
      setError('Password and confirm password do not match')
      return
    }

    dispatch(fetchingApiData(true))

    UpdateCurrentPassword(PasswordData)
      .then((d) => {
        console.log(d)
        setSuccess(d.data)
        setError('')
        dispatch(fetchingApiData(false))
      })
      .catch((Err) => {
        setError(Err.response.data.message)
        dispatch(fetchingApiData(false))
      })
  }

  async function handleSocialConnect(provider: string) {
    await signOut({redirect: false})

    signIn(provider, {
      callbackUrl: redirectUrl,
      redirect: false,
    })
    dispatch(setRedirectToSocialConnect('security'))
  }

  const removeSocialConnect = (type: string) => {
    dispatch(fetchingApiData(true))
    deleteSocialConnect(type)
      .then((result) => {
        console.log(result)
        dispatch(updateUserAction(result.user))
        dispatch(fetchingApiData(false))
      })
      .catch((err) => {
        console.log(err)
        dispatch(fetchingApiData(false))
      })
  }

  return (
    <>
      <InnerHeader
        head="Security and connections"
        button="Save changes"
        back={back}
        setValues={setValues}
        handleSaveClick={handlePasswordSave}
        // type="password"
      />
      <Box>
        <Container
          className={classes.container}
          style={{
            paddingLeft: isSmallSize ? '0px' : undefined,
            paddingRight: isSmallSize ? '0px' : undefined,
          }}
        >
          <Grid>
            <Grid item xs={12} md={8} lg={6}>
              <Box className={classes.securityMain}>
                <Typography variant="body1" className={classes.securityTitle}>
                  Change Password
                </Typography>
                {error && <p style={{color: 'red'}}>{error}</p>}
                {Success == 1 && <p>Password successfully changed</p>}
                <Box className={classes.securityPassword}>
                  <label>Current Password</label>
                  <input
                    type="password"
                    value={PasswordData.current_password}
                    onChange={handleInputChange}
                    name="current_password"
                    placeholder="Current password you are using"
                  />
                </Box>
                {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
                <Box className={classes.securityPassword}>
                  <label>New Password</label>
                  <input
                    type="password"
                    placeholder="New password"
                    value={PasswordData.password}
                    onChange={handleInputChange}
                    name="password"
                  />
                </Box>

                {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
                <Box className={classes.securityPassword}>
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    value={PasswordData.password_confirmation}
                    onChange={handleInputChange}
                    name="password_confirmation"
                    placeholder="Confirm the new password"
                  />
                </Box>
              </Box>
              <Box>
                <Typography variant="h6" className={classes.securityTitle}>
                  Social Networks
                </Typography>
                <Box
                  className={classes.googlePassword}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    marginTop: '16px',
                    border: '1px solid #EAEEF5',
                  }}
                  style={{cursor: 'pointer'}}
                  onClick={() => {
                    !googleData && handleSocialConnect('google')
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    className={classes.googleMain}
                  >
                    <Avatar src={'/images/google.png'} />
                    <Typography
                      variant="body1"
                      style={{fontSize: '16px', lineHeight: '24px'}}
                    >
                      Google
                    </Typography>
                    {!isSmallSize && (
                      <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                        style={{margin: '8px 12px'}}
                      />
                    )}
                    <Typography style={{fontSize: '15px'}}>
                      {googleData
                        ? googleData?.email
                        : 'Connect your Google profile'}
                    </Typography>
                  </Box>

                  <Box
                    className={classes.addPin}
                    onClick={() => removeSocialConnect('google')}
                  >
                    <img
                      src={
                        googleData
                          ? '/images/close-line.svg'
                          : '/images/plus-line.svg'
                      }
                      alt="plus-icon"
                    />
                  </Box>
                </Box>

                <Box
                  className={classes.googlePassword}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    marginTop: '16px',
                    border: '1px solid #EAEEF5',
                  }}
                  style={{cursor: 'pointer'}}
                  onClick={() => {
                    !facebookData && handleSocialConnect('facebook')
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    className={classes.googleMain}
                  >
                    <Avatar src={'/images/facebook.png'} />
                    <Typography
                      variant="body1"
                      style={{fontSize: '16px', lineHeight: '24px'}}
                    >
                      Facebook
                    </Typography>
                    {!isSmallSize && (
                      <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                        style={{margin: '8px 12px'}}
                      />
                    )}
                    <Typography variant="body2" style={{fontSize: '15px'}}>
                      {facebookData
                        ? facebookData.name
                        : 'Connect your Facebook profile'}
                    </Typography>
                  </Box>
                  <Box
                    className={classes.addPin}
                    onClick={() => removeSocialConnect('facebook')}
                  >
                    <img
                      src={
                        facebookData
                          ? '/images/close-line.svg'
                          : '/images/plus-line.svg'
                      }
                      alt="plus-icon"
                    />
                  </Box>
                </Box>
              </Box>
              <Box>
                <Button className={classes.btnSaves}>Save Changes</Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
export default Security
