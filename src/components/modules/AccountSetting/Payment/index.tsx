import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Container,
  Avatar,
  Typography,
  Tabs,
  Tab,
  Grid,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AppBar from '@material-ui/core/AppBar'
import StepOne from './Stepper/stepOne'
import StepTwo from './Stepper/stepTwo'
import StepThree from './Stepper/stepThree'
import StepFour from './Stepper/stepFour'
import {useStylesSteps} from './styles'
import AddPaymentModal from '../Modal/addPaymentModal'
import {useSmallSize} from 'src/hooks/screenSize'
import LinearProgress from '@mui/material/LinearProgress'
import {getPaymentMethods} from 'src/services/api'
import AppButton from 'src/components/elements/Button'
import {useSelector} from 'react-redux'
import {userInfoSelector} from 'src/store/selectors/userSelector'

interface Props {
  goBack: any
  setPayoutSection: React.Dispatch<React.SetStateAction<boolean>>
  payoutSection: boolean
}

const TabPanel = (props: any) => {
  const {children, value, index, ...other} = props
  const isSmallSize = useSmallSize()

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
      className="hello"
    >
      <Box
        p={3}
        style={{
          paddingLeft: isSmallSize ? '0px' : undefined,
          paddingRight: isSmallSize ? '0px' : undefined,
        }}
      >
        {children}
      </Box>
    </Typography>
  )
}

const a11yProps = (index: any) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  }
}

const Payment: React.FC<Props> = ({
  goBack,
  setPayoutSection,
  // payoutSection
}) => {
  const [modalOpen, setModalOpen] = React.useState(false)
  const classes = useStylesSteps()
  const [value, setValue] = React.useState(0)
  const isSmallSize = useSmallSize()
  const userInfo = useSelector(userInfoSelector)
  const [progress, setProgress] = React.useState(25)
  const [paymentMethods, setPaymentMethods] = React.useState<any>(null)
  const [newMethod, setNewMethod] = React.useState<boolean>(false)

  const handleChange = (event: any, newValue: any) => {
    console.log(event)
    setValue(newValue)
  }
  const [datas, setDatas] = useState(false)
  const [values, setValues] = React.useState('Bank transfer in CAD')
  const [steps, setStep] = useState('step1')

  const handleChanges = (event: any) => {
    setValues(event.target.values)
  }

  const handleNextStep = () => {
    if (steps === 'step1') {
      setStep('step2')
      setProgress(50)
    }
    if (steps === 'step2') {
      setStep('step3')
      setProgress(75)
    }
    if (steps === 'step3') {
      setStep('step4')
      setProgress(100)
    }
    if (steps === 'step4') {
      setStep('step1')
      setDatas(false)
      setProgress(25)
    }
  }

  const handleBackStep = () => {
    if (steps === 'step1') {
      setDatas(false)
    }
    if (steps === 'step2') {
      setStep('step1')
      setProgress(25)
    }
    if (steps === 'step3') {
      setStep('step2')
      setProgress(50)
    }
    if (steps === 'step4') {
      setStep('step3')
      setProgress(75)
    }
  }

  React.useEffect(() => {
    setPayoutSection(datas)
  }, [datas])

  const fetchPaymentMethods = () => {
    getPaymentMethods()
      .then((result) => {
        console.log('payment methods')
        console.log(result)
        setPaymentMethods(result.data)
        newMethod && setNewMethod(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  React.useEffect(() => {
    fetchPaymentMethods()
  }, [])

  React.useEffect(() => {
    newMethod && fetchPaymentMethods()
  }, [newMethod])

  return (
    <>
      <Box className={classes.personalInfo}>
        <Container
          className={classes.container}
          style={{
            paddingRight: isSmallSize ? '0px' : undefined,
            paddingLeft: isSmallSize ? '0px' : undefined,
          }}
        >
          <Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.connectionSect}
            >
              <Box
                display="flex"
                alignItems="center"
                onClick={() => {
                  if (datas) {
                    setStep('step1')
                    setDatas(false)
                  } else {
                    goBack('')
                  }

                  setProgress(25)
                }}
                style={{
                  boxShadow: isSmallSize ? '0px 1px 0px #eaeef5' : undefined,
                  paddingBottom: isSmallSize ? '20px' : undefined,
                  // margin: isSmallSize ? "0px -24px" : undefined,
                }}
              >
                <Avatar
                  src={'/images/leftArrow.png'}
                  className={classes.leftArrow}
                  style={{
                    marginLeft: isSmallSize ? '20px' : undefined,
                    marginRight: isSmallSize ? '24px' : undefined,
                  }}
                />
                <Typography variant="body1">
                  {datas
                    ? 'Add a payout method'
                    : 'Payments and bank connection'}
                </Typography>
              </Box>

              {datas && isSmallSize && (
                <LinearProgress
                  variant="determinate"
                  color="primary"
                  value={progress}
                  className={classes.progressBar}
                  // style={{ margin: isSmallSize ? "0px -24px" : undefined }}
                />
              )}

              {datas && (
                <Box style={{textAlign: isSmallSize ? 'center' : undefined}}>
                  <Button
                    className={classes.btnBack}
                    onClick={handleBackStep}
                    style={{borderRadius: '24px'}}
                  >
                    Back
                  </Button>
                  <Button
                    className={classes.btnNext}
                    style={{borderRadius: '24px'}}
                    onClick={() => {
                      handleNextStep()
                    }}
                  >
                    {steps == 'step4' ? 'Complete' : 'Next'}
                  </Button>
                </Box>
              )}
            </Box>
            {!datas ? (
              <Box>
                {/* <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="simple tabs example"
                  className={classes.tabs}
                >
                  <Tab label="Payments" {...a11yProps(0)} />
                  <Tab label="Payouts" {...a11yProps(1)} />
                </Tabs> */}
                <div className={classes.root}>
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
                      <Tab label="Payments" {...a11yProps(0)} />
                      <Tab label="Payouts" {...a11yProps(1)} />
                    </Tabs>
                  </AppBar>
                </div>
              </Box>
            ) : (
              ''
            )}
          </Box>
        </Container>
        {datas && !isSmallSize && (
          <LinearProgress
            variant="determinate"
            color="primary"
            value={progress}
            className={classes.progressBar}
          />
        )}
      </Box>
      {!datas ? (
        <>
          <Box>
            <Container
              className={`${classes.container} ${classes.containMobile}`}
            >
              <TabPanel value={value} index={0}>
                <Grid className={classes.tabContain}>
                  <Grid
                    item
                    sm={12}
                    md={8}
                    lg={8}
                    className={classes.taboneDetail}
                  >
                    <Typography
                      variant="h6"
                      className={classes.taboneTitle}
                      style={{fontFamily: 'Inter, Arial, sans-serif'}}
                    >
                      Payment Methods
                    </Typography>
                    <Typography className={classes.tabonePara}>
                      Add a payment method using our secure payment system, then
                      start planning your next trip.
                    </Typography>
                    <Box
                      display="flex"
                      className={classes.addCardMain}
                      style={{flexWrap: 'wrap'}}
                    >
                      {paymentMethods &&
                        paymentMethods.map((method: any) => {
                          return (
                            <Box
                              className={classes.addCard}
                              style={{
                                marginBottom: '24px',
                                width: isSmallSize ? '100%' : '260px',
                                overflow: 'hidden',
                                height: isSmallSize ? '180px' : undefined,
                              }}
                            >
                              <Box className={classes.cardContain}>
                                <Box
                                  display="flex"
                                  alignItems="center"
                                  justifyContent="space-between"
                                >
                                  <Typography variant="h6">{`${
                                    userInfo.name.split(' ')[0]
                                  }'s Card`}</Typography>
                                  <Avatar
                                    src={
                                      method.card.brand == 'visa'
                                        ? '/images/cc-visa-brands.svg'
                                        : '/images/Mastercard.png'
                                    }
                                    className={classes.masterCard}
                                  />
                                </Box>
                                <Box marginTop="56px">
                                  <Typography variant="h6">{`**** **** **** ${method.card.last4}`}</Typography>
                                </Box>
                              </Box>
                              <Avatar
                                src={'/images/cardImg.png'}
                                className={classes.cardBg}
                              />
                            </Box>
                          )
                        })}
                      {isSmallSize && (
                        <AppButton className={classes.editBtn}>
                          <Avatar
                            src={'/images/edit.png'}
                            className={classes.editIcon}
                          />
                          <Typography variant="body2">Edit</Typography>
                        </AppButton>
                      )}
                      <Box
                        className={classes.addPayment}
                        onClick={() => setModalOpen(true)}
                      >
                        <Avatar
                          src={'/images/addIcon.png'}
                          className={classes.addIcon}
                        />
                        <Typography
                          variant="h6"
                          style={{fontFamily: 'Inter, Arial, sans-serif'}}
                        >
                          Add a payment method
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    sm={12}
                    md={4}
                    lg={4}
                    className={classes.tabTwoDetail}
                  >
                    <Box>
                      <Avatar
                        src={'/images/addPayment.png'}
                        className={classes.paymentIcon}
                      />
                      <Typography
                        variant="h6"
                        className={classes.taboneTitle}
                        style={{fontFamily: 'Inter, Arial, sans-serif'}}
                      >
                        Make all payments via ChaletRetreat
                      </Typography>
                      <Typography
                        className={classes.tabonePara}
                        style={{maxWidth: '330px'}}
                      >
                        ChaletRetreat will never ask you to wire money. Always
                        pay and communicate through ChaletRetreat to ensure you
                        benefit from the protection offered by our Terms and
                        Conditions, our Payment Terms of Service, our
                        Cancellation Terms and other guarantees. Find out more.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Grid className={classes.tabContain}>
                  <Grid
                    item
                    xs={6}
                    lg={6}
                    xl={8}
                    className={`${classes.taboneDetail} ${classes.tabMobile}`}
                  >
                    <Box>
                      <Typography variant="h6" className={classes.taboneTitle}>
                        Payment Methods
                      </Typography>
                      <Typography className={classes.paymentPara}>
                        When you receive payment for a reservation, we call the
                        payment given to you a “deposit”. Our secure payment
                        system supports several payment methods which can be
                        configured below. Consult the FAQ.
                      </Typography>
                    </Box>
                    <Box className={classes.paymentTitles}>
                      <Typography variant="h6" className={classes.taboneTitle}>
                        To be paid, you must register a payment method.
                      </Typography>
                      <Typography className={classes.paymentPara}>
                        Airbnb releases payments approximately 24 hours after
                        the traveler's scheduled arrival time. The time it takes
                        for the money to be deposited into your account depends
                        on your payment method. Find out more.
                      </Typography>
                    </Box>
                    <Button
                      className={classes.btnaddPayment}
                      style={{
                        width: isSmallSize ? '100%' : undefined,
                        borderRadius: isSmallSize ? '24px' : undefined,
                      }}
                      onClick={() => setDatas(true)}
                    >
                      Add a payment method
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    lg={6}
                    xl={4}
                    className={`${classes.tabTwoDetail} ${classes.tabMobile}`}
                  >
                    <Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        marginTop="35px"
                        marginBottom="20px"
                      >
                        <Avatar
                          src={'/images/faq.png'}
                          className={classes.faqIcon}
                        />
                        <Typography
                          variant="h6"
                          className={classes.taboneTitle}
                          style={{marginBottom: '0px'}}
                        >
                          FAQ
                        </Typography>
                      </Box>
                      <Box className={classes.accordionData}>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography className={classes.heading}>
                              How do payments work?
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              When you receive payment for a reservation, we
                              call the payment given to you a “deposit”. Secure
                              payment system supports several.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <Typography className={classes.heading}>
                              Add payout information
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              When you receive payment for a reservation, we
                              call the payment given to you a “deposit”. Secure
                              payment system supports several.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                          >
                            <Typography className={classes.heading}>
                              When will I receive my payment?
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              When you receive payment for a reservation, we
                              call the payment given to you a “deposit”. Secure
                              payment system supports several.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </TabPanel>
            </Container>
          </Box>
          {
            //modalOpen ?
            <AddPaymentModal
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              setNewMethod={setNewMethod}
            />
            //: ""
          }
        </>
      ) : (
        <Box>
          <Grid>
            {steps == 'step1' ? (
              <StepOne handleChanges={handleChanges} values={values} />
            ) : (
              ''
            )}
            {steps == 'step2' ? (
              <StepTwo handleChanges={handleChanges} values={values} />
            ) : (
              ''
            )}
            {steps == 'step3' ? <StepThree /> : ''}
            {steps == 'step4' ? <StepFour /> : ''}
          </Grid>
        </Box>
      )}
    </>
  )
}
export default Payment
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}
