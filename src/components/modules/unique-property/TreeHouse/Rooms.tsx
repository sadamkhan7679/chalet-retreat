import {
  Box,
  makeStyles,
  Backdrop,
  IconButton,
  Typography,
  Avatar,
} from '@material-ui/core'
import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import AppDivider from 'src/components/elements/Divider'
export const useStyles = makeStyles(({breakpoints}) => ({
  wrappper: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    [breakpoints.up('md')]: {
      maxWidth: '456px',
    },
    [breakpoints.between('md', 'lg')]: {
      flexBasis: '50%',
    },
    [breakpoints.down('sm')]: {
      marginTop: '176px',
    },
  },

  button: {
    width: 'fit-content',
    borderRadius: '30px',
    position: 'absolute',
    background: '#fff',
    top: '275px',
    right: '15px',
    '&:hover': {
      color: '#fff',
    },
    [breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: '88px',
    },
  },

  imgSize: {
    // height: "134px",
    borderRadius: '15px',
  },

  grayColor: {
    color: '#5A6987',
    fontSize: '14px',
  },

  blackColor: {
    color: 'black',
    fontSize: '14px',
  },

  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: ' 16px',
  },

  topGap: {
    marginTop: '13px',
  },

  backdrop: {
    zIndex: 3000,
    color: '#fff',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backdropfunctionalityContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 760,
    display: 'flex',

    [breakpoints.down(769)]: {
      width: '90%',
    },
  },

  iconButton: {
    backgroundColor: '#fff',
    color: '#2E3543',
    margin: '0px',
    top: '20px',
    left: 'auto',
    bottom: 'auto',
    right: '20px',
    position: 'fixed',
  },
  backForwardIcon: {
    backgroundColor: '#fff',
    color: '#2E3543',
    alignItems: 'center',
    fontWeight: 'bold',
    padding: '20px',
    borderRadius: '50%',
    '&:hover': {
      backgroudColor: '#fff',
    },
  },

  backdropImagesContainer: {
    width: 550,
    height: 'auto',
    display: 'flex',
    top: '20%',
    borderRadius: 30,
  },

  mainDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    [breakpoints.down(426)]: {
      flexDirection: 'column',
    },
  },

  insideDiv: {
    border: '1px solid #EAEEF5',
    borderRadius: '12px',
    width: '40%',
    marginTop: '10px',
    [breakpoints.down(426)]: {
      width: '90%',
    },
  },

  backdropImages: {
    width: 550,
    height: 'auto',
    borderRadius: 30,
    // objectFit: 'contain'
  },
}))

type Props = {
  rooms: any
  visible: boolean
  handleClose: () => void
}

const getBedCount = (sleepingTypes: any) => {
  const keys = Object.keys(sleepingTypes)

  return keys.reduce(
    (prev, current) => sleepingTypes[prev] + sleepingTypes[current],
  )
}

const Rooms = ({rooms, visible, handleClose}: Props) => {
  const classes = useStyles()

  return (
    <Box className={classes.wrappper}>
      <Backdrop className={classes.backdrop} open={visible}>
        <Box className={classes.backdropfunctionalityContainer}>
          <Box
            style={{
              height: '450px',
              width: '700px',
              background: 'white',
              borderRadius: '24px',
              overflowY: 'scroll',
            }}
          >
            <Box style={{marginLeft: '20px', marginTop: '10px'}}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="h5" style={{color: 'black'}}>
                  {' '}
                  Rooms{' '}
                </Typography>
                <br />
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <AppDivider />
              <Box className={classes.mainDiv}>
                {rooms.map((room: any) => {
                  return (
                    <Box className={classes.insideDiv}>
                      <Box style={{margin: '15px'}}>
                        <Typography variant="h6" className={classes.blackColor}>
                          {room.name}
                        </Typography>
                        <Box style={{display: 'flex', flexDirection: 'row'}}>
                          <Avatar
                            src="/images/bedroom.png"
                            style={{width: '15px', height: '12px'}}
                          ></Avatar>
                          <Typography
                            variant="caption"
                            style={{marginLeft: '10px'}}
                            className={classes.grayColor}
                          >
                            {`${getBedCount(room.sleeping_types)} Beds`}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  )
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Backdrop>
    </Box>
  )
}

export default Rooms
