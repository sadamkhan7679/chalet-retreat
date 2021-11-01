import React, {useState, useEffect} from 'react'
import {Box, Collapse, Grid, FormControlLabel} from '@material-ui/core'
import moment from 'moment'
import {Controller, useForm} from 'react-hook-form'
import AppButton from 'src/components/elements/Button'
import AppCheckBox from 'src/components/elements/CheckBox'
import AppDialog from 'src/components/elements/Dialog'
import ArrowDownIcon from 'src/components/elements/icons/ArrowDown'
import ArrowUpIcon from 'src/components/elements/icons/ArrowUp'
import CloseIcon from 'src/components/elements/icons/Close'
import AppSelect from 'src/components/elements/Select'
import AppTextArea from 'src/components/elements/TextArea'
import AppTextField from 'src/components/elements/TextField'
import AppTooltip from 'src/components/elements/Tooltip'
import AppTypography from 'src/components/elements/Typography'
import ActionButtonGroup from 'src/components/modules/ButtonGroup'
import Counter from 'src/components/modules/Counter'
import YesOrNoOption from 'src/components/modules/YesOrNoOption'
import EnhancedSwitch from 'src/components/elements/Switch/Switch'
import FormError from 'src/components/elements/FormError'
import DateRangePicker from './DateRangePicker'
import {ValidationError, fieldError} from 'src/hooks'
import {
  addCalendarApi,
  addCustomPricingApi,
  getCalendarsApi,
  getCalendarApi,
  updateCalendarApi,
  updateCustomPricingApi,
} from 'src/services/api'
import {CalendarValues, CustomPricingValues} from 'src/types'
import {useAddListingContext} from 'src/context'
import {counters, days} from './data'
import {useDialogStyles} from './styles'

interface Props {
  open: boolean
  onClose: () => void
  onDelete: () => void
  calendarId?: number
}

interface SubmitFormValues extends CalendarValues, CustomPricingValues {
  period: [any, any]
}

const renderInputDescription = (text: string) => {
  return (
    <AppTypography
      neutralColor={400}
      style={{marginTop: '8px'}}
      variant="caption"
    >
      {text}
    </AppTypography>
  )
}

const CalendarEditPricingDialog: React.FC<Props> = ({
  open,
  onClose,
  onDelete,
  calendarId,
}) => {
  const [serverError, setServerError] = useState<ValidationError<any>>(null)
  const [expanded, setExpanded] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
    setValue: setFormValue,
    reset,
    clearErrors,
  } = useForm()

  const {form} = useAddListingContext()
  const {getValues, setValue} = form

  const classes = useDialogStyles({})

  const submitForm = (form: any | SubmitFormValues) => {
    // const propertyId = getValues("id") || 32;
    const propertyId = getValues('id')
    const {period} = form
    const start = period[0] ? moment(period[0]).format('YYYY-MM-DD') : ''
    const end = period[1] ? moment(period[1]).format('YYYY-MM-DD') : ''

    const calendarFormData: CalendarValues = {
      start,
      end,
      name: form.name,
      description: form.description,
      is_block_period: form.is_block_period,
      id: calendarId,
    }

    const {custom_pricing: customPricing} = form
    const customPricingData: CustomPricingValues = {
      ...customPricing,
      currency: 'CAD',
    }

    setSubmitting(true)
    if (calendarId) {
      updateCalendarApi(calendarFormData)
        .then((calendar: CalendarValues) => {
          if (calendar.custom_pricing?.id) {
            setSubmitting(true)
            customPricingData.id = calendar.custom_pricing?.id
            updateCustomPricingApi(customPricingData)
              .then(() => {
                getCalendarsApi(propertyId).then((calendars: any) => {
                  setValue('calendars', [...calendars])
                  onClose()
                })
              })
              .catch((e) => setServerError(e.response.data))
              .finally(() => setSubmitting(false))
          }
        })
        .catch((e) => setServerError(e.response.data))
        .finally(() => setSubmitting(false))
    } else {
      addCalendarApi(calendarFormData, propertyId)
        .then((calendar: CalendarValues) => {
          if (calendar.id) {
            setSubmitting(true)
            addCustomPricingApi(customPricingData, calendar.id)
              .then(() => {
                getCalendarsApi(propertyId).then((calendars: any) => {
                  setValue('calendars', [...calendars])
                  onClose()
                })
              })
              .catch((e) => setServerError(e.response.data))
              .finally(() => setSubmitting(false))
          }
        })
        .catch((e) => setServerError(e.response.data))
        .finally(() => setSubmitting(false))
    }
  }

  const nameError = fieldError('name', {form: errors, response: serverError})
  const startError = fieldError('start', {
    form: errors,
    response: serverError,
  })
  const endError = fieldError('end', {form: errors, response: serverError})
  const baseRateError = fieldError('custom_pricing.base_rate', {
    form: errors,
    response: serverError,
  })
  const weekendRateError = fieldError('custom_pricing.weekend_rate', {
    form: errors,
    response: serverError,
  })
  const weeklyError = fieldError('custom_pricing.weekly_rate', {
    form: errors,
    response: serverError,
  })
  const monthlyError = fieldError('custom_pricing.monthly_rate', {
    form: errors,
    response: serverError,
  })

  useEffect(() => {
    setServerError(null)
    clearErrors()

    if (calendarId) {
      getCalendarApi(calendarId).then((calendar: any) => {
        setFormValue('name', calendar.name)
        setFormValue('period', [moment(calendar.start), moment(calendar.end)])
        setFormValue('is_block_period', calendar.is_block_period)
        setFormValue('description', calendar.description)

        const customPricing = calendar.custom_pricing
        setFormValue('custom_pricing', customPricing)
      })
    } else {
      reset()
    }
  }, [calendarId])

  return (
    <AppDialog classes={{paper: classes.paper}} open={open} maxWidth="sm">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <AppTypography component="h2" neutralColor={900} variant="displaySmall">
          Custom pricing
        </AppTypography>
        <CloseIcon onClick={onClose} />
      </Box>
      <form onSubmit={handleSubmit(submitForm)} className={classes.paper}>
        <AppTypography component="span" variant="action">
          Period
        </AppTypography>
        <Controller
          name="period"
          control={control}
          defaultValue={[null, null]}
          render={({field: {onChange, value}}) => (
            <DateRangePicker
              value={value}
              onChange={onChange}
              disabled={!!calendarId}
            />
          )}
        />
        <FormError>{startError}</FormError>
        <FormError>{endError}</FormError>
        <AppTextField
          label="Period Name"
          placeholder="Type here"
          error={Boolean(nameError)}
          message={nameError}
          inputProps={register('name', {
            required: 'Period name is required.',
          })}
        />
        <Controller
          name="is_block_period"
          control={control}
          defaultValue={false}
          render={({field: {onChange, value}}) => (
            <FormControlLabel
              label="Block Period"
              classes={{
                root: classes.switch,
              }}
              control={<EnhancedSwitch onChange={onChange} value={value} />}
            />
          )}
        />
        <Box className={classes.flexWrapper}>
          <AppTextField
            label="Base rate"
            placeholder="CAD(C$)"
            description={renderInputDescription(
              `This price will be the default rate for each night.`,
            )}
            inputProps={register('custom_pricing.base_rate', {
              required: 'Base rate is required.',
            })}
            error={Boolean(baseRateError)}
            message={baseRateError}
          />
          <AppTextField
            label="Weekend rate"
            placeholder="CAD(C$)"
            description={renderInputDescription(
              `This price will be the default price for the weekend.`,
            )}
            inputProps={register('custom_pricing.weekend_rate', {
              required: 'Weekend rate is required.',
            })}
            error={Boolean(weekendRateError)}
            message={weekendRateError}
          />
        </Box>
        <Box className={classes.flexWrapper}>
          <AppTextField
            label="Weekly rate"
            placeholder="CAD(C$)"
            description={renderInputDescription(
              `This price will be the default rate for each week.`,
            )}
            inputProps={register('custom_pricing.weekly_rate', {
              required: 'Weekly rate is required.',
            })}
            error={Boolean(weeklyError)}
            message={weeklyError}
          />
          <AppTextField
            label="Monthly rate"
            placeholder="CAD(C$)"
            description={renderInputDescription(
              `This price will be the default price for the month.`,
            )}
            inputProps={register('custom_pricing.monthly_rate', {
              required: 'Monthly rate is required.',
            })}
            error={Boolean(monthlyError)}
            message={monthlyError}
          />
        </Box>
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <AppTypography neutralColor={800} variant="displaySmall">
            Advanced booking options
          </AppTypography>
          {expanded ? (
            <ArrowUpIcon
              style={{cursor: 'pointer'}}
              onClick={() => setExpanded(false)}
            />
          ) : (
            <ArrowDownIcon
              style={{cursor: 'pointer'}}
              onClick={() => setExpanded(true)}
            />
          )}
        </Box>
        <Box>
          <Collapse in={expanded} unmountOnExit>
            <Box className={classes.collapseContainer}>
              <AppTypography neutralColor={800} variant="heading">
                Arrival-departure days
                <span style={{marginLeft: '10px'}}>
                  <AppTooltip
                    title={
                      <AppTypography
                        style={{textAlign: 'center'}}
                        variant="caption"
                        color="inherit"
                      >
                        Check the days when it will be possible for a client to
                        arrive or end their stay. If the day is unchecked, it
                        will indicate that a customer cannot arrive or finish at
                        this precise day.
                      </AppTypography>
                    }
                  />
                </span>
              </AppTypography>
              <Box
                style={{margin: '24px 0 0 0'}}
                className={classes.checkboxFlexWrapper}
              >
                {React.Children.toArray(
                  days.map(({labelShort}, index) => (
                    <Controller
                      name={`custom_pricing.advanced_booking_options.arrival_departure_days.${index}`}
                      control={control}
                      render={({field: {value, onChange, onBlur, name}}) => (
                        <AppCheckBox
                          checkBoxProps={{
                            checked: Boolean(value),
                            name,
                            onBlur,
                            onChange: (e) => {
                              e.target.checked
                                ? onChange(labelShort)
                                : onChange('')
                            },
                          }}
                          className={classes.checkbox}
                          label={labelShort}
                          value={labelShort}
                        />
                      )}
                    />
                  )),
                )}
              </Box>
              <AppTypography neutralColor={800} variant="heading">
                Minimum length of stay depending the day
                <span style={{marginLeft: '10px'}}>
                  <AppTooltip
                    title={
                      <AppTypography
                        style={{textAlign: 'center'}}
                        variant="caption"
                        color="inherit"
                      >
                        Minimum number of nights to book depending on the day of
                        the start of the stay.
                      </AppTypography>
                    }
                  />
                </span>
              </AppTypography>
              <Grid
                style={{
                  margin: '16px 10px 0 -10px',
                  width: 'calc(100% + 20px)',
                }}
                container
                spacing={4}
              >
                {React.Children.toArray(
                  days.map(({label, options, labelShort}) => (
                    <Controller
                      name={`custom_pricing.advanced_booking_options.max_length_of_stays.${labelShort}`}
                      control={control}
                      render={({field: {...others}}) => (
                        <Grid xs={6} sm={4} item style={{padding: '8px 12px'}}>
                          <AppSelect
                            label={label}
                            options={options}
                            {...others}
                            optional
                            withLabel
                          />
                        </Grid>
                      )}
                    />
                  )),
                )}
              </Grid>
              <Box className={classes.counterFlexWrapper}>
                {React.Children.toArray(
                  counters.map(({label, name}, index) =>
                    index === 0 ? (
                      <Controller
                        control={control}
                        // @ts-ignore
                        name={`custom_pricing.advanced_booking_options.${name}`}
                        render={({field: {onChange, onBlur, value}}) => (
                          <YesOrNoOption
                            label={label}
                            value={
                              value ? true : value === '' ? false : undefined
                            }
                            onBlur={onBlur}
                            onChange={(newValue) => {
                              onChange(newValue)
                            }}
                          />
                        )}
                      />
                    ) : (
                      <Controller
                        name={`custom_pricing.advanced_booking_options.${name}`}
                        control={control}
                        render={({field: {value, onBlur, onChange}}) => (
                          <Counter
                            label={
                              <AppTypography
                                neutralColor={800}
                                variant="heading"
                              >
                                {label}
                                <span style={{marginLeft: '10px'}}>
                                  <AppTooltip
                                    title={
                                      <AppTypography
                                        style={{textAlign: 'center'}}
                                        variant="caption"
                                        color="inherit"
                                      >
                                        Check the days when it will be possible
                                        for a client to arrive or end their
                                        stay. If the day is unchecked, it will
                                        indicate that a customer cannot arrive
                                        or finish at this precise day.
                                      </AppTypography>
                                    }
                                  />
                                </span>
                              </AppTypography>
                            }
                            value={value || 0}
                            optional
                            onBlur={onBlur}
                            onChange={onChange}
                          />
                        )}
                      />
                    ),
                  ),
                )}
              </Box>
            </Box>
          </Collapse>
        </Box>
        <Controller
          name="description"
          control={control}
          render={({field: {value, onChange}}) => (
            <AppTextArea
              label="Note for yourself"
              value={value}
              onChange={onChange}
              optional
            />
          )}
        />
        <ActionButtonGroup
          containerProps={{className: classes.container}}
          primaryBtnProps={{
            children: 'Save',
            type: 'submit',
            disabled: submitting,
          }}
          secondaryBtnProps={{
            children: 'Cancel',
            onClick: onClose,
            startIcon: null,
          }}
        />
        {calendarId ? (
          <AppButton
            onClick={onDelete}
            className={classes.deleteOutlinedBtn}
            fullWidth
            variant="outlined"
          >
            Remove Special Pricing
          </AppButton>
        ) : null}
      </form>
    </AppDialog>
  )
}

export default CalendarEditPricingDialog
