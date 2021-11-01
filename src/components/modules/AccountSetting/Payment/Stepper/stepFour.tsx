import React from 'react'

import {Typography, Grid, Box} from '@material-ui/core'

import {useStylesSteps} from '../styles'

const StepFour = () => {
  const classes = useStylesSteps()

  return (
    <Grid>
      <Grid
        item
        xs={12}
        md={8}
        lg={6}
        xl={4}
        style={{margin: '40px auto 0px auto'}}
      >
        <Box className={classes.confirmAccount}>
          <Typography className={classes.stepTitle}>
            Confirm your account details
          </Typography>
          <Box
            className={classes.accountTitle}
            style={{boxShadow: '0px 1px 0px #eaeef5', paddingBottom: '16px'}}
          >
            <Typography>Payment method</Typography>
            <input
              type="next"
              placeholder="Bank transfer in CAD"
              style={{paddingLeft: '0px'}}
            />
          </Box>
          <Box
            className={classes.accountTitle}
            style={{boxShadow: '0px 1px 0px #eaeef5', paddingBottom: '16px'}}
          >
            <Typography>Bank account type</Typography>
            <input
              type="next"
              placeholder="Verification"
              style={{paddingLeft: '0px'}}
            />
          </Box>
          <Box
            className={classes.accountTitle}
            style={{boxShadow: '0px 1px 0px #eaeef5', paddingBottom: '16px'}}
          >
            <Typography>Name of the account holder</Typography>
            <input
              type="next"
              placeholder="Erkan Tecim"
              style={{paddingLeft: '0px'}}
            />
          </Box>
          <Box
            className={classes.accountTitle}
            style={{boxShadow: '0px 1px 0px #eaeef5', paddingBottom: '16px'}}
          >
            <Typography>Name of the bank</Typography>
            <input
              type="next"
              placeholder="National Bank"
              style={{paddingLeft: '0px'}}
            />
          </Box>
          <Box
            className={classes.accountTitle}
            style={{boxShadow: '0px 1px 0px #eaeef5', paddingBottom: '16px'}}
          >
            <Typography>Transit number</Typography>
            <input type="next" placeholder="123" style={{paddingLeft: '0px'}} />
          </Box>
          <Box
            className={classes.accountTitle}
            style={{boxShadow: '0px 1px 0px #eaeef5', paddingBottom: '16px'}}
          >
            <Typography>Financial Institution number</Typography>
            <input type="next" placeholder="123" style={{paddingLeft: '0px'}} />
          </Box>
          <Box
            className={classes.accountTitle}
            style={{boxShadow: '0px 1px 0px #eaeef5', paddingBottom: '16px'}}
          >
            <Typography>Account number</Typography>
            <input
              type="next"
              placeholder="3248239823"
              style={{paddingLeft: '0px'}}
            />
          </Box>
          <Box
            className={classes.accountTitle}
            style={{boxShadow: '0px 1px 0px #eaeef5', paddingBottom: '16px'}}
          >
            <Typography>Account address</Typography>
            <input
              type="next"
              placeholder="170 Chemin de Blue Hills, Morin-Heights, Québec, J0R 1H0"
              style={{paddingLeft: '0px'}}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
export default StepFour
