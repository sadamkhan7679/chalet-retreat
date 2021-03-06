import {makeStyles} from '@material-ui/core'
export const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '1600px',
  },
  personalInfo: {
    boxShadow: '0px 1px 0px #eaeef5',
    paddingTop: '30px',
    '& h6': {
      fontSize: '18px',
      color: '#090F1B',
    },
  },
  buttonSave: {
    background: '#1DAF92',
    borderRadius: '6px',
    color: '#fff',
    padding: '8px',
  },
  leftArrow: {
    width: '12px',
    height: '12px',
    marginRight: '30px',
    marginLeft: '40px',
  },
  tabContain: {
    display: 'flex',
    marginTop: '-24px',
    height: '80vh',
  },
  tabs: {
    margin: '25px 0px 0px 30px',
    '& button': {
      minWidth: '125px',
    },
  },
  addPayment: {
    border: '1px solid #EAEEF5',
    borderRadius: '12px',
    width: '264px',
    padding: '38px 0px 32px 0px',
    textAlign: 'center',
    '& h6': {
      fontSize: '16px !important',
    },
  },
  addCard: {
    background: '#090F1B',
    borderRadius: '12px',
    color: '#fff',
    position: 'relative',
    width: '264px',
    marginRight: '24px',
  },
  masterCard: {
    '& img': {
      width: '24px',
      height: '14px',
    },
  },
  cardContain: {
    padding: '20px',
    '& h6': {
      fontWeight: 500,
      fontSize: '14px',
    },
  },
  cardBg: {
    position: 'absolute',
    right: '0px',
    bottom: '0px',
    width: '85px',
    height: '108px',
    overflow: 'inherit',
  },
  addIcon: {
    margin: '0px auto 30px auto',
    width: '20px',
    height: '20px',
  },
  taboneDetail: {
    marginTop: '35px',
  },
  taboneTitle: {
    fontWeight: 600,
    fontSize: '18px',
    marginBottom: '10px',
  },
  tabonePara: {
    color: '#5A6987',
    fontSize: '14px',
    fontWeight: 'normal',
    width: '100%',
    maxWidth: '350px',
    marginBottom: '24px',
  },
  tabTwoDetail: {
    boxShadow: '-1px 0px 0px #eaeef5',
    padding: '0px 0px 0px 40px',
  },
  paymentIcon: {
    margin: '35px 0px 20px 0px',
    '& img': {
      width: '18px',
      height: '22px',
    },
  },
  addModal: {
    position: 'absolute',
    width: 552,
    backgroundColor: theme.palette.background.paper,
    borderRadius: '12px',
    boxShadow: theme.shadows[5],
    padding: '25px',
    top: ' 50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '&:focus': {
      border: '0',
      outline: 'none',
      boxShadow: '0',
    },
  },
  cardIcons: {
    position: 'absolute',
    left: '0px',
    top: '17px',
    zIndex: 2,
    '& img': {
      width: '15px',
      height: '13px',
    },
  },
  btnCancle: {
    border: ' 1px solid #EAEEF5',
    borderRadius: '6px',
    width: '50%',
    color: '#364259',
    padding: '8px',
    margin: '20px 16px 0px 0px',
  },
  btnSave: {
    background: ' #1DAF92',
    borderRadius: '6px',
    width: '50%',
    padding: '8px',
    color: '#fff',
    marginTop: '20px',
    '&:hover': {
      background: ' #1DAF92',
      color: '#fff',
    },
  },
  modalHead: {
    borderBottom: '1px solid #EAEEF5',
    paddingBottom: '20px',
    '& h6': {
      fontWeight: 600,
      fontSize: '18px',
      color: '#090F1B',
    },
    '& img': {
      height: '10px',
      width: '10px',
    },
  },
  method: {
    fontWeight: 600,
    fontSize: '14px',
    marginTop: '25px',
    '& h6': {
      fontWeight: 600,
      fontSize: '14px',
      margin: ' 25px 0px 5px 0px',
    },
  },
  methodInput: {
    border: '1px solid #EAEEF5',
    borderRadius: '6px',
    width: '100%',
    padding: '12px 10px',
    marginTop: '16px',
    '&::placeholder': {
      color: '#9AA7C1',
      fontSize: '14px',
    },
  },
  formDate: {
    position: 'relative',
    '& p': {
      fontSize: '14px',
      color: '#9AA7C1',
    },
  },
  titleDate: {
    position: 'absolute',
    right: '55px',
    top: '23px',
  },
  titleCvv: {
    position: 'absolute',
    right: '15px',
    top: '23px',
  },
  inputCard: {
    '&::placeholder': {
      color: '#252E41',
    },
  },
  paymentPara: {
    color: '#5A6987',
    fontSize: '14px',
    width: '100%',
    maxWidth: '550px',
    fontWeight: 'normal',
  },
  paymentTitles: {
    '& h6': {
      fontSize: '16px',
      marginTop: '24px',
      fontWeight: 500,
      letterSpacing: '0.5px',
    },
  },
  btnaddPayment: {
    background: ' #1DAF92',
    borderRadius: '6px',
    color: '#fff',
    width: '264px',
    padding: '8px',
    marginTop: '24px',
    '&:hover': {
      background: ' #1DAF92',
      color: '#fff',
    },
  },
  faqIcon: {
    '& img': {
      height: '20px',
      width: '20px',
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordionData: {
    '& .MuiAccordion-root': {
      boxShadow: 'none',
      background: 'transparent',
    },
    '& .MuiAccordionSummary-content': {
      '& p': {
        fontSize: '14px',
      },
    },
    '& .MuiAccordionDetails-root': {
      '& p': {
        fontSize: '14px',
        color: '#5A6987',
        fontWeight: 'normal',
      },
    },
    '& .MuiAccordionSummary-expandIcon': {
      color: '#1DAF92',
    },
  },
  textField: {
    marginBottom: '24px',
    '& .MuiTextField-root': {
      width: '100%',
      border: '1px solid #EAEEF5',
      borderRadius: '6px',
      padding: '5px 15px 5px 35px',
      '& .MuiInput-underline': {
        color: ' #252E41',
        fontSize: '14px',
        fontWeight: 'normal',
        '&:before': {
          borderBottom: 'none',
        },
      },
    },
  },
  listForm: {
    paddingLeft: '45px',
    '& .MuiListItemText-root': {
      margin: '0px',
      '&:before': {
        content: "''",
        width: '6px',
        height: '6px',
        background: '#5B6885',
        position: 'absolute',
        borderRadius: '30px',
        top: '11px',
        left: '0',
      },
      '& span': {
        fontSize: '14px',
        color: ' #5A6987',
        fontWeight: 'normal',
      },
    },
    '& .MuiListItem-root': {
      padding: '0px 16px',
    },
  },
  formListLabel: {
    '& span': {
      fontSize: '14px',
    },
  },
  btnBack: {
    border: '1px solid #EAEEF5',
    borderRadius: '6px',
    color: ' #364259',
    height: '40px',
    marginRight: '16px',
  },
  btnNext: {
    background: ' #1DAF92',
    borderRadius: '6px',
    color: '#fff',
    padding: '8px 48px',
    '&:hover': {
      background: ' #1DAF92',
      color: '#fff',
    },
  },
  stepTitle: {
    fontSize: '18px',
    fontWeight: 600,
    marginBottom: '24px',
  },
  accountTitle: {
    '& p': {
      fontSize: '14px',
      marginTop: '16px',
    },
    '& input': {
      border: '1px solid #EAEEF5',
      borderRadius: '6px',
      fontSize: '14px',
      width: '100%',
      padding: '11px 8px',
      '&::placeholder': {
        color: ' #9AA7C1',
      },
    },
  },
  stepPara: {
    fontSize: '14px',
    color: ' #5A6987',
    fontWeight: 400,
    width: '100%',
    maxWidth: '540px',
    marginTop: '-15px',
  },
  cityInput: {
    '& .MuiBox-root': {
      width: '50%',
    },
  },
  regionInput: {
    position: 'relative',
    '& input': {
      paddingLeft: '40px',
    },
  },
  lockIcon: {
    position: 'absolute',
    top: '26px',
    left: '5px',
    '& img': {
      width: '15px',
      height: '18px',
    },
  },
  confirmAccount: {
    '& input': {
      border: 0,
      boxShadow: '0px 1px 0px #eaeef5',
      padding: '0 0 16px 0',
      '&::placeholder': {
        color: '#5A6987',
        fontSize: '14px',
      },
    },
  },
}))

export const useAccountStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '1575px',
    paddingTop: '48px',
  },
  accountSettingsWrapper: {
    paddingLeft: '132px',
    paddingRight: '132px',
    background: 'transparent',
    [theme.breakpoints.down(500)]: {
      padding: '0px',
      display: 'inline-block',
      width: '100%',
    },
  },
  accountSettingsFooter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& div': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '12px 0px',
      width: '72px',
      maxWidth: '100px',
      height: '72px',
      '& p': {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '10px',
        lineHeight: '16px',
        textAlign: 'center',
        color: '#5A6987',
      },
    },
  },
  accountHeader: {
    '& h6': {
      color: '#1A2232',
      fontSize: '24px',
      fontFamily: 'Inter',
      marginBottom: '5px',
    },
    '& p': {
      fontSize: '14px',
      color: '#5A6987',
      fontWeight: '400',
    },
  },
  accountHeaderBold: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '32px',
    color: theme.palette.text.primary,
  },
  accountHeaderNormal: {
    color: theme.palette.text.secondary,
  },
  accountDetail: {
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'wrap',
  },
  accountCard: {
    border: '1px solid #EAEEF5',
    background: ' #fff',
    borderRadius: '12px',
    padding: '20px 50px 20px 20px',
    [theme.breakpoints.down(1030)]: {
      padding: '20px 20px 20px 20px',
    },
    '& img': {
      width: '16px',
      height: '16px',
      objectFit: 'contain',
    },
    '& h6': {
      color: '#1A2232',
      // fontWeight: "600",
      // marginBottom: "5px",
      // fontFamily: "Inter",
    },
    '& p': {
      color: '#5A6987',
      // fontSize: "14px",
      // fontWeight: "normal",
      // letterSpacing: "-0.01em",
    },
  },
  accountGridItem: {
    padding: '24px 24px 0px 0px',
    [theme.breakpoints.down(800)]: {
      padding: '24px 0px 0px 0px',
    },
  },
  containerGrid: {
    maxWidth: '1600px',
  },
  personalInfo: {
    boxShadow: '0px 1px 0px #eaeef5',
    padding: '16px 0px',
    '& h6': {
      fontSize: '18px',
      color: '#090F1B',
    },
  },
  leftArrow: {
    width: '12px',
    height: '12px',
    marginRight: '30px',
    marginLeft: '40px',
  },
  buttonSave: {
    background: '#F8F9FC',
    borderRadius: '6px',
    color: '#D7DDEA',
    padding: '8px 16px',
  },
}))

export const usePersonalStyles = makeStyles(({breakpoints}) => ({
  headBar: {
    boxShadow: '0px 1px 0px #eaeef5',
    background: '#fff',
    '& .MuiToolbar-gutters': {
      padding: '0px 40px',
      minHeight: '72px',
    },
  },
  root: {
    flexGrow: 1,
  },
  logoHeader: {
    '& img': {
      width: '22px',
      height: '32px',
    },
  },
  calenderInput: {
    padding: '8px 16px 8px 16px',
    width: '100%',
    maxWidth: '744px',
    height: '40px',
    background: '#FFFFFF',
    border: '1px solid #EAEEF5',
    borderRadius: '24px',
    justifyContent: 'center',

    '& .MuiInput-underline:after': {
      borderBottom: 'none !important',
    },

    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      border: 'none',
    },

    '& div': {
      border: 'none !important',
      '&:before': {
        border: 'none',
      },
      '&:hover': {
        border: 'none',
      },
      '&:focus': {
        border: 'none',
      },
    },

    '& .css-1laqsz7-MuiInputAdornment-root': {
      display: 'none',
    },
  },
  phoneNoContainer: {
    '& .PhoneInput': {
      padding: '4px 20px 4px 20px',
      width: '100%',
      maxWidth: '360px',
      minWidth: '327px',
      height: '40px',
      background: '#FFFFFF',
      border: '1px solid #EAEEF5',
      borderRadius: '24px',
      '& input': {
        border: 'none',
        '&:focus': {
          outline: 'none',
        },
      },
    },
    '& .PhoneInputCountryIcon ': {
      marginRight: '5px',
    },
  },
  menuItem: {
    '& h6': {
      fontSize: '14px',
      color: '#090F1B',
      margin: '0px 20px',
      fontWeight: '500',
      fontFamily: 'Inter',
      '& span': {
        background: ' #1DAF92',
        borderRadius: '12px',
        color: '#fff',
        fontSize: '12px',
        padding: '5px 13px',
        marginLeft: '10px',
      },
    },
  },
  buttonAdd: {
    color: '#364259',
    '& span': {
      marginRight: '15px',
    },
  },
  profileAvtar: {
    '& img': {
      width: '32px',
      height: '32px',
    },
  },
  arrowIcon: {
    color: '#5A6987',
  },
  container: {
    maxWidth: '1600px',
    [breakpoints.down(600)]: {
      paddingLeft: '0px',
      paddingRight: '0px',
    },
  },
  personalInfo: {
    boxShadow: '0px 1px 0px #eaeef5',
    padding: '16px 0px',
    '& h6': {
      fontSize: '18px',
      color: '#090F1B',
    },
  },
  profileMain: {
    margin: '40px 0px 32px 0px',
    [breakpoints.down(600)]: {
      display: 'block',
    },
  },
  buttonSave: {
    background: '#1DAF92',
    borderRadius: '6px',
    color: '#fff',
    padding: '8px',
    [breakpoints.down(600)]: {
      display: 'none',
    },
    '&:hover': {
      background: ' #1DAF92',
      color: '#fff',
    },
  },
  btnSaves: {
    background: '#1DAF92 !important',
    borderRadius: '6px !important',
    color: '#fff !important',
    padding: '8px !important',
    display: 'none',
    [breakpoints.down(600)]: {
      display: 'block',
      width: '100% !important',
      margin: '10px 0px !important',
    },
    '&:hover': {
      background: ' #1DAF92 !important',
      color: '#fff !important',
    },
  },
  savePersonelInfo: {
    padding: '10px 16px',
    width: '100%',
    maxWidth: '327px',
    height: '44px',
    background: '#1DAF92',
    borderRadius: '24px',
    color: '#fff',
    marginTop: '24px',
    '&:hover': {
      background: ' #1DAF92',
      color: '#fff',
    },
  },
  leftArrow: {
    width: '12px',
    height: '12px',
    marginRight: '30px',
    marginLeft: '40px',
    [breakpoints.down(600)]: {
      marginLeft: '10px',
    },
  },
  buttonDelete: {
    border: '1px solid #EAEEF5',
    borderRadius: '24px',
    color: '#F12237',
    padding: '7px 15px',
    [breakpoints.down(600)]: {
      width: '100%',
    },
  },
  closeIcon: {
    width: '10px',
    height: '10px',
    marginRight: '15px',
  },
  uploadProfile: {
    width: '96px',
    height: '96px',
    borderRadius: '6px',
  },
  uploadImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px 16px 8px 8px',
    maxWidth: '144px',
    width: '100%',
    height: '40px',
    background: '#FFFFFF',
    border: '1px solid #EAEEF5',
    boxSizing: 'border-box',
    borderRadius: '24px',
    color: '#364259',
    fontWeight: 500,
    margin: '0px 16px 0px 32px',
    cursor: 'pointer',
    [breakpoints.down(600)]: {
      margin: '20px 0px',
      textAlign: 'center',
      maxWidth: '100%',
    },
    '& input': {
      position: 'absolute',
      top: '0',
      left: '0',
      opacity: '0',
      width: '100%',
    },
  },
  facebookPhotoBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 16px 8px 8px',
    maxWidth: '219px',
    width: '100%',
    height: '40px',
    background: '#FFFFFF',
    border: '1px solid #EAEEF5',
    borderRadius: '24px',
    [breakpoints.down(600)]: {
      maxWidth: '100%',
    },
  },
  profileNames: {
    [breakpoints.down(600)]: {
      display: 'block',
    },
  },
  inputName: {
    width: '50%',
    [breakpoints.down(600)]: {
      width: '100%',
      paddingRight: '0px',
      paddingBottom: '10px',
    },
    '& label': {
      display: 'block',
      fontWeight: 500,
      marginBottom: '5px',
    },
    '& input': {
      padding: '8px 16px',
      position: 'static',
      maxWidth: '360px',
      width: '100%',
      height: '40px',
      background: '#FFFFFF',
      border: '1px solid #EAEEF5',
      borderRadius: '24px',
      margin: '4px 0px',
      '&:focus': {
        outline: 'none',
      },
      // width: " 100%",
      // border: "1px solid #EAEEF5",
      // borderRadius: "6px",
      // padding: "12px 16px",
      // color: "#252E41",
      // fontSize: "14px",
      // "&::placeholder": {
      //   color: "#252E41",
      // },
    },
  },
  inputRadio: {
    margin: ' 24px 0px',
  },
  radioGroup: {
    flexDirection: 'row',
    '& .MuiFormControlLabel-label': {
      fontSize: '14px',
      fontWeight: 400,
    },
  },
  legend: {
    color: '#1A2232',
    fontSize: '14px',
  },
  inputbirthday: {
    paddingBottom: '32px',
    borderBottom: '1px solid #EAEEF5',
  },
  textField: {
    border: '1px solid #EAEEF5',
    width: '100%',
    borderRadius: '6px',
    padding: ' 3px 15px',
    '& .MuiInput-underline': {
      '&:before': {
        borderBottom: '0',
      },
      '&:hover': {
        '&:before': {
          borderBottom: '0',
        },
      },
      '& input': {
        color: ' #252E41',
        fontWeight: 'normal',
      },
    },
  },
  birthdayData: {
    '& label': {
      display: 'block',
      fontWeight: 500,
      marginBottom: '5px',
    },
  },
  contact: {
    fontWeight: 600,
    fontSize: '18px',
  },
  inputNumber: {
    padding: '12px 16px 12px 60px !important',
  },
  arrowIcons: {
    width: '10px',
    height: '10px',
    marginRight: '15px',
    position: 'absolute',
    top: '48px',
    left: '40px',
    '& img': {
      height: 'initial',
    },
  },
}))
export const useNotificationStyles = makeStyles(({breakpoints}) => ({
  switch_track: {
    backgroundColor: '#EAEEF5',
  },
  switch_base: {
    color: '#EAEEF5',
    '&.Mui-disabled': {
      color: '#e886a9',
    },
    '&.Mui-checked': {
      color: '#95cc97',
    },
    '&.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#1DAF92',
    },
  },
  switch_primary: {
    '&.Mui-checked': {
      color: '#1DAF92',
    },
    '&.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#1DAF92',
    },
  },
  container: {
    maxWidth: '1600px',
    [breakpoints.down(576)]: {
      paddingLeft: '0px',
      paddingRight: '0px',
    },
  },
  personalInfo: {
    boxShadow: '0px 1px 0px #eaeef5',
    paddingTop: '30px',
    '& h6': {
      fontSize: '18px',
      color: '#090F1B',
    },
  },
  leftArrow: {
    width: '12px',
    height: '12px',
    marginRight: '30px',
    marginLeft: '40px',
    [breakpoints.down(576)]: {
      marginLeft: '10px',
    },
  },
  platformWrap: {
    margin: '40px 0px 0px 20px',
    [breakpoints.down(576)]: {
      margin: '40px 0px 0px 0px',
    },
  },
  changeMailBtn: {
    alignItems: 'center',
    padding: '4px 16px',
    width: '100%',
    maxWidth: '113px',
    // height: "32px",
    // background: "#F8F9FC",
    borderRadius: '24px',
    margin: '0px 12px',
  },
  platformTitle: {
    fontWeight: 600,
    fontSize: '18px',
    marginBottom: '24px',
  },
  activeNotification: {
    marginBottom: '32px',
    '& ..Mui-checked': {
      '& .MuiSwitch-track': {
        opacity: 1,
        background: '#1DAF92',
        borderRadius: '48px',
      },
    },
    [breakpoints.down(576)]: {
      display: 'block',
    },
    // "& h6": {
    //   fontWeight: 500,
    //   color: "#364259",
    //   letterSpacing: "-0.02em",
    // },
    // "& p": {
    //   fontSize: "14px",
    //   color: "#5A6987",
    //   fontWeight: "normal",
    //   letterSpacing: "-0.01em",
    // },
    '& .MuiSwitch-root': {
      padding: '9px 11px',
      [breakpoints.down(576)]: {
        marginLeft: '-10px',
      },
      '& .MuiIconButton-root': {
        padding: '10px 9px 9px 9px',
      },
      '& .MuiSwitch-thumb': {
        background: '#fff',
        width: '16px',
        height: '16px',
      },
      '& .MuiSwitch-track': {
        opacity: 1,
        // background: "#EAEEF5",
        borderRadius: '48px',
      },
    },
  },
  changeMail: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 8px 8px 16px',
    maxWidth: '744px',
    width: '100%',
    background: '#FFFFFF',
    border: '1px solid #EAEEF5',
    borderRadius: '6px',
    [breakpoints.down(576)]: {
      padding: '16px',
    },
    '& div': {
      '& p': {fontWeight: 400},
      '& hr': {margin: '0px 12px'},
      '& input': {
        border: ' 1px solid #FFFFFF',
        color: '#5A6987',
        outline: 'none',
        '&:focus': {outline: 'none'},
        [breakpoints.down(576)]: {
          fontSize: '12px',
          marginLeft: '-3px',
        },
        '&::placeholder': {
          fontWeight: 'normal',
          fontSize: '14px',
          color: '#5A6987',
          [breakpoints.down(576)]: {
            fontSize: '12px',
          },
        },
      },
    },
  },
  marketTitle: {
    fontSize: '14px',
    color: '#5A6987',
    fontWeight: 'normal',
    letterSpacing: '-0.01em',
    marginBottom: '25px',
  },
  editIcon: {
    display: 'flex',
    '& img': {
      width: '14px',
      height: '13px',
    },
  },
}))
export const useSecurityStyles = makeStyles(({breakpoints}) => ({
  containerGrid: {
    maxWidth: '1600px',
  },
  personalInfo: {
    boxShadow: '0px 1px 0px #eaeef5',
    padding: '16px 0px',
    '& h6': {
      fontSize: '18px',
      color: '#090F1B',
    },
  },
  leftArrow: {
    width: '12px',
    height: '12px',
    marginRight: '30px',
    marginLeft: '40px',
    [breakpoints.down(600)]: {
      marginLeft: '10px',
    },
  },
  buttonSave: {
    background: '#F8F9FC',
    borderRadius: '6px',
    color: '#D7DDEA',
    padding: '8px 16px',
    [breakpoints.down(600)]: {
      display: 'none',
    },
  },
  btnSaves: {
    background: '#1DAF92',
    borderRadius: '6px',
    color: '#fff',
    padding: '8px',
    display: 'none',
    [breakpoints.down(600)]: {
      display: 'block',
      width: '100%',
      margin: '24px 0px 0px 0px',
      borderRadius: '24px',
    },
    '&:hover': {
      background: ' #1DAF92',
      color: '#fff',
    },
  },
  container: {
    maxWidth: '1530px',
  },
  securityMain: {
    margin: '40px 0px 32px 0px',
    borderBottom: '1px solid #EAEEF5',
    paddingBottom: '32px',
  },
  securityTitle: {
    fontSize: '18px',
    color: ' #1A2232',
    fontWeight: 600,
    marginBottom: '24px',
  },
  securityPassword: {
    marginTop: '16px',
    '& label': {
      fontWeight: 500,
      display: 'block',
      marginBottom: '3px',
    },
    '& input': {
      border: '1px solid #EAEEF5',
      borderRadius: '24px',
      width: '100%',
      padding: '12px 15px',
      fontSize: '14px',
      outline: 'none',
      '&::placeholder': {
        color: '#9AA7C1',
      },
    },
  },
  googleMain: {
    [breakpoints.down(576)]: {
      width: '300px',
      flexFlow: 'wrap',
      '& div': {
        borderRadius: '0px',
        height: 'auto',
      },
    },
    '& img': {
      width: '16px',
      height: '16px',
      marginRight: '12px',
    },
    '& label': {
      fontWeight: 500,
      fontSize: '16px',
      margin: '0px 24px 0px 16px',
    },
    '& p': {
      fontWeight: 'normal',
      fontSize: '14px',
      color: '#5A6987',
    },
  },
  googlePassword: {
    padding: '12px 16px',
    background: '#FFFFFF',
    border: '1px solid #EAEEF5',
    borderRadius: '24px',
    height: '56px',
    [breakpoints.down(500)]: {
      padding: '16px',
      width: '100%',
      maxWidth: '327px',
      height: '84px',
      background: '#FFFFFF',
      border: '1px solid #EAEEF5',
      borderRadius: '6px',
    },
  },
  addPin: {
    color: '#5A6987',
    fontSize: '18px',
  },
}))
