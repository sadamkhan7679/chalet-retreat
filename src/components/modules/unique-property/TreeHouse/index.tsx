import React from 'react'
import {Box, Container} from '@material-ui/core'
// import FreeBookingImageSection from "./ImageSection";
// import FreeBookingTextSection from "./TextSection";
import {useStyles} from './styles'

const FreeBooking = () => {
  const classes = useStyles()
  return (
    <Container className={classes.root} maxWidth="lg">
      <Box className={classes.flexWrapper}>
        {/* <FreeBookingImageSection />
        <FreeBookingTextSection /> */}
      </Box>
    </Container>
  )
}

export default FreeBooking
