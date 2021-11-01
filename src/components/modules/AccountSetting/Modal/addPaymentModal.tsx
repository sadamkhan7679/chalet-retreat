import React from 'react'
import {Box, Avatar, Typography, Modal, Button} from '@material-ui/core'
import {useStylesSteps} from '../Payment/styles'
import {
  Elements,
  CardElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
import {loadStripe, Stripe, StripeElements} from '@stripe/stripe-js'
import {
  addPaymentMethod,
  getCustomerInformation,
  createCustomer,
} from 'src/services/api'
import {userInfoSelector} from 'src/store/selectors/userSelector'
import {useSelector} from 'react-redux'
import LoadingButton from '@mui/lab/LoadingButton'

interface Props {
  modalOpen?: any
  setModalOpen?: any
  setNewMethod: React.Dispatch<React.SetStateAction<boolean>>
}

const stripeKey: any = process.env.NEXT_PUBLIC_STRIPE_KEY

const stripePromise = loadStripe(stripeKey)

const PaymentForm = ({setModalOpen, setNewMethod}: any) => {
  const stripe = useStripe()
  const elements = useElements()
  const classes = useStylesSteps()
  const userInfo = useSelector(userInfoSelector)
  const [hasStripe, setHasStripe] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  console.log('userInfo')
  console.log(userInfo)

  React.useEffect(() => {
    userInfo.stripe_id && setHasStripe(true)
  }, [])

  async function createNewCustomer() {
    setLoading(true)
    try {
      console.log('create')
      const customerInfo: any = await createCustomer()
      console.log(customerInfo)
      if (customerInfo.status === 200) {
        setHasStripe(true)
        setLoading(false)
      } else {
        setHasStripe(false)
        setLoading(false)
      }
    } catch (err) {
      console.log(err) // TypeError: failed to fetch
      setHasStripe(false)
      setLoading(false)
    }
  }

  async function getCustomer() {
    setLoading(true)
    try {
      console.log('create')
      const customerInfo = await getCustomerInformation()
      console.log(customerInfo)
      setLoading(false)
      if (customerInfo.status === 200) {
        setHasStripe(true)
      } else {
        setHasStripe(false)
      }
    } catch (err) {
      console.log(err)
      setHasStripe(false)
      setLoading(false)
    }
  }

  async function createPaymentMethod(
    stripe: Stripe | null,
    elements: StripeElements | null,
  ) {
    setLoading(true)

    const cardElement: any = elements?.getElement(CardElement)
    stripe
      ?.createToken(cardElement)
      .then(function (result: any) {
        setLoading(false)
        const token = result?.token?.id
        if (token) {
          addPaymentMethod(token)
            .then((res) => {
              console.log(res)
              setModalOpen(false)
              setNewMethod(true)
            })
            .catch((err) => {
              console.log(err)
            })
        }
      })
      .catch((err: any) => {
        setLoading(false)
        console.log(err)
      })
  }

  const handleSubmit =
    (stripe: Stripe | null, elements: StripeElements | null) => async () => {
      setLoading(true)
      if (hasStripe) {
        createPaymentMethod(stripe, elements)
      } else {
        await createNewCustomer()
        await getCustomer()
        await createPaymentMethod(stripe, elements)
      }
    }

  return (
    <>
      <CardElement className={classes.stripElement} />
      <Box display="flex">
        <Button
          className={classes.btnCancle}
          onClick={() => {
            setModalOpen(false)
          }}
        >
          Cancel
        </Button>
        <LoadingButton
          className={classes.btnSave}
          onClick={handleSubmit(stripe, elements)}
          loading={loading}
          loadingPosition="center"
          variant="contained"
        >
          Save
        </LoadingButton>
      </Box>
    </>
  )
}

const AddPaymentModal: React.FC<Props> = ({
  modalOpen,
  setModalOpen,
  setNewMethod,
}) => {
  const classes = useStylesSteps()

  return (
    <Modal
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Box className={classes.addModal}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          className={classes.modalHead}
          onClick={() => setModalOpen(false)}
        >
          <Typography variant="h6">Add a payment method</Typography>
          <Avatar
            src={'/images/iconClose.png'}
            // className={classes.closeIcons}
          />
        </Box>
        <Box className={classes.method} style={{marginBottom: '16px'}}>
          <Typography variant="h6">Name this payment method</Typography>
          <input
            type="text"
            placeholder="Company"
            className={classes.methodInput}
            style={{
              outline: 'none',
              borderRadius: '24px',
              padding: '12px 16px',
            }}
          />
        </Box>
        <Box className={classes.formDate}>
          <Elements stripe={stripePromise}>
            <PaymentForm
              setModalOpen={setModalOpen}
              setNewMethod={setNewMethod}
            />
          </Elements>
        </Box>
      </Box>
    </Modal>
  )
}
export default AddPaymentModal
