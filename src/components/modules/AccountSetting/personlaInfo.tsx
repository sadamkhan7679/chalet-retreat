// @ts-nocheck
import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import Button from '@material-ui/core/Button'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import InputAdornment from '@mui/material/InputAdornment'
import {
  Avatar,
  Box,
  Container,
  Grid,
  FormLabel,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Typography,
} from '@material-ui/core'
import {useDropzone} from 'react-dropzone'
import {signIn} from 'next-auth/client'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import InnerHeader from './Header'
import CalenderIcon from 'src/components/elements/icons/Calender'
import AppButton from 'src/components/elements/Button'
import {updateUser} from 'src/services/api/auth'
import {GetphonenumberUser, removeUserImage} from 'src/services/api/auth'
import {updateUserAction} from 'src/store/actions/userAction'
import {
  fetchingApiData,
  setRedirectToSocialConnect,
} from 'src/store/actions/accountSettingsAction'
import {usePersonalInfo} from 'src/hooks'
import {useSmallSize} from 'src/hooks/screenSize'
import {usePersonalStyles} from './styles'

interface Props {
  back: string
  setValues?: any
}

const redirectUrl = process.env.NEXT_PUBLIC_SOCIAL_LOGIN_REDIRECT_URL

const PersonalInfo: React.FC<Props> = ({back, setValues}: any) => {
  const dispatch = useDispatch()
  const isSmallSize = useSmallSize()
  const classes = usePersonalStyles()
  const {
    userData,
    setUserData,
    preview,
    setPreview,
    profilePic,
    setProfilePic,
    hasProfilePic,
  } = usePersonalInfo()

  const onDrop = useCallback((acceptedFiles) => {
    setPreview(URL.createObjectURL(acceptedFiles[0]))
    setProfilePic(acceptedFiles[0])
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  const [openDate, setOpenDate] = React.useState(false)

  const handleUpdateUser = async () => {
    dispatch(fetchingApiData(true))
    const fd = new FormData()
    Object.keys(userData).forEach((key) => fd.append(key, userData[key]))
    preview && fd.append('picture', profilePic)

    await updateUser(fd)
      .then((res) => {
        // console.log(res);
        GetphonenumberUser()
        res.status === 200 && dispatch(updateUserAction(res.data))
        dispatch(fetchingApiData(false))
      })
      .catch((err) => {
        console.log(err.response)
        dispatch(fetchingApiData(false))
      })
  }

  const handleChange = (event: any) => {
    const {name, value} = event.target
    const newUserData = {...userData, [name]: value}
    setUserData(newUserData)
  }

  const deleteUserImage = async () => {
    dispatch(fetchingApiData(true))
    setPreview('')
    setProfilePic(null)
    removeUserImage()
      .then((result) => {
        console.log(result)
        dispatch(updateUserAction(result))
        dispatch(fetchingApiData(false))
      })
      .catch((err) => {
        console.log(err)
        dispatch(fetchingApiData(false))
      })
  }

  return (
    <>
      <InnerHeader
        head="Personal information"
        button="Save"
        back={back}
        setValues={setValues}
        handleSaveClick={handleUpdateUser}
      />
      <Box>
        <Container className={classes.container}>
          <Grid>
            <Grid item xs={12} lg={7}>
              <Box
                className={classes.profileMain}
                display="flex"
                alignItems="center"
              >
                <Avatar
                  src={preview ? preview : profilePic}
                  className={classes.uploadProfile}
                />
                <div {...getRootProps()}>
                  <input {...getInputProps()} accept=".jpeg , .png , .jpg" />
                  <Box className={classes.uploadImage}>
                    {!hasProfilePic && (
                      <img
                        src="/images/file-upload.svg"
                        alt="file upload icon"
                      />
                    )}
                    <Typography variant="button">
                      {hasProfilePic ? 'Upload New Photo' : 'Upload Photo'}
                    </Typography>
                  </Box>
                </div>
                {hasProfilePic ? (
                  <Button
                    className={classes.buttonDelete}
                    onClick={() => {
                      setPreview('')
                      deleteUserImage()
                    }}
                  >
                    <Avatar
                      src={'/images/redClose.png'}
                      className={classes.closeIcon}
                    />
                    Delete Photo
                  </Button>
                ) : (
                  <Button
                    className={classes.facebookPhotoBtn}
                    onClick={() => {
                      // useFacebookPhoto();
                      dispatch(setRedirectToSocialConnect('personal'))
                      signIn('facebook', {
                        callbackUrl: redirectUrl,
                        redirect: false,
                      })
                    }}
                  >
                    <img
                      src="/images/facebook-fill.svg"
                      alt="facebook fill icon"
                    />
                    <Typography variant="button">
                      Use your facebook photo
                    </Typography>
                  </Button>
                )}
              </Box>
              <Box
                display="flex"
                alignItems="center"
                className={classes.profileNames}
              >
                <Box className={classes.inputName} sx={{paddingRight: '24px'}}>
                  <Typography variant="button">First name</Typography>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Elon"
                    value={userData.firstName}
                    onChange={handleChange}
                  />
                </Box>
                <Box className={classes.inputName}>
                  <Typography variant="button">Last name</Typography>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Musk"
                    value={userData.lastName}
                    onChange={handleChange}
                  />
                </Box>
              </Box>
              <Box
                className={classes.inputRadio}
                display="flex"
                alignItems="center"
              >
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    <Typography variant="button"> Gender</Typography>
                  </FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender"
                    defaultValue="1"
                    value={userData.gender}
                    onChange={handleChange}
                    className={classes.radioGroup}
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Box className={classes.inputbirthday}>
                <Box className={classes.birthdayData}>
                  {/* <label className={classes.legend}>Birthday</label> */}
                  <Typography
                    variant="button"
                    onClick={() => setOpenDate(!openDate)}
                  >
                    Birthday
                  </Typography>
                  <br />
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={new Date(userData.birthdate)}
                      open={openDate}
                      onChange={(newValue) => {
                        setOpenDate(false)
                        setUserData({
                          ...userData,
                          birthdate: newValue?.toLocaleString(),
                        })
                      }}
                      renderInput={(props) => (
                        <React.Fragment>
                          <TextField
                            {...props}
                            onClick={() => setOpenDate(!openDate)}
                            className={classes.calenderInput}
                            value={userData.birthdate}
                            onChange={handleChange}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <CalenderIcon />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </React.Fragment>
                      )}
                    />
                  </LocalizationProvider>
                </Box>
              </Box>
              <Box marginTop="32px">
                <Typography variant="body1" className={classes.contact}>
                  Contact
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{marginTop: '24px'}}
                  className={classes.profileNames}
                >
                  <Box
                    className={classes.inputName}
                    sx={{paddingRight: '24px'}}
                  >
                    <Typography variant="button">Email</Typography>
                    <input
                      type="text"
                      name="email"
                      placeholder="elonmusk@gmail.com"
                      value={userData.email}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box className={classes.phoneNoContainer}>
                    <Typography variant="button">Phone Number</Typography>
                    <PhoneInput
                      placeholder="(552) 580 / 1552"
                      value={userData.phone_no}
                      onChange={(value) =>
                        setUserData({...userData, phone_no: value})
                      }
                      defaultCountry="US"
                    />
                  </Box>
                </Box>
              </Box>
              {isSmallSize && (
                <Box>
                  <AppButton className={classes.savePersonelInfo}>
                    Save
                  </AppButton>
                </Box>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default PersonalInfo
