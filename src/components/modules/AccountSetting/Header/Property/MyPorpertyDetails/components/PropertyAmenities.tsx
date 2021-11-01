import React from 'react'
import Box from '@material-ui/core/Box'
import clsx from 'clsx'
import {Avatar, Grid, Typography} from '@material-ui/core'
import AmenitiesData from '../data'

interface Props {
  classes: any
  setEditvalue: React.Dispatch<React.SetStateAction<string>>
  PropertyData: any
}

const PropertyAmenities: React.FC<Props> = ({
  classes,
  setEditvalue,
  PropertyData,
}) => {
  const [openAmenities, setOpenAmenities] = React.useState(false)

  return (
    <>
      <Box
        //className={classes.photos}
        className={clsx(classes.container, classes.propertyTopbar)}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" className={classes.photosTitle}>
            Amenities
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            onClick={() => {
              setEditvalue('amenities')
            }}
          >
            <Avatar src={'/images/edit.png'} className={classes.editIcon} />
            <Typography className={classes.editTitle}>Edit</Typography>
          </Box>
        </Box>

        <Box>
          <Typography style={{marginTop: '10px'}}>Outdoor features</Typography>

          <Grid className={classes.outdoorFeature}>
            {PropertyData?.amenities.map((amenity: any) => {
              console.log(amenity)
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={4}
                  className={classes.outdoor}
                >
                  <Avatar
                    src={'/images/garbage.png'}
                    className={classes.outdoorIcon}
                  />
                  <Typography className={classes.outdoorTitle}>
                    {PropertyData.amenities}
                  </Typography>
                </Grid>
              )
            })}
          </Grid>
        </Box>
        {openAmenities ? (
          <div>
            {AmenitiesData &&
              AmenitiesData.map((props, i) => (
                <Box>
                  <Typography style={{marginTop: '10px'}}>
                    <h1>{i}</h1>
                    {props.title}
                  </Typography>

                  <Grid className={classes.outdoorFeature}>
                    {AmenitiesData[i].data &&
                      AmenitiesData[i].data.map(
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={6}
                          lg={4}
                          className={classes.outdoor}
                        >
                          <Avatar
                            src={`/images/${props.image}`}
                            className={classes.outdoorIcon}
                          />
                          <Typography className={classes.outdoorTitle}>
                            {props.head}
                          </Typography>
                        </Grid>,
                      )}
                  </Grid>
                </Box>
              ))}
          </div>
        ) : (
          ''
        )}

        <Grid>
          <Grid
            item
            className={classes.seeAll}
            onClick={() => {
              setOpenAmenities(!openAmenities)
            }}
          >
            <Typography className={classes.editTitle}>
              {openAmenities ? 'See less' : 'See more'}
            </Typography>
            <Avatar
              src={'/images/arrowBottom.png'}
              className={
                openAmenities ? classes.arrowDownIcon : classes.arrowUpIcon
              }
            />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default PropertyAmenities
