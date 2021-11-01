import React, {useEffect, useState} from 'react'
import {Box, BoxProps} from '@material-ui/core'
import moment from 'moment'
import {useScreenSizeDown} from 'src/hooks'
import CalendarHead from './Head'
import CalendarNavbar from './Navbar'
import CalendarBody from './Body'

interface Props {
  rootProps?: BoxProps
  leftBtn: React.ReactNode
  rightBtn: React.ReactNode
  calendars: any
  icalFeeds: any
  onEdit?: (calendarId: number) => void
}

const Calendar: React.FC<Props> = ({
  rootProps,
  leftBtn,
  rightBtn,
  calendars,
  icalFeeds,
  onEdit,
}) => {
  const [year, setYear] = useState(0)
  const [month, setMonth] = useState(0)

  const isSmallerSizeDown = useScreenSizeDown('xs')

  const nextMonth = () => {
    if (!year || !month) {
      return
    }
    if (month === 12) {
      setYear(year + 1)
      setMonth(1)
    } else {
      setMonth(month + 1)
    }
  }

  const previousMonth = () => {
    if (!year || !month) {
      return
    }
    if (month === 1) {
      setYear(year - 1)
      setMonth(12)
    } else {
      setMonth(month - 1)
    }
  }

  useEffect(() => {
    const currentDate = moment()
    setMonth(Number(currentDate.format('M')))
    setYear(Number(currentDate.format('YYYY')))
  }, [])

  return (
    <Box {...rootProps}>
      <CalendarNavbar
        leftBtn={isSmallerSizeDown ? null : leftBtn}
        rightBtn={rightBtn}
        year={year}
        month={month}
        onNext={nextMonth}
        onPrevious={previousMonth}
      />
      <CalendarHead />
      <CalendarBody
        year={year}
        month={month}
        calendars={calendars}
        icalFeeds={icalFeeds}
        onEdit={onEdit}
      />
      {isSmallerSizeDown ? leftBtn : null}
    </Box>
  )
}

export default Calendar
