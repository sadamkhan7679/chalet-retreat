import {makeStyles} from '@material-ui/core'
export const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '1600px',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  wrapper: {
    paddingTop: '20px',
  },
  backButton: {
    padding: 0,
  },
  detailsbutton: {
    color: '#1DAF92',
  },
}))
