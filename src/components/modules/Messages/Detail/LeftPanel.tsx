import React from 'react'
import {Box, Typography, Button, Avatar, Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'
import AppTextField from 'src/components/elements/TextField'

export const useStyles = makeStyles(({palette}) => ({
  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  cancelBtn: {
    color: palette.error.main,
  },
  sendAnotherRequestBtn: {
    color: 'white',
    backgroundColor: '#000000',
    borderRadius: '24px',
  },
  description: {
    color: '#5A6987',
    fontSize: 12,
    lineHeight: '16px',
    paddingTop: '32px',
    paddingBottom: '32px',
  },
  otherDescription: {
    color: '#5A6987',
    fontSize: 12,
    lineHeight: '16px',
    paddingTop: '32px',
    paddingBottom: '32px',
  },
  date: {
    fontSize: 12,
    lineHeight: '16px',
    color: '#090F1B',
    textAlign: 'center',
    marginBottom: 16,
  },
  messageItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
  },
  name: {
    fontSize: 16,
    lineHeight: '24px',
    color: '#090F1B',
  },
  message: {
    fontSize: 14,
    lineHeight: '24px',
    color: '#252E41',
  },
  messageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '8px',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
}))

const MessageItem = ({classes}: any) => {
  return (
    <Box className={classes.messageItem}>
      <Avatar />
      <Box>
        <Typography className={classes.name}>Cynthia Johnson</Typography>
        <Typography className={classes.message}>
          Hello, can I get detailed information about your house?
        </Typography>
      </Box>
    </Box>
  )
}

const LeftPanel = () => {
  const classes = useStyles()

  return (
    <Box className={classes.leftContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography>Your reservation is pending!</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Button variant="text" className={classes.sendAnotherRequestBtn}>
            Send another request
          </Button>
          <Button variant="text" className={classes.cancelBtn}>
            Cancel
          </Button>
        </Grid>
      </Grid>
      <Box>
        <Typography className={classes.description}>
          Luc Bernier, is at your disposal to answer any questions you have
          about your potential stay.
        </Typography>
        <Typography className={classes.otherDescription}>
          For your safety, never communicate or make transactions other than on
          ChaletRetreat.
          <br />
          Visit our help center to learn more about the benefits of
          ChaletRetreat reservations.
        </Typography>
      </Box>
      <Box className={classes.messageContainer}>
        <Box>
          <Typography className={classes.date}>9 Sep 2021</Typography>
          <MessageItem classes={classes} />
        </Box>
        <AppTextField label="" optional placeholder="Message" />
      </Box>
    </Box>
  )
}

export default LeftPanel
