import React from 'react'
import {Box, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles({
  rightContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  name: {
    color: '#090F1B',
    fontSize: 16,
    lineHeight: '24px',
  },
  address: {
    color: '#5A6987',
    fontSize: 12,
    lineHeight: '20px',
  },
  informationContainer: {
    marginTop: 48,
  },
  title: {
    color: '#090F1B',
    fontSize: 18,
    lineHeight: '32px',
  },
  detailContainer: {
    marginTop: 16,
  },
  detailItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailItemTitle: {
    color: '#364259',
    fontSize: 14,
    lineHeight: '24px',
  },
  detailItemValue: {
    color: '#1A2232',
    fontSize: 14,
    lineHeight: '24px',
  },
})

const RightPanel = () => {
  const classes = useStyles()

  return (
    <Box className={classes.rightContainer}>
      <Typography>Property</Typography>
      <img src="/images/property.png" alt="free booking image" />
      <Typography className={classes.name}>
        Manoir-434 & Chalet à louer Charlevoix
      </Typography>
      <Typography className={classes.address}>
        Petite-Rivière-Saint-François, Canada
      </Typography>
      <Box className={classes.informationContainer}>
        <Typography className={classes.title}>Booking Informations</Typography>
        <Box className={classes.detailContainer}>
          <Box className={classes.detailItem}>
            <Typography className={classes.detailItemTitle}>Arrival</Typography>
            <Typography className={classes.detailItemValue}>
              8 Sep 2020
            </Typography>
          </Box>
          <Box className={classes.detailItem}>
            <Typography className={classes.detailItemTitle}>
              Departure
            </Typography>
            <Typography className={classes.detailItemValue}>
              13 Sep 2020
            </Typography>
          </Box>
          <Box className={classes.detailItem}>
            <Typography className={classes.detailItemTitle}>
              Number of nights
            </Typography>
            <Typography className={classes.detailItemValue}>5</Typography>
          </Box>
          <Box className={classes.detailItem}>
            <Typography className={classes.detailItemTitle}>
              Number of rooms
            </Typography>
            <Typography className={classes.detailItemValue}>5</Typography>
          </Box>
          <Box className={classes.detailItem}>
            <Typography className={classes.detailItemTitle}>
              Number of guests
            </Typography>
            <Typography className={classes.detailItemValue}>5</Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.informationContainer}>
        <Typography className={classes.title}>Bills</Typography>
        <Box className={classes.detailContainer}>
          <Box className={classes.detailItem}>
            <Typography className={classes.detailItemTitle}>
              C$199.00 x 5 nights
            </Typography>
            <Typography className={classes.detailItemValue}>$995.00</Typography>
          </Box>
          <Box className={classes.detailItem}>
            <Typography className={classes.detailItemTitle}>
              Cleaning fee
            </Typography>
            <Typography className={classes.detailItemValue}>$50.00</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default RightPanel
