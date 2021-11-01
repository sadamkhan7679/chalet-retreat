import {Box} from '@material-ui/core'
import React from 'react'
import {useImageSectionStyles} from './styles'

type Props = {
  image: string
}

const TreeHouseImageSection = ({image}: Props) => {
  const classes = useImageSectionStyles()
  return (
    <Box>
      <img className={classes.image} src={image} alt="main image" />
    </Box>
  )
}

export default TreeHouseImageSection
