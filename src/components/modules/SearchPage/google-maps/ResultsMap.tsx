import React from 'react'
import {GoogleMap, Marker, InfoWindow} from '@react-google-maps/api'
import usePlacesAutocomplete, {getLatLng} from 'use-places-autocomplete'
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox'
import {useSelector, useDispatch} from 'react-redux'
import {Box, Typography} from '@material-ui/core'
import useOnclickOutside from 'react-cool-onclickoutside'
import {geocodeByAddress} from 'react-places-autocomplete'
import clsx from 'clsx'
import '@reach/combobox/styles.css'
import {useSmallSize} from 'src/hooks'
import ResultsListItem from '../ResultListItem'
import {
  getSearchResults,
  getSearchData,
  getSelectedProperty,
  getSelectedLocation,
} from 'src/store/selectors/propertySelectors'
import {
  setSelectedLocation,
  setSelectedProperty,
} from 'src/store/actions/propertyActions'
import {useStyles} from './styles'

const mapContainerStyle: React.CSSProperties = {
  height: '100%',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
}

const options = {
  disableDefaultUI: true,
  zoomControl: true,
}

type Props = {
  inTopBar: boolean
  inMobileView?: boolean
}

export default function ResultsMap() {
  const searchResults = useSelector(getSearchResults)
  const searchData: any = useSelector(getSearchData)
  const dispatch = useDispatch()
  const selectedProperty = useSelector(getSelectedProperty)
  const selectedLocation = useSelector(getSelectedLocation)

  const isSmallSize = useSmallSize()
  const classes = useStyles({inTopBar: false, isSmallSize})

  const [selected, setSelected] = React.useState<any>(null)
  const [center, setCenter] = React.useState({lat: 33, lng: 73})

  const mapRef: any = React.useRef()
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map
  }, [])

  const panTo = React.useCallback(({lat, lng}: any) => {
    mapRef?.current?.panTo({lat, lng})
    mapRef?.current?.setZoom(3)
  }, [])

  React.useEffect(() => {
    selectedProperty && setSelected(selectedProperty)
  }, [selectedProperty])

  React.useEffect(() => {
    selectedLocation.address !== '' && panTo(selectedLocation?.coordinates)
    selectedLocation.address !== '' && setCenter(selectedLocation?.coordinates)
  }, [selectedLocation])

  React.useEffect(() => {
    if (searchData?.coordinates) {
      setCenter(searchData?.coordinates)
    } else {
      const allLats: any = []
      const allLngs: any = []
      searchResults?.items?.forEach((item: any) => {
        allLats.push(item?.latitude)
        allLngs.push(item?.longitude)
      })
      const averageLat =
        allLats?.reduce((a: number, b: number) => a + b, 0) / allLats.length
      const averageLng =
        allLngs?.reduce((a: number, b: number) => a + b, 0) / allLngs.length

      const newCenter = {
        lat: averageLat,
        lng: averageLng,
      }
      if (averageLat && averageLng) setCenter(newCenter)
    }

    setSelected(null)
    dispatch(setSelectedProperty(null))
  }, [searchResults])

  React.useEffect(() => {
    panTo(center)
  }, [center])

  return (
    <div className={classes.googleMapWrapper}>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {searchResults?.items?.map((item: any) => {
          return (
            <Marker
              key={`${item.latitude}-${item.longitude}`}
              position={{lat: item.latitude, lng: item.longitude}}
              onClick={() => {
                dispatch(setSelectedProperty(item))
                setSelected(item)
              }}
              icon={'/images/google-map-marker.svg'}
            />
          )
        })}

        {selected ? (
          <InfoWindow
            position={{lat: selected?.latitude, lng: selected?.longitude}}
            onCloseClick={() => {
              setSelected(null)
              dispatch(setSelectedProperty(null))
            }}
          >
            <Box className={classes.infoWindowWrapper}>
              <ResultsListItem inInfoWindow={true} propertyItem={selected} />
            </Box>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  )
}

export function LocationSearchBox({inTopBar, inMobileView}: Props) {
  const {
    ready,
    value,
    suggestions: {status, data},
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {},
    debounce: 300,
  })

  const isSmallSize = useSmallSize()

  const classes = useStyles({inTopBar, isSmallSize})
  const selectedLocation = useSelector(getSelectedLocation)
  const dispatch = useDispatch()

  const addressBreakdown = (results: any): any => {
    let country = ''
    let state = ''
    let city = ''
    results.address_components.forEach((component: any) => {
      if (component.types[0] === 'country') country = component.long_name
      if (component.types[0] === 'administrative_area_level_1')
        state = component.long_name
      if (component.types[0] === 'administrative_area_level_2')
        city = component.long_name
    })

    return {city, country, state}
  }

  const handleInput = (e: any) => {
    setValue(e.target.value)
  }

  const handleSelect = async (address: any) => {
    setValue(address, false)
    clearSuggestions()

    try {
      const results = await geocodeByAddress(value)
      const breakDown = addressBreakdown(results[0])
      const {lat, lng} = await getLatLng(results[0])
      const location = {
        address: address,
        addressComps: {
          country: breakDown.country,
          state: breakDown.state,
          city: breakDown.city,
        },
        coordinates: {
          lat: lat,
          lng: lng,
        },
      }

      dispatch(setSelectedLocation(location))
    } catch (error) {
      console.log('😱 Error: ', error)
    }
  }

  const ref = useOnclickOutside(() => {})

  return (
    <div className="search" ref={ref}>
      <Combobox onSelect={handleSelect}>
        {!inTopBar && !inMobileView && (
          <Typography variant="body1">Location</Typography>
        )}
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          className={
            inTopBar
              ? classes.headerSearchOptionText
              : inMobileView
              ? classes.locationMobileInput
              : ''
          }
          placeholder={
            inTopBar ? 'Location' : 'Where do you want to rent a chalet?'
          }
        />
        {status !== 'OK' &&
          selectedLocation?.address !== '' &&
          !selectedLocation?.address &&
          isSmallSize && (
            <Box
              className={clsx(
                isSmallSize
                  ? classes.locationResultsWrapperMobile
                  : classes.locationResultsWrapper,
                inMobileView ? classes.locationResultsWrapperSM : undefined,
              )}
            >
              <ComboboxList
                className={classes.locationResultsList}
                style={{padding: '0 19px'}}
              >
                <Box className={classes.locationResultsItem}>
                  <span
                    className={clsx(
                      classes.locationIconWrapper,
                      isSmallSize ? classes.LocationIconMobile : undefined,
                    )}
                  >
                    <img
                      src="/images/location-icon-fill.svg"
                      alt="location-icon-fill"
                      className={classes.locationResultsIcon}
                    />
                  </span>
                  <ComboboxOption
                    value={'Places near you'}
                    className={classes.locationResultText}
                  />
                </Box>
              </ComboboxList>
            </Box>
          )}

        <ComboboxPopover
          className={clsx(
            isSmallSize
              ? classes.locationResultsWrapperMobile
              : classes.locationResultsWrapper,
            inMobileView ? classes.locationResultsWrapperSM : undefined,
          )}
        >
          <ComboboxList className={classes.locationResultsList}>
            {status === 'OK' &&
              data.map(({id, description}: any) => (
                <Box
                  key={id + description}
                  className={classes.locationResultsItem}
                >
                  <span
                    className={clsx(
                      classes.locationIconWrapper,
                      isSmallSize ? classes.LocationIconMobile : undefined,
                    )}
                  >
                    <img
                      src="/images/location-icon-fill.svg"
                      alt="location-icon-fill"
                      className={classes.locationResultsIcon}
                    />
                  </span>
                  <ComboboxOption
                    value={description}
                    className={classes.locationResultText}
                  />
                </Box>
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  )
}
