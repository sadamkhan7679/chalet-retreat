import React from 'react'
import {
  Box,
  Typography,
  Grid,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import {useStylesSteps} from '../styles'
import Menu from '@mui/material/Menu'
interface Props {
  values?: string
  handleChanges?: (values?: any) => void
}

const countryOptions = [
  {name: 'Canada', flag: '/images/canada.svg'},
  {name: 'United States', flag: '/images/united-states.svg'},
]

const StepOne: React.FC<Props> = () => {
  const classes = useStylesSteps()

  const [activeCountry, setActiveCountry] = React.useState(0)

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const bankTransferLabel = `Bank transfer in ${
    activeCountry === 0 ? 'CAD' : 'USD'
  }`
  const paypalLabel = `Paypal in ${activeCountry === 0 ? 'CAD' : 'USD'}`

  const [values, setValues] = React.useState(bankTransferLabel)

  const handleChanges = (event: any) => {
    console.log(event.target)
    setValues(event.target.value)
  }

  return (
    <Grid
      item
      //sm={12}
      xs={12}
      md={8}
      lg={6}
      xl={4}
      style={{margin: '40px auto 0px auto'}}
    >
      <div>
        <Box
          id="region-button"
          aria-controls="region-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          className={classes.countryMenuTrigger}
        >
          <Box style={{display: 'flex'}}>
            <img
              src={countryOptions[activeCountry].flag}
              alt={countryOptions[activeCountry].name}
              style={{marginRight: '10px'}}
            />
            <Typography variant="body2">
              {countryOptions[activeCountry].name}
            </Typography>
          </Box>
          <img src="/images/arrow-drop-down-fill.svg" alt="dropdown-icon" />
        </Box>
        <Menu
          id="region-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          className={classes.countryMenuWrapper}
        >
          {countryOptions.map((country, index) => {
            return (
              index !== activeCountry && (
                <Box
                  style={{display: 'flex'}}
                  onClick={() => {
                    setActiveCountry(index)
                    handleClose()
                  }}
                >
                  <img
                    src={country.flag}
                    alt={country.name}
                    style={{marginRight: '10px'}}
                  />
                  <Typography variant="body2">{country.name}</Typography>
                </Box>
              )
            )
          })}
        </Menu>
      </div>

      {/* <Box className={classes.textField}>
        <TextField id="select" value="20" select>
          <MenuItem value="10">UK</MenuItem>
          <MenuItem value="20">Canada</MenuItem>
        </TextField>
      </Box> */}
      <Box>
        <Typography
          variant="h6"
          style={{
            fontSize: '18px',
            fontWeight: 600,
            fontFamily: 'Inter, Arial, sans-serif',
            marginBottom: '15px',
          }}
        >
          Payment methods for {countryOptions[activeCountry].name}
        </Typography>
        <Box>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="payment_methods"
              name="payment_methods"
              value={values}
              onChange={handleChanges}
            >
              <FormControlLabel
                value={paypalLabel}
                control={<Radio />}
                label={paypalLabel}
                className={classes.formListLabel}
              />
              <Box>
                <List className={classes.listForm}>
                  <ListItem>
                    <ListItemText primary=" Receive your payment in 3 to 4 hours " />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Connect your PayPal account" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="May include fees" />
                  </ListItem>
                </List>
              </Box>
              <FormControlLabel
                value={bankTransferLabel}
                control={<Radio />}
                label={bankTransferLabel}
                className={classes.formListLabel}
              />
              <Box>
                <List className={classes.listForm}>
                  <ListItem>
                    <ListItemText primary="Receive your payment in 5-7 business days" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Weekends and holidays may extend the processing time" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="No fees" />
                  </ListItem>
                </List>
              </Box>
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </Grid>
  )
}
export default StepOne
