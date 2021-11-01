import React, {useState} from 'react'
import {useRouter} from 'next/router'
import {Box, Container} from '@material-ui/core'
import {Alert} from '@material-ui/lab'
import AppDivider from 'src/components/elements/Divider'
import AppSelect from 'src/components/elements/Select'
import AppTypography from 'src/components/elements/Typography'
import ActionButtonGroup from 'src/components/modules/ButtonGroup'
import {useScreenSizeDown} from 'src/hooks/screenSize'
import {ListingStepNavigate} from 'src/types/listing'
import {buildListingPath} from 'src/utils'
import {useAddListingContext} from 'src/context'
import {updateProperties} from 'src/services/api'
import {CANCELLATION_POLICIES} from 'src/constants'
import {useStyles} from './styles'

const {back, next}: ListingStepNavigate = {
  next: {section: 'laws-and-taxes', step: 'three'},
  back: {section: 'calendar', step: 'three'},
}

const CancellationPolicies: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const classes = useStyles()
  const router = useRouter()
  const isSmallSizeDown = useScreenSizeDown('sm')

  const disableGutters = isSmallSizeDown ? false : true
  const maxWidth = 'sm' as const

  const {form} = useAddListingContext()
  const {getValues, setValue, watch} = form

  const property = getValues()
  const value = getValues('cancellation_policy_type') || 'Flexible'
  const policyType = CANCELLATION_POLICIES.find((type) => type.value === value)

  const disabled = !watch(['cancellation_policy_type']).every(Boolean)

  const onNext = () => {
    setError(null)
    setLoading(true)
    updateProperties(property, property.id)
      .then(() => {
        router.push(buildListingPath(next))
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

  return (
    <>
      <Container
        disableGutters={disableGutters}
        maxWidth={maxWidth}
        className={classes.root}
      >
        <AppTypography
          component="h2"
          neutralColor={900}
          style={{marginBottom: '24px'}}
          variant="displayMedium"
        >
          Cancellation policies
        </AppTypography>
        <AppSelect
          name="type"
          label="Cancellation policy type"
          optional
          withLabel
          options={CANCELLATION_POLICIES}
          value={value}
          onChange={(event) => {
            setValue('cancellation_policy_type', event.target.value as string)
          }}
        />
        <Box className={classes.flexWrapper}>
          {policyType?.content.map((text: string, index: number) => (
            <AppTypography variant="body" key={index} neutralColor={600}>
              {text}
            </AppTypography>
          ))}
        </Box>
      </Container>
      <AppDivider />
      {error && (
        <Alert severity="error" style={{marginBottom: '24px'}}>
          {error}
        </Alert>
      )}
      <ActionButtonGroup
        secondaryBtnProps={{
          onClick: () => router.push(buildListingPath(back)),
        }}
        primaryBtnProps={{
          disabled: disabled || loading,
          onClick: onNext,
        }}
        containerProps={{
          maxWidth,
          disableGutters,
        }}
      />
    </>
  )
}

export default CancellationPolicies
