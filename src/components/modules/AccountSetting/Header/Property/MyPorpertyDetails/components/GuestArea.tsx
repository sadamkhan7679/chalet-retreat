import React from 'react'
import Box from '@material-ui/core/Box'
import clsx from 'clsx'
import {Avatar, Grid, Typography} from '@material-ui/core'

interface Props {
  classes: any
  setEditvalue: React.Dispatch<React.SetStateAction<string>>
}

const GuestArea: React.FC<Props> = ({classes, setEditvalue}) => {
  return (
    <Box
      //className={classes.photos}
      className={clsx(classes.container, classes.propertyTopbar)}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" className={classes.photosTitle}>
          Guests area
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          onClick={() => {
            setEditvalue('guest')
          }}
        >
          <Avatar src={'/images/edit.png'} className={classes.editIcon} />
          <Typography className={classes.editTitle}>Edit</Typography>
        </Box>
      </Box>
      <Box>
        <Grid className={classes.guestDesc}>
          <Grid item xl={3} md={5} xs={12}>
            <Box className={classes.guestArea}>
              <Typography className={classes.guest}>Common area</Typography>
              <Typography className={classes.guestTitle}>7 beds</Typography>
            </Box>
          </Grid>
          <Grid item xl={3} md={5} xs={12}>
            <Box className={classes.guestArea}>
              <Typography className={classes.guest}>Small room</Typography>
              <Typography className={classes.guestTitle}>2 beds</Typography>
            </Box>
          </Grid>
          <Grid item xl={3} md={5} xs={12}>
            <Box className={classes.guestArea}>
              <Typography className={classes.guest}>Parents bedroom</Typography>
              <Typography className={classes.guestTitle}>1 beds</Typography>
            </Box>
          </Grid>
          <Grid item xl={3} md={5} xs={12}>
            <Box className={classes.guestArea} style={{marginRight: '0 '}}>
              <Typography className={classes.guest}>Salon</Typography>
              <Typography className={classes.guestTitle}>1 beds</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default GuestArea
