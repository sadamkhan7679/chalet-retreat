import React from 'react'
import Box from '@material-ui/core/Box'
import clsx from 'clsx'
import {Avatar, Typography} from '@material-ui/core'
import {getTitleFromSlug} from 'src/utils/accountSettings'

interface Props {
  classes: any
  setEditvalue: React.Dispatch<React.SetStateAction<string>>
  PropertyData: any
}

const ExpectationAndSecurity: React.FC<Props> = ({
  classes,
  setEditvalue,
  PropertyData,
}) => {
  return (
    <Box className={clsx(classes.container, classes.propertyTopbar)}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" className={classes.photosTitle}>
          Customer expectation and security
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          onClick={() => {
            setEditvalue('expectationandsecurity')
          }}
        >
          <Avatar src={'/images/edit.png'} className={classes.editIcon} />
          <Typography className={classes.editTitle}>Edit</Typography>
        </Box>
      </Box>
      <Box>
        <Typography style={{margin: '30px 0px 10px 0px', lineHeight: '24px'}}>
          Customer expectation
        </Typography>
        <Box className={classes.expectation}>
          {PropertyData.customer_expectations?.map((data: any) => (
            <Box className={classes.customList}>
              <Typography className={classes.addressContents}>
                {getTitleFromSlug(data)}
              </Typography>
              <Avatar src={'/images/YesFill.png'} className={classes.yesIcon} />
            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        <Typography style={{margin: '30px 0px 10px 0px', lineHeight: '24px'}}>
          Security
        </Typography>
        <Box className={classes.expectation}>
          {PropertyData.securities?.map((data: any) => (
            <Box className={classes.customList}>
              <Typography className={classes.addressContents}>
                {getTitleFromSlug(data)}
              </Typography>
              <Avatar src={'/images/YesFill.png'} className={classes.yesIcon} />
            </Box>
          ))}
          {PropertyData.securities?.map((data: any) => (
            <Box className={classes.customList}>
              <Typography className={classes.addressContents}>
                {getTitleFromSlug(data)}
              </Typography>
              <Avatar src={'/images/YesFill.png'} className={classes.yesIcon} />
            </Box>
          ))}
          {PropertyData.securities?.map((data: any) => (
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

export default ExpectationAndSecurity
