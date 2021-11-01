import React from 'react'
import Box from '@material-ui/core/Box'
import clsx from 'clsx'
import {Avatar, Grid, Typography} from '@material-ui/core'

interface Props {
  classes: any
  setEditvalue: React.Dispatch<React.SetStateAction<string>>
  PropertyData: any
}

const PropertyType: React.FC<Props> = ({
  classes,
  setEditvalue,
  PropertyData,
}) => {
  return (
    <Box
      className={clsx(classes.container, classes.propertyTopbar)}
      //className={classes.photos}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" className={classes.photosTitle}>
          Property Type
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          onClick={() => {
            setEditvalue('propertytype')
          }}
        >
          <Avatar src={'/images/edit.png'} className={classes.editIcon} />
          <Typography className={classes.editTitle}>Edit</Typography>
        </Box>
      </Box>
      <Box className={classes.propertyType}>
        <Typography className={classes.addressContents}>
          {PropertyData.property_type1}
        </Typography>
        <Typography className={classes.addressContents}>
          {PropertyData.property_type2}
        </Typography>
      </Box>
    </Box>
  )
}

export default PropertyType
