import React from 'react'
import Box from '@material-ui/core/Box'
import clsx from 'clsx'
import {Avatar, Grid, Typography} from '@material-ui/core'
import {getTitleFromSlug} from 'src/utils/accountSettings'

interface Props {
  classes: any
  setEditvalue: React.Dispatch<React.SetStateAction<string>>
  PropertyData: any
}

const PropertyRules: React.FC<Props> = ({
  classes,
  setEditvalue,
  PropertyData,
}) => {
  return (
    <Box className={clsx(classes.container, classes.propertyTopbar)}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" className={classes.photosTitle}>
          Rules
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          onClick={() => {
            setEditvalue('regulation')
          }}
        >
          <Avatar src={'/images/edit.png'} className={classes.editIcon} />
          <Typography className={classes.editTitle}>Edit</Typography>
        </Box>
      </Box>
      <Box>
        <Box className={classes.expectation}>
          {PropertyData.regulations?.map((data: any) => (
            <Box className={classes.customList}>
              <Typography className={classes.addressContents}>
                {getTitleFromSlug(data)}
              </Typography>
              <Avatar src={'/images/YesFill.png'} className={classes.yesIcon} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default PropertyRules
