import {makeStyles} from '@material-ui/core'
export const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '1600px',
  },
  table: {
    width: '100%',
  },
  th: {
    textAlign: 'left',
    fontSize: 12,
    lineHeight: '16px',
    color: '#5A6987',
    height: '56px',
  },
  td: {
    height: '80px',
  },
  time: {
    fontSize: '12px',
    lineHeight: '20px',
    color: '#5A6987',
  },
  hostInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '8px',
    color: '#1A2232',
    fontSize: 14,
    lineHeight: '24px',
  },
  bookingInfoName: {
    color: '#1A2232',
    fontSize: 14,
    lineHeight: '24px',
  },
  bookingInfoDate: {
    color: '#5A6987',
    fontSize: 12,
    lineHeight: '20px',
  },
  message: {
    color: '#090F1B',
    fontSize: 12,
    lineHeight: '20px',
  },
  bookingStatusContainerSmall: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: '20px',
  },
  bookingStatusContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '8px',
  },
  bookingStatus: {
    fontSize: 14,
    lineHeight: '24px',
    color: '#1A2232',
  },
  bookingStatusIcon: {
    width: '4px',
    height: '4px',
    borderRadius: '100%',
  },
  bookingStatusAccepted: {
    backgroundColor: '#1DAF92',
  },
  bookingStatusInProgress: {
    backgroundColor: '#F29D2D',
  },
  bookingStatusDeclined: {
    backgroundColor: '#F12237',
  },
  bookingStatusReview: {
    backgroundColor: '#6E3FF3',
  },
}))
