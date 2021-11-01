import React from 'react'
import {Box, Typography} from '@material-ui/core'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'

import {makeStyles} from '@material-ui/core/styles'
import {useTheme} from '@material-ui/styles'
import {interFontFamily} from 'src/components/foundation/typography'
import Divider from '@mui/material/Divider'

export const useStyles = makeStyles((theme) => ({
  propertyHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 80px',
    width: '100%',
    // maxWidth: '1440px',
    height: '88px',
    background: '#FFFFFF',
    boxShadow: '0px 1px 0px #EAEEF5',
    margin: '1px auto',
  },
  mainTitle: {
    fontFamily: interFontFamily,
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '18px',
    color: '#1A2232',
    margin: '4px 0px',
  },
  searchBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '8px 16px 8px 8px',
    width: '100%',
    maxWidth: '248px',
    height: '40px',
    background: '#FFFFFF',
    border: '1px solid #EAEEF5',
    borderRadius: '24px',
    '& .MuiInput-underline': {
      border: 'none !important',
    },
  },
  caption: {
    color: theme.palette.text.secondary,
    fontWeight: 400,
    lineHeight: '20px',
  },
}))

interface Props {
  allProperty: any
}

const MyPropertyHeader: React.FC<Props> = ({allProperty}) => {
  const classes = useStyles()
  const theme = useTheme()

  console.log('theme', theme)

  return (
    <>
      <Box className={classes.propertyHeaderWrapper}>
        <Box>
          <Typography variant="h5" className={classes.mainTitle}>
            Properties
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            You have {allProperty?.total} properties
          </Typography>
        </Box>
        <Box>
          <TextField
            id="search-input-field"
            className={classes.searchBox}
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src="/images/search-line.svg" alt="search-icon" />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
      <Divider />
    </>
  )
}

export default MyPropertyHeader
