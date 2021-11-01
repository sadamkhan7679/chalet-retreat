import React, {useState} from 'react'
import {
  Typography,
  Container,
  Box,
  IconButton,
  Avatar,
  Button,
  Grid,
} from '@material-ui/core'
import List from './List'
import Detail from './Detail'
import {useScreenSizeDown} from 'src/hooks'
import {useStyles} from './styles'

const Messages = () => {
  const classes = useStyles()
  const isSmallerSizeDown = useScreenSizeDown('xs')

  const [selectedMessageId, setSelectedMessageId] = useState(0)
  const [showDetails, setShowDetails] = useState(false)

  const toggleShowDetails = () => setShowDetails(!showDetails)

  const handleAnswer = (messageId: number) => setSelectedMessageId(messageId)
  const handleBack = () => {
    if (showDetails) {
      toggleShowDetails()
    } else {
      setSelectedMessageId(0)
    }
  }

  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={9} className={classes.headerContainer}>
          {selectedMessageId ? (
            <IconButton
              aria-label="delete"
              onClick={handleBack}
              className={classes.backButton}
            >
              <Avatar src="/images/back-icon.svg" />
            </IconButton>
          ) : null}
          <Typography variant="h3">Messages</Typography>
        </Grid>
        <Grid item xs={3}>
          {isSmallerSizeDown && (
            <Button
              className={classes.detailsbutton}
              onClick={toggleShowDetails}
            >
              Details
            </Button>
          )}
        </Grid>
      </Grid>
      <Box className={classes.wrapper}>
        {selectedMessageId ? (
          <Detail showDetail={showDetails} />
        ) : (
          <List handleAnswer={handleAnswer} />
        )}
      </Box>
    </Container>
  )
}

export default Messages
