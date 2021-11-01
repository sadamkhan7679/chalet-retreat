import React from 'react'
import {Typography, Container, Box, Avatar, Button} from '@material-ui/core'

import {makeStyles} from '@material-ui/core/styles'
import {useSmallSize} from 'src/hooks/screenSize'

const useStyles = makeStyles(() => ({
  containerGrid: {
    maxWidth: '1600px',
    width: '100%',
  },
  personalInfo: {
    boxShadow: '0px 1px 0px #eaeef5',
    margin: '-24px -24px 0px -24px',
    padding: '16px 0px',
    '& h6': {
      fontSize: '18px',
      color: '#090F1B',
    },
  },
  leftArrow: {
    width: '12px',
    height: '12px',
    marginRight: '30px',
    marginLeft: '40px',
  },
  buttonSave: {
    background: '#F8F9FC',
    borderRadius: '24px',
    color: '#D7DDEA',
    padding: '8px 16px',
  },
}))
export default function Header({
  head,
  button,
  back,
  setValues,
  handleSaveClick,
}: any) {
  const classes = useStyles()
  const isSmallSize = useSmallSize()
  const handleClick = () => {
    if (
      back == 'personal' ||
      back == 'security' ||
      back == 'payment' ||
      back == 'notification' ||
      back == 'Host'
    ) {
      setValues('')
    }
  }

  return (
    <Box className={classes.personalInfo}>
      <Container className={classes.containerGrid}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" onClick={handleClick}>
            <Avatar
              src={'/images/leftArrow.png'}
              className={classes.leftArrow}
              style={{
                marginLeft: isSmallSize ? '20px' : undefined,
                marginRight: isSmallSize ? '24px' : undefined,
              }}
            />
            <Typography
              variant="body1"
              style={{fontWeight: 600, fontSize: '18px'}}
            >
              {head}
            </Typography>
          </Box>
          <Box
            style={{
              display:
                isSmallSize || back === 'notification' ? 'none' : undefined,
            }}
          >
            <Button
              className={classes.buttonSave}
              onClick={handleSaveClick}
              style={{background: '#1DAF92', color: '#FFFFFF'}}
            >
              {button}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
