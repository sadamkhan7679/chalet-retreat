import React from 'react'
import usePlacesAutocomplete, {getLatLng} from 'use-places-autocomplete'
import {geocodeByAddress} from 'react-places-autocomplete'
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox'
import {Box} from '@material-ui/core'
import AppTextField from 'src/components/elements/TextField'
import {useStyles} from './styles'

interface Props {
  value: string
  onChange: (value: any) => void
  error: boolean
  message?: string
}

export default function AddressInput({value, error, message, onChange}: Props) {
  const classes = useStyles()

  const {
    ready,
    value: autoCompleteValue,
    suggestions: {status, data},
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {},
    debounce: 300,
  })

  const addressBreakdown = (results: any): any => {
    let country = ''
    let state = ''
    let city = ''
    let postalCode = ''
    results.address_components.forEach((component: any) => {
      if (component.types[0] === 'country') {
        country = component.long_name
      } else if (component.types[0] === 'administrative_area_level_1') {
        state = component.long_name
      } else if (component.types[0] === 'administrative_area_level_2') {
        city = component.long_name
      } else if (component.types[0] === 'postal_code') {
        postalCode = component.long_name
      }
    })

    return {city, country, state, postalCode}
  }

  const handleInput = (e: any) => setValue(e.target.value)

  const handleSelect = async (address: any) => {
    setValue(address, false)
    clearSuggestions()

    try {
      const results = await geocodeByAddress(address)
      const breakDown = addressBreakdown(results[0])
      const {lat, lng} = await getLatLng(results[0])

      const location = {
        address: address,
        addressComps: {
          country: breakDown.country,
          state: breakDown.state,
          city: breakDown.city,
          postal_code: breakDown.postalCode,
        },
        coordinates: {
          lat: lat,
          lng: lng,
        },
      }

      onChange(location)
    } catch (error) {
      console.log('😱 Error: ', error)
    }
  }

  return (
    <Combobox onSelect={handleSelect}>
      <AppTextField
        label="Full Address"
        value={autoCompleteValue || value}
        onChange={handleInput}
        disabled={!ready}
        placeholder={'Address'}
        error={error}
        message={message}
        style={{borderRadius: '24px'}}
      />
      <ComboboxInput
        placeholder="Custom Option Rendering"
        style={{
          width: '100%',
          height: '0px',
          padding: '0, 0',
          visibility: 'hidden',
        }}
        value={autoCompleteValue}
        onChange={handleInput}
        disabled={!ready}
      />
      <ComboboxPopover className={classes.locationResultsWrapper}>
        <ComboboxList className={classes.locationResultsList}>
          {status === 'OK' &&
            data.map(({place_id, description}: any) => (
              <Box key={place_id} className={classes.locationResultsItem}>
                <span className={classes.locationIconWrapper}>
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
  )
}
