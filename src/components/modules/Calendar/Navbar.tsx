import React from 'react'
import {Box, IconButton} from '@material-ui/core'
import moment from 'moment'
import ArrowLeftIcon from 'src/components/elements/icons/ArrowLeft'
import ArrowRightIcon from 'src/components/elements/icons/ArrowRight'
import AppTypography from 'src/components/elements/Typography'
import {useScreenSizeDown} from 'src/hooks'
import {useNavbarStyles} from './styles'

interface Props {
  leftBtn: React.ReactNode
  rightBtn: React.ReactNode
  year: number
  month: number
  onNext: () => void
  onPrevious: () => void
}

const CalendarNavbar: React.FC<Props> = ({
  leftBtn,
  rightBtn,
  year,
  month,
  onNext,
  onPrevious,
}) => {
  const classes = useNavbarStyles()
  const isSmallerSizeDown = useScreenSizeDown('xs')
  return (
    <Box className={classes.root}>
      {leftBtn}
      <Box className={classes.monthWrapper}>
        <IconButton className={classes.iconBtn} onClick={onPrevious}>
          <ArrowLeftIcon className={classes.icon} />
        </IconButton>
        <AppTypography
          neutralColor={800}
          variant={isSmallerSizeDown ? 'heading' : 'displaySmall'}
        >
          {moment(`${year}-${month}`).format('MMMM YYYY')}
        </AppTypography>
        <IconButton className={classes.iconBtn} onClick={onNext}>
          <ArrowRightIcon className={classes.icon} />
        </IconButton>
      </Box>
      {rightBtn}
    </Box>
  )
}

export default CalendarNavbar
