import React, {useState} from 'react'
import {Box, Button, Container, Typography, Avatar} from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star'
import StarHalfIcon from '@material-ui/icons/StarHalf'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {GoogleMap, Marker} from '@react-google-maps/api'
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import {DateRange} from '@mui/lab/DateRangePicker'
import TextField from '@mui/material/TextField'
import HeadContent from 'src/hoc/headContent'
import Footer from 'src/components/modules/Footer'
import Header from 'src/components/modules/Header'
import SearchDate from 'src/components/modules/unique-property/TreeHouse/UniquePropertDate'
import GuestMenu from 'src/components/modules/unique-property/TreeHouse/UniquePropertyGuest'
import {useStyles} from 'src/components/modules/unique-property/styles'
import TreeHouseImageSection from 'src/components/modules/unique-property/TreeHouse/ImageSection'
import TreeHouseTextSection from 'src/components/modules/unique-property/TreeHouse/TextSection'
import TreeHouseHeadingSection from 'src/components/modules/unique-property/TreeHouse/TreeHouseHeadingSection'
import AllDescription from 'src/components/modules/unique-property/TreeHouse/Description'
import AllAmenities from 'src/components/modules/unique-property/TreeHouse/Amenities'
import ThingsToNote from 'src/components/modules/unique-property/TreeHouse/ThingsToNote'
import AllCancellationPolicy from 'src/components/modules/unique-property/TreeHouse/CancellationPolicy'
import AllRules from 'src/components/modules/unique-property/TreeHouse/Rules'
import AllRooms from 'src/components/modules/unique-property/TreeHouse/Rooms'
import MobileSlider from 'src/components/modules/unique-property/TreeHouse/MobileSlider'
import AppButton from 'src/components/elements/Button'
import ReviewSlider from 'src/components/modules/unique-property/TreeHouse/ReviewSlider'
import RecommendationImageSlider from 'src/components/modules/unique-property/TreeHouse/RecommendationImageSlider'
import AllReview from 'src/components/modules/unique-property/TreeHouse/Reviews'
import Map from 'src/components/modules/unique-property/TreeHouse/Map'
import {useSmallSize} from 'src/hooks/screenSize'
import {getPropertiesById} from 'src/services/api'
import {
  getCustomerExpectationLabelFromValue,
  getRuleLabelFromValue,
} from 'src/constants'

const images = [
  {
    id: 1,
    desc: 'dsfs',
    url: '/images/regions/quebec.png',
  },
  {
    id: 2,
    desc: 'dsfs',
    url: '/images/regions/mauricie.png',
  },
  {
    id: 3,
    desc: 'dsfs',
    url: '/images/Rectangle 973.png',
  },
  {
    id: 4,
    desc: 'dsfs',
    url: '/images/regions/charlevoix.png',
  },
  {
    id: 5,
    desc: 'dsfs',
    url: '/images/Rectangle 972.png',
  },
]

const UniqueProperty = ({property}: any) => {
  const [dateRange, setDateRange] = React.useState<DateRange<Date>>([
    null,
    null,
  ])
  const classes = useStyles()

  const meta = {
    title: `Unique Property`,
    description: `Charlet Retreat. Book one of the world's best chalets. Discover and book chalets everywhere around you. Check-In Check-Out.`,
    keywords: ``,
    route: '/unique-property',
  }

  if (!property) {
    return null
  }

  return (
    <div className={classes.rootColor}>
      <HeadContent
        title={property.title}
        description={property.description}
        keywords={meta.keywords}
        route={meta.route}
      />
      <Header />
      <Box className={`${classes.DisplayNone} ${classes.MobileSlider}`}>
        <MobileSlider />
      </Box>
      <Container className={classes.root} maxWidth="lg">
        <TreeHouseHeadingSection
          name={property.name}
          address={property.full_address}
        />
        <Box className={`${classes.flexWrapper} ${classes.MobileDisplayNone}`}>
          <TreeHouseImageSection
            image={
              property.photos.length > 0 ? property.photos[0].image.url : 'test'
            }
          />
          <TreeHouseTextSection photos={property.photos} />
        </Box>
        <Box className={classes.flexWrapper}>
          <Box>
            <Description property={property} />
            <hr className={classes.hrLine} />
            <Facilities property={property} />
            <hr className={classes.hrLine} />
            <Box className={classes.facilities}>
              <Box className={classes.dFlex + ' ' + classes.imgMarginBottom}>
                <Avatar src={property.user.picture?.url} />
                <Typography
                  color="textSecondary"
                  variant="body2"
                  className={classes.cardMainHeading}
                >
                  Hosted by
                  <p className={classes.cardSubHeading}>{property.user.name}</p>
                </Typography>
              </Box>
              <AppButton className={classes.msgBtn}>
                <img src="/images/messages.png" style={{marginRight: '20px'}} />
                <span>Message</span>{' '}
              </AppButton>
            </Box>
            <hr className={classes.hrLine} />
            <Amenities amenities={property.amenities} />
            <hr className={classes.hrLine} />
            <Rooms rooms={property.rooms} />
            <hr className={classes.hrLine} />
            <Availabilities
              dateRange={dateRange}
              onChangeDateRange={(value: DateRange<Date>) =>
                setDateRange(value)
              }
            />
          </Box>
          <Booking property={property} />
        </Box>
        <hr className={classes.hrLine} />
        <Reviews />
        <AskQuestion />
        <hr className={classes.hrLine} />
        <Location property={property} />
        <CancellationPolicy property={property} />
        <hr className={classes.hrLine} />
        <Recommendations />
      </Container>
      <Footer />
    </div>
  )
}

export default UniqueProperty

export async function getServerSideProps(context: any) {
  const {locale} = context
  const propertyId = context.params.slug[0]

  const property = await getPropertiesById(propertyId)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header', 'hero'])),
      property,
    },
  }
}

const MoreSvg = () => {
  const classes = useStyles()

  return (
    <svg
      className={classes.spaceArro}
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.7125 4.77349L0 1.06099L1.0605 0.000488281L5.8335 4.77349L1.0605 9.54649L0 8.48599L3.7125 4.77349Z"
        fill="#364259"
      />
    </svg>
  )
}

const Amenities = ({amenities}: any) => {
  const [visibleAll, setVisibleAll] = useState(false)
  const isSmallSize = useSmallSize()
  const classes = useStyles()

  const toggleVisibleAll = () => setVisibleAll(!visibleAll)

  if (!amenities) {
    return null
  }

  return (
    <Box>
      <AllAmenities visible={visibleAll} handleClose={toggleVisibleAll} />
      <Typography variant={isSmallSize ? 'h3' : 'h6'}>Amenities</Typography>
      <Box>
        <Box className={classes.amenitiesWrapSec}>
          <p className={classes.dFlex}>
            <img className={classes.checkImg} src="/images/garbage.png" />{' '}
            Access to a garage{' '}
          </p>
          <p className={classes.amenitiesWrap}>
            <img className={classes.checkImg} src="/images/water.png" /> Access
            to water{' '}
          </p>
        </Box>
        <Box className={classes.amenitiesWrapSec}>
          <p className={classes.dFlex}>
            <img className={classes.checkImg} src="/images/beachchairs.png" />{' '}
            Beach chairs
          </p>
          <p className={classes.amenitiesWrap}>
            <img className={classes.checkImg} src="/images/beachfront.png" />{' '}
            Beachfront
          </p>
        </Box>
        <Box className={classes.amenitiesWrapSec}>
          <p className={classes.dFlex}>
            <img className={classes.checkImg} src="/images/dock.png" /> Doc
          </p>
          <p className={classes.amenitiesWrap}>
            <img
              className={classes.checkImg}
              src="/images/pit.png"
              style={{marginRight: '30px'}}
            />{' '}
            Fire pit
          </p>
        </Box>
        <AppButton className={classes.reviewsBtn} onClick={toggleVisibleAll}>
          See all amenities
          <MoreSvg />
        </AppButton>
      </Box>
    </Box>
  )
}

const Description = ({property}: any) => {
  const [visibleAll, setVisibleAll] = useState(false)
  const isSmallSize = useSmallSize()
  const classes = useStyles()

  const toggleVisibleAll = () => setVisibleAll(!visibleAll)

  return (
    <>
      <AllDescription
        visible={visibleAll}
        handleClose={toggleVisibleAll}
        property={property}
      />
      <Typography variant={isSmallSize ? 'h3' : 'h6'}>Description</Typography>
      <Typography
        color="textSecondary"
        variant="body2"
        className={classes.discription}
      >
        {property.description}
      </Typography>
      <AppButton className={classes.reviewsBtn} onClick={toggleVisibleAll}>
        Learn more
        <MoreSvg />
      </AppButton>
    </>
  )
}

const Facilities = ({property}: any) => {
  const classes = useStyles()

  return (
    <Box className={classes.facilities}>
      <Box>
        <p>
          <img src="/images/guest.png" style={{marginRight: '20px'}} />
          {`Guest: ${property.maximum_guests}`}
        </p>
        <p>
          <img src="/images/drop.png" style={{marginRight: '20px'}} />
          {`Bathrooms: ${property.number_of_rooms_bath}`}
        </p>
      </Box>
      <Box style={{flexBasis: '43%'}}>
        <p>
          <img src="/images/bedroom.png" style={{marginRight: '20px'}} />
          {`Bedroom: ${property.number_of_beds}`}
        </p>
        {property.guest_reception && (
          <p>
            <img src="/images/Wifi.png" style={{marginRight: '20px'}} />
            {property.guest_reception.internet_type}
          </p>
        )}
      </Box>
    </Box>
  )
}

const Rooms = ({rooms}: any) => {
  const [visibleAll, setVisibleAll] = useState(false)
  const classes = useStyles()
  const isSmallSize = useSmallSize()

  const toggleVisibleAll = () => setVisibleAll(!visibleAll)

  const getBedCount = (sleepingTypes: any) => {
    const keys = Object.keys(sleepingTypes)

    return keys.reduce(
      (prev, current) => sleepingTypes[prev] + sleepingTypes[current],
    )
  }

  if (!rooms) {
    return null
  }

  return (
    <>
      <AllRooms
        rooms={rooms}
        visible={visibleAll}
        handleClose={toggleVisibleAll}
      />
      <Box>
        <Typography variant={isSmallSize ? 'h3' : 'h6'}>Rooms</Typography>
        <Box className={classes.roomSec}>
          {rooms.slice(0, 2).map((room: any) => (
            <Box className={classes.roomCard} key={room.id}>
              <Box>{room.name}</Box>
              <Box className={classes.roomBed}>
                <img src="/images/bedroom.png" />
                <Box>&nbsp;{`${getBedCount(room.sleeping_types)} Beds`}</Box>
              </Box>
            </Box>
          ))}
        </Box>
        <AppButton className={classes.reviewsBtn} onClick={toggleVisibleAll}>
          See all rooms
          <MoreSvg />
        </AppButton>
      </Box>
    </>
  )
}

const Reviews = () => {
  const [visibleAll, setVisibleAll] = useState(false)
  const classes = useStyles()
  const isSmallSize = useSmallSize()

  const toggleVisibleAll = () => setVisibleAll(!visibleAll)

  return (
    <>
      <AllReview visible={visibleAll} handleClose={toggleVisibleAll} />
      <Box className={classes.flexWrapper}>
        <Box>
          <Typography variant={isSmallSize ? 'h3' : 'h6'}>Reviews</Typography>
          <Box className={classes.dFlex}>
            <span>
              <StarIcon style={{color: 'green'}} />{' '}
            </span>
            <Typography color="textSecondary">
              <b style={{padding: '0 8px'}}>4,5</b>(24 Review)
            </Typography>
          </Box>
          <ReviewSlider />
          <AppButton className={classes.reviewsBtn} onClick={toggleVisibleAll}>
            See all reviews
            <MoreSvg />
          </AppButton>
          <hr className={classes.hrLine} />
        </Box>
      </Box>
    </>
  )
}

const Availabilities = ({dateRange, onChangeDateRange}: any) => {
  const classes = useStyles()
  const isSmallSize = useSmallSize()

  return (
    <Box style={{width: '100%', height: '450px'}}>
      <Typography variant={isSmallSize ? 'h3' : 'h6'}>Availabilites</Typography>
      <Typography color="textSecondary" variant="body2">
        Add your travel dates to see the exact price.
      </Typography>
      <Box className={classes.calenderSpace}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDateRangePicker
            // @ts-ignore
            displayStaticWrapperAs={`${isSmallSize ? 'mobile' : 'desktop'}`}
            value={dateRange}
            onChange={(newValue: DateRange<Date>) => {
              onChangeDateRange(newValue)
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{mx: 2}}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
      </Box>
    </Box>
  )
}

const AskQuestion = () => {
  const classes = useStyles()
  const isSmallSize = useSmallSize()

  return (
    <Box className={classes.flexWrapper}>
      <Box>
        <Typography variant={isSmallSize ? 'h3' : 'h6'}>
          Do you still have questions?
        </Typography>
        <Typography color="textSecondary" variant="body2">
          Get a fast response about property amenities, check-in times, and
          general questions.
        </Typography>
        <AppButton className={classes.reviewsBtn}>
          Chat with the host
          <MoreSvg />
        </AppButton>
      </Box>
    </Box>
  )
}

const Location = ({property}: any) => {
  const [showMap, setShowMap] = useState(false)
  const classes = useStyles()
  const isSmallSize = useSmallSize()

  const {latitude, longitude, full_address: fullAddress} = property

  const mapContainerStyle: React.CSSProperties = {
    height: '220px',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  }

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  }

  const toggleMap = () => setShowMap(!showMap)

  return (
    <>
      <Map
        visible={showMap}
        handleClose={toggleMap}
        latitude={latitude}
        longitude={longitude}
        fullAddress={fullAddress}
      />
      <Box className={classes.flexWrapper}>
        <Box style={{width: '100%'}}>
          <Typography variant={isSmallSize ? 'h3' : 'h6'}>Location</Typography>
          <Typography color="textSecondary" variant="body2">
            {property.full_address}
          </Typography>
          <GoogleMap
            id="map"
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={{lat: latitude, lng: longitude}}
            options={options}
          >
            <Marker position={{lat: latitude, lng: longitude}} />
          </GoogleMap>
          <AppButton className={classes.reviewsBtn} onClick={toggleMap}>
            Show More
            <MoreSvg />
          </AppButton>
          <hr className={classes.hrLine} />
        </Box>
      </Box>
    </>
  )
}

const Recommendations = () => {
  const classes = useStyles()
  const isSmallSize = useSmallSize()

  return (
    <>
      <Box className={classes.flexWrapper}>
        <Box className={classes.mobileHandle}>
          <Typography variant={isSmallSize ? 'h3' : 'h6'}>
            Recommendations for you
          </Typography>
          <Box className={classes.RecommendationsWrapper}>
            <Box></Box>
          </Box>
        </Box>
      </Box>
      <RecommendationImageSlider images={images} />
    </>
  )
}

const Booking = ({property}: any) => {
  const classes = useStyles()
  const isSmallSize = useSmallSize()

  return (
    <Box className={classes.cardItem}>
      <Box className={classes.dFlex}>
        <Typography variant={isSmallSize ? 'h3' : 'h2'}>
          {`$${property.basic_pricing.base_rate}`}
        </Typography>
        <span className={classes.nightText}>/night</span>
      </Box>
      <Box className={classes.dFlex + ' ' + classes.reviewMargin}>
        <Typography color="textSecondary" variant="body2">
          <StarIcon style={{color: 'green'}} />
          <StarIcon style={{color: 'green'}} />
          <StarIcon style={{color: 'green'}} />
          <StarIcon style={{color: 'green'}} />
          <StarHalfIcon style={{color: 'green'}} />
        </Typography>
        <span>4,5</span>
        <span> (24 Review)</span>
      </Box>
      <hr className={classes.hrLine} />
      <Box>
        <SearchDate inTopBar={false} isSmallSize={isSmallSize} />
        <Box style={{marginTop: '10px'}}>
          <GuestMenu inTopBar={false} isSmallSize={isSmallSize} />
        </Box>
      </Box>
      <Box>
        <Button className={classes.bookingBtn}>Booking request</Button>
      </Box>
      <Box className={classes.bottomText}>
        <span>You will only be charged if you confirm</span>
      </Box>
    </Box>
  )
}

const CustomerExpectations = ({property}: any) => {
  const classes = useStyles()
  const isSmallSize = useSmallSize()

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => setVisible(!visible)

  const customerExpectations = property.customer_expectations

  if (!customerExpectations) {
    return null
  }

  if (visible) {
    return (
      <ThingsToNote
        visible={visible}
        handleClose={toggleVisible}
        property={property}
      />
    )
  }

  return (
    <>
      <Box className={classes.ruleWrap}>
        <Typography variant={isSmallSize ? 'h3' : 'h6'}>
          Things to note
        </Typography>
        <ul className={classes.ulWrap}>
          {customerExpectations.slice(0, 4).map((item: string) => {
            return (
              <li key={item}>
                <img
                  src="/images/check-vector.png"
                  className={classes.checkImg}
                />
                {getCustomerExpectationLabelFromValue(item)}
              </li>
            )
          })}
          <li onClick={toggleVisible} style={{cursor: 'pointer'}}>
            <strong>See all </strong>
            <MoreSvg />
          </li>
        </ul>
      </Box>
    </>
  )
}

const Rules = ({property}: any) => {
  const classes = useStyles()
  const isSmallSize = useSmallSize()

  const [visible, setVisible] = useState(false)

  const {rules} = property

  const toggleVisible = () => setVisible(!visible)

  if (visible) {
    return (
      <AllRules visible={visible} handleClose={toggleVisible} rules={rules} />
    )
  }

  return (
    <>
      <Box className={classes.ruleWrap}>
        <Typography variant={isSmallSize ? 'h3' : 'h6'}>Rules</Typography>
        <ul className={classes.ulWrap}>
          {rules
            .filter((rule: any) => rule)
            .slice(0, 4)
            .map((rule: string) => {
              return (
                <li>
                  <img
                    src="/images/check-vector.png"
                    className={classes.checkImg}
                  />
                  {getRuleLabelFromValue(rule)}
                </li>
              )
            })}
          <li onClick={toggleVisible} style={{cursor: 'pointer'}}>
            <strong>See all </strong>
            <MoreSvg />
          </li>
        </ul>
      </Box>
    </>
  )
}

const CancellationPolicy = ({property}: any) => {
  const classes = useStyles()
  const isSmallSize = useSmallSize()

  const [visible, setVisible] = useState(false)

  const {cancellation_policy_type: policyType} = property

  const toggleVisible = () => setVisible(!visible)

  if (visible) {
    return (
      <AllCancellationPolicy
        policy={policyType}
        visible={visible}
        handleClose={toggleVisible}
      />
    )
  }

  return (
    <>
      <Box className={classes.flexWrapper}>
        <CustomerExpectations property={property} />
        <Rules property={property} />
        <Box className={classes.ruleWrap}>
          <Typography variant={isSmallSize ? 'h3' : 'h6'}>
            Cancellation policy
          </Typography>
          <ul className={classes.ulWrap}>
            <li>
              <Typography variant={isSmallSize ? 'h3' : 'h6'}>
                Flexible
              </Typography>
            </li>
            <li>
              You will receive a full refund as long as you cancel at least 24
              hours prior to check-in. You will receive a full refund, less the
              first night, if you cancel within...
            </li>
            <li onClick={toggleVisible} style={{cursor: 'pointer'}}>
              <strong>See all </strong>
              <MoreSvg />
            </li>
          </ul>
        </Box>
      </Box>
    </>
  )
}
