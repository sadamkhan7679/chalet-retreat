import React from 'react'
import Box from '@material-ui/core/Box'
import clsx from 'clsx'
import {Avatar, Grid, Typography} from '@material-ui/core'

interface Props {
  classes: any
  setEditvalue: React.Dispatch<React.SetStateAction<string>>
  PropertyData: any
}

const CancellationPolicy: React.FC<Props> = ({
  classes,
  setEditvalue,
  PropertyData,
}) => {
  return (
    <Box
      className={clsx(classes.container, classes.propertyTopbar)}
      // className={classes.policy}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" className={classes.photosTitle}>
          Cancellation policy
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          onClick={() => {
            setEditvalue('policy')
          }}
        >
          <Avatar src={'/images/edit.png'} className={classes.editIcon} />
          <Typography className={classes.editTitle}>Edit</Typography>
        </Box>
      </Box>
      <Box>
        <Grid className={classes.propDesc}>
          <Grid
            item
            xl={2}
            lg={2}
            xs={12}
            // className={classes.propTitle}
          >
            <Typography className={classes.addTitle}>POLICY TYPE</Typography>
          </Grid>
          <Grid item xl={6} lg={6} xs={12}>
            <Typography variant="h6" className={classes.flexible}>
              {PropertyData.cancellation_policy_type}
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.propDesc}>
          <Grid
            item
            xl={2}
            lg={2}
            xs={12}
            // className={classes.propTitle}
          >
            <Typography className={classes.addTitle}>
              POLICY DESCRIPTION
            </Typography>
          </Grid>
          <Grid item xl={5} lg={5} xs={12}>
            <Typography variant="h6" className={classes.addressContents}>
              You will receive a full refund as long as you cancel at least 48
              hours prior to check-in. You will receive a full refund, less the
              first night, if you cancel within 48 hours of check-in.
            </Typography>
            <Typography variant="h6" className={classes.policyDetail}>
              Any refund will be at the discretion of the host if you cancel
              after check-in.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default CancellationPolicy
