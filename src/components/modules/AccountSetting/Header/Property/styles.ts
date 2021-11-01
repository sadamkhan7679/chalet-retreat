import {makeStyles} from '@material-ui/core/styles'
import {interFontFamily} from 'src/components/foundation/typography'
export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  container: {
    maxWidth: '1575px',
    paddingTop: '48px',
    [theme.breakpoints.down('xs')]: {
      padding: '48px 0px 0px 0px',
    },
  },
  accountHeader: {
    '& h6': {
      color: '#1A2232',
      fontSize: '24px',
      marginBottom: '5px',
      fontWeight: '600',
      letterSpacing: '-0.03em',
    },
    '& p': {
      fontSize: '14px',
      color: '#5A6987',
      fontWeight: '400',
      letterSpacing: '-0.01em',
      marginBottom: '24px',
    },
  },
  propertyTable: {
    '& .MuiPaper-root': {
      background: '#fafafa',
      boxShadow: 'none',
    },
    [theme.breakpoints.down(992)]: {
      display: 'none',
    },
  },
  tableHead: {
    background: '#FFFFFF',
    borderRadius: '6px',
    '& th': {
      color: '#5A6987',
      fontSize: '12px',
      fontWeight: 500,
      letterSpacing: '0.04em',
      textAlign: 'left',
      '&:first-child': {
        paddingLeft: '70px',
      },
      '&:last-child': {paddingRight: '70px'},
    },
  },
  propertyName: {
    '& .MuiAvatar-root': {
      width: '48px',
      height: '48px',
      borderRadius: '6px',
      marginRight: '16px',
    },
    '& h6': {
      fontFamily: interFontFamily,
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '24px',
      color: '#1A2232',
    },
    '& p': {
      fontSize: '12px',
      color: '#5A6987',
      fontWeight: 'normal',
      letterSpacing: '-0.012em',
    },
  },
  propertyTitle: {
    fontFamily: interFontFamily,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '24px',
    color: '#1A2232',
  },
  tableBody: {
    '& tr': {
      '& th': {
        padding: '12px 0px',
      },
      '& td': {
        fontWeight: 500,
        // position: 'relative',
        '&:first-child': {
          paddingLeft: '70px',
        },
        '&:last-child': {paddingRight: '70px'},
      },
    },
  },
  status: {
    '& div': {
      marginRight: '12px',
    },
    '&:before': {
      // content: "''",
      // width: '4px',
      // height: '4px',
      // background: '#6E3FF3',
      // position: 'absolute',
      // left: '4px',
      // top: '37px',
      // borderRadius: '30px',
    },
  },
  modifyContain: {
    alignItems: 'center',
    padding: '4px 16px',
    width: '77px',
    height: '32px',
    background: '#FFFFFF',
    border: '1px solid #EAEEF5',
    borderRadius: '24px',
    cursor: 'pointer',
  },
  propertyAccordion: {
    boxShadow: 'none',
    '& .MuiAccordionSummary-root': {
      [theme.breakpoints.down('sm')]: {
        padding: '0',
      },
    },
  },
  propertyDetails: {
    width: '100%',
    margin: '10px 0px',
    '& h6': {
      color: '#5A6987',
      fontSize: '12px',
      fontWeight: 500,
      letterSpacing: '0.04em',
      textAlign: 'left',
      textTransform: 'uppercase',
    },
    '& p': {
      fontWeight: 500,
      [theme.breakpoints.down('xs')]: {
        fontSize: '14px',
      },
    },
  },
  btnModify: {
    background: '#fff',
    color: '#364259',
    padding: '10px 0px',
    borderBottom: '1px solid #EAEEF5',
  },
  accordionDetails: {
    background: '#F8F9FC',
    display: 'block',
  },
  propertyAccordionMain: {
    display: 'none',
    [theme.breakpoints.down(992)]: {
      display: 'block',
    },
  },
  propertyWrap: {
    margin: '-24px',
  },
  tableContainer: {
    width: '100%',
    minWidth: '100% !important',
  },
  statusBox: {
    width: '4px',
    height: '4px',
    background: '#1DAF92',
    borderRadius: '50%',
  },
  propertyId: {
    fontFamily: interFontFamily,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '16px',
    color: '#090F1B',
  },
}))
