import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(
  () => ({
    locationResultsWrapper: {
      borderRadius: '10px',
      zIndex: 2000,
      border: 'none',
      Shadow:
        '0px 48px 80px -32px rgba(49, 50, 94, 0.12), 0px 64px 132px -20px rgba(49, 50, 94, 0.08)',
    },
    locationResultsList: {
      padding: '15px 0',
    },
    locationResultsItem: {
      display: 'flex',
      alignItems: 'start',
      cursor: 'pointer',
      padding: '5px 15px',
      '& li': {
        '& span': {
          fontWeight: 500,
          fontSize: '13px',
          lineHeight: '18px',
        },
      },
    },
    locationIconWrapper: {
      flex: '0 0 20px',
      maxWidth: '20px',
      marginRight: '15px',
      marginTop: '7px',
      maxHeight: '17px',
    },
    locationResultsIcon: {
      display: 'inline-block',
      width: '100%',
      margin: '0 10px 0 0',
    },
    locationResultsIconHover: {
      width: '100%',
      margin: '0 10px 0 0',
      color: '#5A6987',
    },
    locationResultText: {
      '&:hover': {
        background: 'transparent',
      },
    },
  }),

  {index: 1},
)
