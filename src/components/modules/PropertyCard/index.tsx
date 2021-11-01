import React from 'react'
import {Box, Typography} from '@material-ui/core'
import {Star} from '@material-ui/icons'
import {useRouter} from 'next/router'
import AppImage from 'src/components/elements/Image'
import {useStyles} from './styles'

const PropertyCard = ({data}: any) => {
  const classes = useStyles()
  const router = useRouter()

  const handleGetProperty = (_id: any) => router.push(`/unique-property/${_id}`)

  return (
    <Box
      className={classes.container}
      onClick={() => handleGetProperty(data?.id)}
    >
      <AppImage
        src={`${
          data.photos.length
            ? data.photos[0].image.url
            : '/images/free-booking.png'
        }`}
        alt="Property Name"
        className={classes.image}
      />
      <Box>
        <Box className={classes.flexContainer}>
          <Typography variant="body2" color="textSecondary">
            Entire accommodation {data?.number_of_beds} bed(s)
          </Typography>
          <Typography
            style={{display: 'flex', gap: '4px', alignItems: 'center'}}
            variant="body2"
          >
            <Star fontSize="inherit" color="primary" />
            <Typography variant="inherit" color="primary">
              3.6
            </Typography>
            <Typography variant="inherit" color="textSecondary">
              (4)
            </Typography>
          </Typography>
        </Box>
        <Box className={classes.flexContainer}>
          <Typography variant="h6">{data.name}</Typography>
          {data.base_rate && (
            <Typography>{`$${data.base_rate}/night`}</Typography>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default PropertyCard
