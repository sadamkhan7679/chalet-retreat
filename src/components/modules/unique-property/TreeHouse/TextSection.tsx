import {Box, makeStyles, Backdrop, IconButton, Button} from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import AppButton from 'src/components/elements/Button'
import CloseIcon from '@material-ui/icons/Close'
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined'
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined'

export const useStyles = makeStyles(({breakpoints}) => ({
  wrappper: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    [breakpoints.up('md')]: {
      maxWidth: '456px',
    },
    [breakpoints.between(760, 790)]: {
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'inherit',
      flexDirection: 'column',
      position: 'relative',
      width: '100%',
    },
    [breakpoints.between('md', 'lg')]: {
      flexBasis: '50%',
    },
    [breakpoints.down('sm')]: {
      marginTop: '176px',
    },
  },

  button: {
    width: 'fit-content',
    borderRadius: '30px',
    position: 'absolute',
    background: '#fff',
    top: '275px',
    right: '15px',
    '&:hover': {
      color: '#fff',
    },
    [breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: '88px',
    },
    [breakpoints.down(426)]: {
      marginTop: '285px',
    },
  },

  imgSize: {
    width: '264px',
    height: '168px',
    borderRadius: '15px',
  },

  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: ' 16px',
    [breakpoints.down(426)]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },

  topGap: {
    marginTop: '13px',
  },

  backdrop: {
    zIndex: 3000,
    color: '#fff',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  mobileHandel: {
    [breakpoints.down(426)]: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '-175px',
    },
  },

  backdropfunctionalityContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 760,
    display: 'flex',
  },

  iconButton: {
    backgroundColor: '#fff',
    color: '#2E3543',
    margin: '0px',
    top: '20px',
    left: 'auto',
    bottom: 'auto',
    right: '20px',
    position: 'fixed',
  },

  disableButton: {
    display: 'none',
  },
  backForwardIcon: {
    backgroundColor: '#fff',
    color: '#2E3543',
    alignItems: 'center',
    fontWeight: 'bold',
    padding: '20px',
    borderRadius: '50%',
    width: '5px',
    height: '5px',
    // marginLeft: "-50px",
    // marginRight: "-70px",
    '&:hover': {
      backgroudColor: '#fff',
    },
  },

  backdropImagesContainer: {
    width: '50%',
    height: 'auto',
    display: 'flex',
    top: '20%',
    borderRadius: 30,
  },

  backdropImages: {
    width: 550,
    height: 'auto',
    borderRadius: 30,
    // objectFit: 'contain'
  },
}))

type Props = {
  photos: any
}

const TreeHouseTextSection = ({photos}: Props) => {
  const classes = useStyles()
  const [showDropBox, setShowDropBox] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsMobile(true)
    }
  }, [])

  const handleToggle = () => {
    setShowDropBox(!showDropBox)
  }

  const handleClose = () => {
    setShowDropBox(false)
  }

  const photosToDisplay1 = photos.length > 2 ? photos.slice(0, 2) : []
  const photosToDisplay2 = photos.length >= 4 ? photos.slice(2, 4) : []

  return (
    <Box className={classes.wrappper}>
      <Box className={classes.mobileHandel}>
        <Box className={classes.flexContainer}>
          {photosToDisplay1.map((photo: any) => (
            <Box>
              <img
                className={classes.imgSize}
                src={photo.image.url}
                alt={photo.image.name}
              />
            </Box>
          ))}
        </Box>
        <Box className={`${classes.flexContainer} ${classes.topGap}`}>
          {photosToDisplay2.map((photo: any) => (
            <Box>
              <img
                className={classes.imgSize}
                src={photo.image.url}
                alt={photo.image.name}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <AppButton
        className={`${classes.button} ${isMobile ? classes.disableButton : ''}`}
        variant="outlined"
        onClick={handleToggle}
      >
        See all photos
      </AppButton>
      <Slider open={showDropBox} handleClose={handleClose} images={photos} />
    </Box>
  )
}

export default TreeHouseTextSection

type Image = {
  image: {
    name: string
    url: string
  }
}

type SliderProps = {
  images: Image[]
  open: boolean
  handleClose: () => void
}

function Slider({images, open, handleClose}: SliderProps) {
  const classes = useStyles()

  if (!images.length) {
    return null
  }

  const [currentIndex, setCurrentIndex] = useState(0)

  const imageToDisplay = images[currentIndex].image.url

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <Backdrop className={classes.backdrop} open={open}>
      <IconButton className={classes.iconButton} onClick={handleClose}>
        <CloseIcon />
      </IconButton>
      <Box className={classes.backdropfunctionalityContainer}>
        <Button
          variant="contained"
          className={classes.backForwardIcon}
          onClick={handlePrevious}
        >
          <ArrowBackIosOutlinedIcon />
        </Button>
        <Box className={classes.backdropImagesContainer}>
          <img
            className={classes.backdropImages}
            src={imageToDisplay}
            alt="pics"
          />
        </Box>
        <Button
          variant="contained"
          className={classes.backForwardIcon}
          onClick={handleNext}
        >
          <ArrowForwardIosOutlinedIcon />
        </Button>
      </Box>
    </Backdrop>
  )
}
