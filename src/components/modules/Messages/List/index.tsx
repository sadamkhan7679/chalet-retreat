import React from 'react'
import {Button, Typography, Container, Box, Avatar} from '@material-ui/core'
import {useScreenSizeDown} from 'src/hooks'
import {useStyles} from './styles'

const messages = [
  {
    id: 1,
    time: '31 August 8:00AM',
    host: {
      name: 'Luc Bernier',
      image: '/images/avtarProfile.png',
    },
    booking: {
      property: 'Sainte Anne-1',
      date: '8-13 Sep 2021',
      status: 1,
    },
    message: 'Hi, first of all thank you for choosing...',
  },
  {
    id: 1,
    time: '31 August 8:00AM',
    host: {
      name: 'Luc Bernier',
      image: '/images/avtarProfile.png',
    },
    booking: {
      property: 'Sainte Anne-1',
      date: '8-13 Sep 2021',
      status: 2,
    },
    message: 'Hi, first of all thank you for choosing...',
  },
  {
    id: 1,
    time: '31 August 8:00AM',
    host: {
      name: 'Luc Bernier',
      image: '/images/avtarProfile.png',
    },
    booking: {
      property: 'Sainte Anne-1',
      date: '8-13 Sep 2021',
      status: 3,
    },
    message: 'Hi, first of all thank you for choosing...',
  },
  {
    id: 1,
    time: '31 August 8:00AM',
    host: {
      name: 'Luc Bernier',
      image: '/images/avtarProfile.png',
    },
    booking: {
      property: 'Sainte Anne-1',
      date: '8-13 Sep 2021',
      status: 4,
    },
    message: 'Hi, first of all thank you for choosing...',
  },
]

const StatusIcon = ({status, classes}: any) => {
  switch (status) {
    case 1:
      return (
        <Box
          className={`${classes.bookingStatusIcon} ${classes.bookingStatusAccepted}`}
        />
      )
    case 2:
      return (
        <Box
          className={`${classes.bookingStatusIcon} ${classes.bookingStatusInProgress}`}
        />
      )
    case 3:
      return (
        <Box
          className={`${classes.bookingStatusIcon} ${classes.bookingStatusDeclined}`}
        />
      )
    case 4:
      return (
        <Box
          className={`${classes.bookingStatusIcon} ${classes.bookingStatusReview}`}
        />
      )
    default:
      return <Box />
  }
}

const BookingStatus = ({status, classes}: any) => {
  switch (status) {
    case 1:
      return (
        <Box className={classes.bookingStatusContainer}>
          <StatusIcon status={status} classes={classes} />
          <Typography className={classes.bookingStatus}>Accepted</Typography>
        </Box>
      )
    case 2:
      return (
        <Box className={classes.bookingStatusContainer}>
          <StatusIcon status={status} classes={classes} />
          <Typography className={classes.bookingStatus}>In Progress</Typography>
        </Box>
      )
    case 3:
      return (
        <Box className={classes.bookingStatusContainer}>
          <StatusIcon status={status} classes={classes} />
          <Typography className={classes.bookingStatus}>Declined</Typography>
        </Box>
      )
    case 4:
      return (
        <Box className={classes.bookingStatusContainer}>
          <StatusIcon status={status} classes={classes} />
          <Typography className={classes.bookingStatus}>Review</Typography>
        </Box>
      )
    default:
      return (
        <Box>
          <Typography>Review</Typography>
        </Box>
      )
  }
}

interface ListProps {
  handleAnswer: (id: number) => void
}

const List = ({handleAnswer}: ListProps) => {
  const classes = useStyles()
  const isSmallerSizeDown = useScreenSizeDown('xs')

  return (
    <Container className={classes.container}>
      {isSmallerSizeDown ? (
        messages.map((message) => (
          <Box
            key={message.id}
            className={classes.bookingStatusContainerSmall}
            onClick={() => handleAnswer(message.id)}
          >
            <Box className={classes.hostInfo}>
              <Avatar src={message.host.image} />
              <Box>
                <Typography>{message.host.name}</Typography>
                <Typography className={classes.message}>
                  {message.message}
                </Typography>
              </Box>
              <StatusIcon status={message.booking.status} classes={classes} />
            </Box>
          </Box>
        ))
      ) : (
        <table className={classes.table}>
          <thead>
            <tr>
              <th className={classes.th}>TIME</th>
              <th className={classes.th}>HOST INFOS</th>
              <th className={classes.th}>BOOKING INFOS</th>
              <th className={classes.th}>MESSAGE</th>
              <th className={classes.th}>BOOKING STATUS</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message.id}>
                <td className={`${classes.td} ${classes.time}`}>
                  {message.time}
                </td>
                <td className={classes.td}>
                  <Box className={classes.hostInfo}>
                    <Avatar src={message.host.image} />
                    {message.host.name}
                  </Box>
                </td>
                <td className={classes.td}>
                  <Box>
                    <Typography className={classes.bookingInfoName}>
                      {message.booking.property}
                    </Typography>
                    <Typography className={classes.bookingInfoDate}>
                      {message.booking.date}
                    </Typography>
                  </Box>
                </td>
                <td className={classes.td}>
                  <Typography className={classes.message}>
                    {message.message}
                  </Typography>
                </td>
                <td className={classes.td}>
                  <BookingStatus
                    status={message.booking.status}
                    classes={classes}
                  />
                </td>
                <td>
                  <Button
                    variant="text"
                    onClick={() => handleAnswer(message.id)}
                  >
                    Answer
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Container>
  )
}

export default List
