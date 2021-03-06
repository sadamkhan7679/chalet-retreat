import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {createStyles, makeStyles} from '@material-ui/styles'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

export const useStyles = makeStyles(() =>
  createStyles({
    slickWrapper: {
      '&:after': {border: 'none'},
      '& .slick-slide': {
        width: '288px',
        borderRadius: '12px',
      },
      '& .slick-dots': {
        position: 'absolute',
        bottom: '16px',
        '& li': {
          background: 'rgba(255, 255, 255, 0.56)',
          height: '8px',
          width: '8px',
          borderRadius: '50%',
          margin: '0 4px',
        },
        '& .slick-active': {
          background: '#1DAF92',
        },
      },
    },
    imageWrapper: {
      width: '100%',
      overflow: 'hidden',
      borderRadius: '12px',
      position: 'relative',
      '& img': {
        width: '100%',
      },
      cursor: 'pointer',
    },
    favoriteIcon: {
      top: '12px',
      right: '13px',
      width: '32px',
      height: '32px',
      position: 'absolute',
      background: '#FFFFFF',
      borderRadius: '50%',
      padding: '6px',
      color: '#9AA7C1',
      cursor: 'pointer',
    },
  }),
)

const ResultItemSlider = ({photos}: any) => {
  const classes = useStyles()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings} className={classes.slickWrapper}>
      {photos.map((photo: any) => {
        return (
          <div className={classes.imageWrapper} key={photo.id}>
            <img src={photo.image.url} alt={photo.image.name} />
            <FavoriteBorderIcon className={classes.favoriteIcon} />
          </div>
        )
      })}
    </Slider>
  )
}

export default ResultItemSlider
