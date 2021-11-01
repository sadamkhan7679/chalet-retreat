import React, {useEffect} from 'react'
import {useStyles} from './styles'
import DiscoverProperties from 'src/components/modules/home/DiscoverProperties/index'
import {
  Box,
  Container,
  Avatar,
  Typography,
  Grid,
  Tab,
  Tabs,
  AppBar,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import Photo from 'src/components/modules/AccountSetting/EditProperties/Photo'
import Address from 'src/components/modules/AccountSetting/EditProperties/Address'
import Description from 'src/components/modules/AccountSetting/EditProperties/Description'
import Guest from 'src/components/modules/AccountSetting/EditProperties/Guest'
import Amenities from 'src/components/modules/AccountSetting/EditProperties/Amenities'
import Propertytype from 'src/components/modules/AccountSetting/EditProperties/Propertytype'
import Expectationandsecurity from 'src/components/modules/AccountSetting/EditProperties/Expectationandsecurity'
import Regulation from 'src/components/modules/AccountSetting/EditProperties/Regulation'
import Policy from 'src/components/modules/AccountSetting/EditProperties/Policy'
import RentalParameters from 'src/components/modules/AccountSetting/EditProperties/RentalParameters'
import PropertyPricing from './PropertyPricing'
import PropertyTaxes from './propertyTaxes'
import PropertyGuest from './PropertyGuest'
import PropertyCalender from './PropertyCalender'
import BasicPricing from 'src/components/modules/AccountSetting/EditProperties/BasicPricing'
import BasicFee from 'src/components/modules/AccountSetting/EditProperties/BasicFee'
import TaxesAndRegistrarion from 'src/components/modules/AccountSetting/EditProperties/TaxesAndRegistration'
import GuestNumber from '../../../EditProperties/GuestsNumber'
import GuestReception from '../../../EditProperties/GuestReception'
import CalendarImportDialog from 'src/components/modules/AccountSetting/EditProperties/ImportDialouge'
import CalendarExportDialog from 'src/components/modules/AccountSetting/EditProperties/ExportDialouge'
import clsx from 'clsx'
import Divider from '@mui/material/Divider'

// import
import {getAllAmenities} from 'src/utils/searchProperties'
import PropertyDescription from './components/PropertyDescription'
import GuestArea from './components/GuestArea'
import PropertyAmenities from './components/PropertyAmenities'
import PropertyType from './components/PropertyType'
import ExpectationAndSecurity from './components/ExpectationAndSecurity'
import PropertyRules from './components/Rules'
import CancellationPolicy from './components/CancellationPolicy'

const TabPanel = (props: any) => {
  const {children, value, index, ...other} = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  )
}

const a11yProps = (index: any) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  }
}

export default function MyPropertyDetails({
  allSingleProperty,
  activeProperty,
  setActiveProperty,
}: any) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const [editvalue, setEditvalue]: any = React.useState('')
  const [PropertyData, setPropertyData]: any = React.useState(activeProperty)
  // console.log(PropertyData, '-----PropertyDataPropertyDataPropertyData---')
  const amenities = getAllAmenities()

  console.log('amenities', amenities)
  // console.log(allSingleProperty, setPropertyData)

  function handleChange(event: any, newValue: any) {
    console.log(event)
    setValue(newValue)
  }

  // useEffect(() => {
  //   getPropertiesById(allSingleProperty)
  //     .then((d) => {
  //       setPropertyData(d)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])
  // console.log(editvalue, 'editvalueeditvalue')
  // function slugToTitle(slug: string) {
  //   const title = slug.replace('_', ' ')
  //   return title
  // }

  console.log('active', activeProperty)
  return (
    <>
      {editvalue !== 'address' ||
      editvalue !== 'description' ||
      editvalue !== 'expectationandsecurity' ||
      editvalue !== 'description' ||
      editvalue !== 'guest' ||
      editvalue !== 'photo' ||
      editvalue !== 'address' ||
      editvalue !== 'propertytype' ||
      editvalue !== 'regulation' ||
      editvalue !== 'amenities' ||
      editvalue !== 'Rental parameters' ||
      editvalue !== 'Basic Pricing' ||
      editvalue !== 'Basic Fee' ||
      editvalue !== 'Taxes and registration' ||
      editvalue !== 'What number can guest use for support?' ||
      editvalue !== "Guest's Reception" ||
      editvalue !== 'Import' ||
      editvalue !== 'Export' ? (
        <div
          className={
            editvalue == 'photo' ||
            editvalue == 'address' ||
            editvalue == 'description' ||
            editvalue == 'expectationandsecurity' ||
            editvalue == 'description' ||
            editvalue == 'guest' ||
            editvalue == 'photo' ||
            editvalue == 'propertytype' ||
            editvalue == 'regulation' ||
            editvalue == 'policy' ||
            editvalue == 'amenities' ||
            editvalue == 'Rental parameters' ||
            editvalue == 'Basic Pricing' ||
            editvalue == 'Basic Fee' ||
            editvalue == 'Taxes and registration' ||
            editvalue == 'What number can guest use for support?' ||
            editvalue == "Guest's Reception" ||
            editvalue == 'Import' ||
            editvalue == 'Export'
              ? `${classes.hide}`
              : ``
          }
        >
          <Box className={classes.personalInfo}>
            <Container
              className={clsx(classes.container, classes.propertyTopbar)}
            >
              <Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  style={{paddingBottom: '25px'}}
                  onClick={() => {
                    // setPropertyName(false)
                    setActiveProperty(null)
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <Avatar
                      src={'/images/leftArrow.png'}
                      className={classes.leftArrow}
                    />
                    <Typography variant="h6">Property Name</Typography>
                  </Box>
                </Box>
                <Box>
                  <div>
                    <AppBar
                      position="static"
                      color="default"
                      className={classes.tabAppbar}
                    >
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                      >
                        <Tab label="Details" {...a11yProps(0)} />
                        <Tab label="Pricing" {...a11yProps(1)} />
                        <Tab label="Calendar" {...a11yProps(2)} />
                        <Tab label="Taxes and registration" {...a11yProps(3)} />
                        <Tab label="Guests" {...a11yProps(4)} />
                      </Tabs>
                    </AppBar>
                  </div>
                </Box>
              </Box>
              {/* ) : (
                ""
              )} */}
            </Container>
          </Box>
          {editvalue !== ('guest' || 'photo' || 'address') ? (
            <Box
            // className={classes.container}
            >
              <TabPanel value={value} index={0}>
                <Box
                //className={classes.photos}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    className={clsx(classes.container, classes.propertyTopbar)}
                    style={{boxShadow: 'none'}}
                  >
                    <Typography variant="h6" className={classes.photosTitle}>
                      Photos
                    </Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      onClick={() => {
                        setEditvalue('photo')
                      }}
                    >
                      <Avatar
                        src={'/images/edit.png'}
                        className={classes.editIcon}
                      />
                      <Typography className={classes.editTitle}>
                        Edit
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={'slider wrapper'}>
                    <DiscoverProperties />
                  </Box>
                </Box>
                <Box
                  //className={classes.photos}
                  className={clsx(classes.container, classes.propertyTopbar)}
                >
                  <Divider style={{margin: '40px 0px'}} />
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6" className={classes.photosTitle}>
                      Address
                    </Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      onClick={() => {
                        setEditvalue('address')
                      }}
                    >
                      <Avatar
                        src={'/images/edit.png'}
                        className={classes.editIcon}
                      />
                      <Typography className={classes.editTitle}>
                        Edit
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={classes.addressDetail}>
                    <Typography variant="button" className={classes.textNormal}>
                      {PropertyData.full_address}
                    </Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      className={classes.addressTip}
                    >
                      <Avatar
                        src={'/images/infoIcon.png'}
                        className={classes.infoIcon}
                      />
                      <Typography
                        variant="button"
                        className={classes.addressContents}
                      >
                        Only travelers with confirmed reservations will be able
                        to see this marker corresponding to your address.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <PropertyDescription
                  classes={classes}
                  setEditvalue={setEditvalue}
                />
                <GuestArea classes={classes} setEditvalue={setEditvalue} />
                <PropertyAmenities
                  classes={classes}
                  setEditvalue={setEditvalue}
                  PropertyData={PropertyData}
                />
                <PropertyType
                  classes={classes}
                  setEditvalue={setEditvalue}
                  PropertyData={PropertyData}
                />
                <ExpectationAndSecurity
                  classes={classes}
                  setEditvalue={setEditvalue}
                  PropertyData={PropertyData}
                />

                <PropertyRules
                  classes={classes}
                  setEditvalue={setEditvalue}
                  PropertyData={PropertyData}
                />
                <CancellationPolicy
                  classes={classes}
                  setEditvalue={setEditvalue}
                  PropertyData={PropertyData}
                />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <PropertyPricing setEditvalue={setEditvalue} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <PropertyCalender setEditvalue={setEditvalue} />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <PropertyTaxes setEditvalue={setEditvalue} />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <PropertyGuest setEditvalue={setEditvalue} />
              </TabPanel>
            </Box>
          ) : (
            ''
          )}
        </div>
      ) : (
        ''
      )}
      {editvalue == 'photo' ? <Photo setEditvalue={setEditvalue} /> : ''}
      {editvalue == 'address' ? <Address setEditvalue={setEditvalue} /> : ''}
      {editvalue == 'description' ? (
        <Description setEditvalue={setEditvalue} />
      ) : (
        ''
      )}
      {editvalue == 'guest' ? <Guest setEditvalue={setEditvalue} /> : ''}
      {editvalue == 'amenities' ? (
        <Amenities setEditvalue={setEditvalue} />
      ) : (
        ''
      )}
      {editvalue == 'propertytype' ? (
        <Propertytype setEditvalue={setEditvalue} />
      ) : (
        ''
      )}
      {editvalue == 'expectationandsecurity' ? (
        <Expectationandsecurity setEditvalue={setEditvalue} />
      ) : (
        ''
      )}
      {editvalue == 'regulation' ? (
        <Regulation setEditvalue={setEditvalue} />
      ) : (
        ''
      )}
      {editvalue == 'policy' ? <Policy setEditvalue={setEditvalue} /> : ''}
      {editvalue == 'Rental parameters' ? (
        <RentalParameters setEditvalue={setEditvalue} />
      ) : (
        ''
      )}
      {editvalue == 'Basic Pricing' ? (
        <BasicPricing setEditvalue={setEditvalue} />
      ) : (
        ''
      )}
      {editvalue == 'Basic Fee' ? <BasicFee setEditvalue={setEditvalue} /> : ''}
      {editvalue == 'Taxes and registration' ? (
        <TaxesAndRegistrarion setEditvalue={setEditvalue} />
      ) : (
        ''
      )}
      {editvalue == 'What number can guest use for support?' ? (
        <GuestNumber setEditvalue={setEditvalue} />
      ) : (
        ''
      )}
      {editvalue == "Guest's Reception" ? (
        <GuestReception setEditvalue={setEditvalue} />
      ) : (
        ''
      )}
      {editvalue == 'Import' ? (
        <CalendarImportDialog
          open={editvalue == 'Import'}
          onClose={() => setEditvalue('')}
          onImport={() => setEditvalue('')}
        />
      ) : (
        ''
      )}
      {editvalue == 'Export' ? (
        <CalendarExportDialog
          open={editvalue == 'Export'}
          onClose={() => setEditvalue('')}
        />
      ) : (
        ''
      )}
    </>
  )
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}
