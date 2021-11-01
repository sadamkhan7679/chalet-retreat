import React from 'react'
import Box from '@material-ui/core/Box'
import clsx from 'clsx'
import {Avatar, Grid, Typography} from '@material-ui/core'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'

interface Props {
  classes: any
  setEditvalue: React.Dispatch<React.SetStateAction<string>>
}

const PropertyDescription: React.FC<Props> = ({classes, setEditvalue}) => {
  const [expanded, setExpanded] = React.useState(true)

  const handleChange = () => {
    setExpanded(!expanded)
  }

  return (
    <Box
      className={clsx(classes.container, classes.propertyTopbar)}

      // className={classes.photos}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" className={classes.photosTitle}>
          Description of the property
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          onClick={() => {
            setEditvalue('description')
          }}
        >
          <Avatar src={'/images/edit.png'} className={classes.editIcon} />
          <Typography className={classes.editTitle}>Edit</Typography>
        </Box>
      </Box>
      <Box className={classes.accordionWrapper}>
        <Accordion expanded={expanded}>
          <AccordionSummary
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Grid className={classes.propDesc}>
              <Grid item xl={2} lg={2} sm={12}>
                <Typography className={classes.addTitle}>Ad title</Typography>
              </Grid>
              <Grid item xl={6} lg={6} sm={12}>
                <Typography
                  variant="h6"
                  // className={classes.addressContents}
                  className={classes.textNormal}
                >
                  Superb 5-seater chalet
                </Typography>
              </Grid>
            </Grid>
            <Grid className={classes.propDesc}>
              <Grid
                item
                xl={2}
                lg={2}
                sm={12}
                // className={classes.propTitle}
              >
                <Typography className={classes.addTitle}>
                  AD Description{' '}
                </Typography>
              </Grid>
              <Grid item xl={6} lg={6} sm={12}>
                <Typography
                  variant="h6"
                  //className={classes.addressContents}
                  className={classes.textNormal}
                >
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Grid className={classes.propDesc}>
              <Grid item xl={2} lg={2} sm={12}>
                <Typography className={classes.addTitle}>
                  Your accomodation
                </Typography>
              </Grid>
              <Grid item xl={6} lg={6} sm={12}>
                <Typography
                  variant="h6"
                  //className={classes.addressContents}
                  className={classes.textNormal}
                >
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </Typography>
              </Grid>
            </Grid>
            <Grid className={classes.propDesc}>
              <Grid item xl={2} lg={2} sm={12}>
                <Typography className={classes.addTitle}>
                  Your availabilities
                </Typography>
              </Grid>
              <Grid item xl={6} lg={6} sm={12}>
                <Typography
                  variant="h6"
                  //className={classes.addressContents}
                  className={classes.textNormal}
                >
                  It is a paradisematic country, in which roasted parts of
                  sentences fly into your mouth.
                </Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Grid onClick={handleChange}>
          <Grid item xl={2} className={classes.seeAll}>
            <Typography className={classes.editTitle}>
              See {expanded ? 'Less' : 'All'}
            </Typography>
            <Avatar
              src={expanded ? '/images/arrow-up.svg' : '/images/arrow-down.svg'}
              className={classes.arrowDownIcon}
              //alt="arrow icon"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default PropertyDescription
