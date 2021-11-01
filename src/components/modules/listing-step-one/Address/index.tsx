import React, {useState} from 'react'
import {useRouter} from 'next/router'
import {Box, Container} from '@material-ui/core'
import {Alert} from '@material-ui/lab'
import {useScreenSizeDown} from 'src/hooks/screenSize'
import {ListingStepNavigate} from 'src/types/listing'
import AppDivider from 'src/components/elements/Divider'
import AppTextField from 'src/components/elements/TextField'
import AppTypography from 'src/components/elements/Typography'
import ActionButtonGroup from 'src/components/modules/ButtonGroup'
import AddressMap from './Map'
import AddressInput from './AddressInput'
import {buildListingPath} from 'src/utils'
import {useAddListingContext} from 'src/context'
import {updateProperties} from 'src/services/api/listingForm'
import {useStyles} from './styles'

const {back, next}: ListingStepNavigate = {
  next: {section: 'guests', step: 'one'},
  back: {section: 'property-type', step: 'one'},
}

const Address = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const {form} = useAddListingContext()

  const {
    formState: {errors},
    register,
    getValues,
    watch,
    setValue,
  } = form

  const latitude = watch('latitude')
  const longitude = watch('longitude')

  const fullAddress = watch('full_address')
  const formError =
    Boolean(errors.full_address) ||
    Boolean(errors.country) ||
    Boolean(errors.city) ||
    Boolean(errors.state) ||
    Boolean(errors.postal_code)

  const classes = useStyles()
  const router = useRouter()
  const isSmallSizeDown = useScreenSizeDown('sm')
  const disableGutters = isSmallSizeDown ? false : true
  const maxWidth = 'sm' as const

  const onChangeAddress = (address: any) => {
    const {addressComps, coordinates, address: fullAddress} = address
    const {country, city, state, postal_code: postalCode} = addressComps
    const {lat, lng} = coordinates

    setValue('full_address', fullAddress)
    setValue('country', country)
    setValue('city', city)
    setValue('state', state)
    setValue('postal_code', postalCode)
    setValue('latitude', lat)
    setValue('longitude', lng)
  }

  const submitForm = () => {
    if (!formError) {
      const property = getValues()
      setError(null)
      setLoading(true)
      updateProperties(property, property.id)
        .then(() => {
          router.push({
            pathname: buildListingPath(next),
          })
        })
        .catch((ex) => {
          const error = ex.response?.data
          if (error) {
            setError(error.message)
          } else {
            setError(ex.message)
          }
        })
        .finally(() => setLoading(false))
    }
  }

  return (
    <>
      <Container
        disableGutters={disableGutters}
        maxWidth={maxWidth}
        className={classes.root}
      >
        {/* <AppTypography
          component="h2"
          neutralColor={900}
          variant="displayMedium"
        >
          Address
        </AppTypography>
        <AppTypography neutralColor={500} variant="body">
          Only travelers with confirmed reservations will be able to see this
          marker corresponding to your address.
        </AppTypography>
        <input
          type="hidden"
          name="full_address"
          ref={
            register('full_address', {required: 'Full Address is required'}).ref
          }
        /> */}
        <AddressInput
          value={fullAddress}
          onChange={onChangeAddress}
          error={Boolean(errors.full_address)}
          message={errors.full_address?.message}
        />
        <Box className={classes.flexWrapper} style={{gridGap: '22px'}}>
          <AppTextField
            label="Country"
            name="country"
            placeholder="Country"
            register={register}
            error={Boolean(errors.country)}
            message={errors.country?.message}
            required
          />
          <AppTextField
            label="Province / State"
            name="state"
            placeholder="Province / State"
            register={register}
            error={Boolean(errors.state)}
            message={errors.state?.message}
            required
          />
          <AppTextField
            label="City"
            name="city"
            placeholder="City"
            register={register}
            error={Boolean(errors.city)}
            message={errors.city?.message}
            required
          />
          <AppTextField
            label="Postal Code"
            name="postal_code"
            placeholder="Postal Code"
            register={register}
            error={Boolean(errors.postal_code)}
            message={errors.postal_code?.message}
            required
          />
        </Box>
        {
          // latitude && longitude && (
          <AddressMap latitude={latitude} longitude={longitude} />
          // )
        }
      </Container>
      {/* <AppDivider /> */}
      {error && (
        <Alert severity="error" style={{marginBottom: '24px'}}>
          {error}
        </Alert>
      )}
      {/* <ActionButtonGroup
        secondaryBtnProps={{
          onClick: () => router.push(buildListingPath(back)),
        }}
        primaryBtnProps={{
          children: 'Next',
          onClick: submitForm,
          disabled: loading,
        }}
        containerProps={{
          maxWidth,
          disableGutters,
        }}
      /> */}
    </>
  )
}

export default Address
