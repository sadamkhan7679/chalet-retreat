import React from 'react'
import {useNotificationStyles} from './styles'
import {
  Box,
  Container,
  Avatar,
  Typography,
  Grid,
  Switch,
} from '@material-ui/core'
import InnerHeader from './Header'
import Divider from '@mui/material/Divider'
import {useTheme} from '@material-ui/styles'
import AppButton from 'src/components/elements/Button'
import {useSmallSize} from 'src/hooks/screenSize'
import {isValidEmail} from 'src/utils/accountSettings'
import {useNotifications} from 'src/hooks'

interface Props {
  back: string
  setValues?: any
}

const Notification: React.FC<Props> = ({back, setValues}) => {
  const theme: any = useTheme()
  const classes = useNotificationStyles()
  const isSmallSize = useSmallSize()
  const {notifications, updateNotifications} = useNotifications()

  const [userEmail, setUserEmail] = React.useState(notifications?.email.to)
  const [emailError, setEmailError] = React.useState(false)

  const handleChange = (e: any) => {
    const name = e.target.name
    const status = e.target.checked
    if (name === 'marketing') {
      const newSettings = {...notifications}
      newSettings.marketing_notifications.active = status
      updateNotifications(newSettings)
    } else if (name === 'email') {
      const newSettings = {...notifications}
      newSettings.email = {active: status, to: notifications.email.to}
      updateNotifications(newSettings)
    } else {
      const newSettings = {...notifications, [name]: status}
      updateNotifications(newSettings)
    }
  }

  const handleEmailChange = () => {
    const isEmail = isValidEmail(userEmail)
    if (!isEmail) {
      setEmailError(true)
    } else {
      const newSettings = {...notifications}
      newSettings.email = {active: notifications.email.active, to: userEmail}
      updateNotifications(newSettings)
    }
  }

  return (
    <div style={{position: 'relative'}}>
      <InnerHeader
        head="Notifications"
        button=""
        back={back}
        setValues={setValues}
      />
      <Box>
        <Container className={classes.container}>
          <Grid>
            <Grid item sm={12} md={10} lg={8} xl={7}>
              <Box className={classes.platformWrap}>
                <Typography variant="body1" className={classes.platformTitle}>
                  Platform notifications
                </Typography>
                <Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    className={classes.activeNotification}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        style={{
                          fontFamily: 'Inter, Arial, sans-serif',
                          fontWeight: 600,
                        }}
                      >
                        Active notifications
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{
                          color: '#5A6987',
                          fontSize: theme.breakpoints.down(576)
                            ? '12px'
                            : undefined,
                        }}
                      >
                        For all activities (reservations, messages, comments,
                        etc.)
                      </Typography>
                    </Box>
                    <Box>
                      <Switch
                        checked={notifications.active}
                        onChange={handleChange}
                        name="active"
                        inputProps={{'aria-label': 'secondary checkbox'}}
                        color="primary"
                        classes={{
                          track: classes.switch_track,
                          switchBase: classes.switch_base,
                          colorPrimary: classes.switch_primary,
                        }}
                      />
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    className={classes.activeNotification}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        style={{
                          fontFamily: 'Inter, Arial, sans-serif',
                          fontWeight: 600,
                        }}
                      >
                        Send text send
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{
                          color: '#5A6987',
                          fontSize: theme.breakpoints.down(576)
                            ? '12px'
                            : undefined,
                        }}
                      >
                        For reservations only
                      </Typography>
                    </Box>
                    <Box>
                      <Switch
                        checked={notifications.text}
                        onChange={handleChange}
                        name="text"
                        inputProps={{'aria-label': 'secondary checkbox'}}
                        color="primary"
                        classes={{
                          track: classes.switch_track,
                          switchBase: classes.switch_base,
                          colorPrimary: classes.switch_primary,
                        }}
                      />
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    className={classes.activeNotification}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        style={{
                          fontFamily: 'Inter, Arial, sans-serif',
                          fontWeight: 600,
                        }}
                      >
                        Send an email
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{
                          color: '#5A6987',
                          fontSize: theme.breakpoints.down(576)
                            ? '12px'
                            : undefined,
                        }}
                      >
                        For all activities (reservations, messages, comments,
                        etc.)
                      </Typography>
                    </Box>
                    <Box>
                      <Switch
                        checked={notifications.email.active}
                        onChange={handleChange}
                        name="email"
                        inputProps={{'aria-label': 'secondary checkbox'}}
                        color="primary"
                        classes={{
                          track: classes.switch_track,
                          switchBase: classes.switch_base,
                          colorPrimary: classes.switch_primary,
                        }}
                      />
                    </Box>
                  </Box>
                  {emailError && (
                    <Typography variant="body2" style={{color: 'red'}}>
                      Please enter a valid email address
                    </Typography>
                  )}
                  <Box
                    className={classes.changeMail}
                    style={{
                      opacity: notifications.email.active ? 1 : 0.5,
                    }}
                  >
                    <Box
                      display="flex"
                      flexDirection={isSmallSize ? 'column' : 'row'}
                    >
                      <Typography variant="body2">
                        Send to e-mail address
                      </Typography>
                      {!isSmallSize && (
                        <Divider
                          orientation="vertical"
                          variant="middle"
                          flexItem
                        />
                      )}
                      <input
                        type="email"
                        name="to"
                        placeholder="erkantecim@gmail.com"
                        style={{
                          background: notifications.email.active
                            ? '#fff'
                            : '#F8F9FC',
                        }}
                        value={userEmail}
                        disabled={!notifications.email.active}
                        onChange={(e) => {
                          setUserEmail(e.target.value)
                          setEmailError(false)
                        }}
                      />
                    </Box>
                    {isSmallSize ? (
                      <Avatar
                        src={'/images/edit.png'}
                        className={classes.editIcon}
                        onClick={handleEmailChange}
                        style={{
                          pointerEvents: notifications.email.active
                            ? 'none'
                            : undefined,
                          cursor: 'pointer',
                        }}
                      />
                    ) : (
                      <AppButton
                        style={{
                          background: notifications.email.active
                            ? '#fff'
                            : '#F8F9FC',
                          cursor: 'pointer',
                        }}
                        className={classes.changeMailBtn}
                        onClick={handleEmailChange}
                        disabled={!notifications.email.active}
                      >
                        Change Mail
                      </AppButton>
                    )}
                  </Box>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    className={classes.platformTitle}
                    style={{marginBottom: '5px', marginTop: '32px'}}
                  >
                    Marketing notifications
                  </Typography>
                  <Typography className={classes.marketTitle}>
                    As a reminder of holidays etc.
                  </Typography>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    className={classes.activeNotification}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        style={{
                          fontFamily: 'Inter, Arial, sans-serif',
                          fontWeight: 600,
                        }}
                      >
                        Active notifications and emails
                      </Typography>
                      <Typography variant="body2" style={{color: '#5A6987'}}>
                        For all activities (reservations, messages, comments,
                        etc.)
                      </Typography>
                    </Box>
                    <Box>
                      <Switch
                        checked={notifications.marketing_notifications.active}
                        onChange={handleChange}
                        name="marketing"
                        inputProps={{'aria-label': 'secondary checkbox'}}
                        color="primary"
                        classes={{
                          track: classes.switch_track,
                          switchBase: classes.switch_base,
                          colorPrimary: classes.switch_primary,
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  )
}
export default Notification
