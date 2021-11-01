const getValueFromLabel = (label: string) => {
  return label?.toString().toLowerCase().replace(/ /g, '_')
}

export const CUSTOMER_EXPECTATIONS = [
  'Nearby noise potential',
  'Cell phone reception is poor near this property',
  'Access with a four-wheel drive vehicle is preferable in winter',
  'Water is not drinkable',
  'Must climb stairs',
]

export const CUSTOMER_EXPECTATION_FORM_VALUES = CUSTOMER_EXPECTATIONS.map(
  (label, index) => ({
    label,
    formValue: getValueFromLabel(label),
    index,
  }),
)

export const getCustomerExpectationLabelFromValue = (item: string) => {
  const find = CUSTOMER_EXPECTATION_FORM_VALUES.find(
    (value) => item === value.formValue,
  )

  if (find) {
    return find.label
  }

  return null
}

export const RULES = [
  'Suitable for children ',
  'Suitable for babies ',
  'Pets allowed',
  'Smoking allowed inside',
  'Possible events or parties',
  'Events allowed',
  'Open fires allowed',
]

export const RULES_FORM_VALUES = RULES.map((label, index) => ({
  label,
  formValue: getValueFromLabel(label),
  index,
}))

export const getRuleLabelFromValue = (item: string) => {
  const find = RULES_FORM_VALUES.find((value) => item === value.formValue)

  if (find) {
    return find.label
  }

  return null
}

export const CANCELLATION_POLICIES = [
  {
    label: 'Flexible',
    value: 'flexible',
    content: [
      `You will receive a full refund as long as you cancel at least 24 hours prior 
      to check-in. You will receive a full refund, less the first night, if you cancel within 24 hours of check-in.`,
      `Any refund will be at the discretion of the host if you cancel after check-in.`,
    ],
  },
  {
    label: 'Moderate',
    value: 'moderate',
    content: [
      `You will receive a full refund as long as you cancel at least 7 days prior to check-in.
      You will receive a 50% refund if you cancel within 7 days of check-in.`,
      `Any refund will be at the discretion of the host if you cancel after check-in.`,
    ],
  },
  {
    label: 'Fifteen',
    value: 'fifteen',
    content: [
      `Cancellation is free up to 24 hours after confirmation of your reservation and at least 15 days before check-in.`,
      `You will receive a 50% refund, less our service charge, 
      if you cancel more than 24 hours after your booking is confirmed and at least 15 days prior to check-in.`,
      `The host does not offer a refund if you cancel within 15 days of check-in.`,
      `Any refund will be at the host's discretion (and will not include service charges) if you cancel after check-in.`,
    ],
  },
]
