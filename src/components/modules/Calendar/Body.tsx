import React, {useState, useEffect} from 'react'
import moment from 'moment'
import {Box, makeStyles} from '@material-ui/core'
import ForbidIcon from 'src/components/elements/icons/Forbid'
import AppTypography from 'src/components/elements/Typography'
import {useScreenSizeDown} from 'src/hooks'
import {CalendarValues} from 'src/types'

const useStyles = makeStyles(
  ({breakpoints, palette}) => ({
    root: {
      background: palette.background.paper,
      border: `1px solid ${palette.divider}`,
      cursor: 'pointer',
      padding: '16px',
      position: 'relative',
      height: '141px',
      maxWidth: '161px',
      width: '100%',
      '&:hover': {
        background: palette.grey[100],
      },
      '&:active': {
        background: palette.grey[200],
      },
      [breakpoints.down('sm')]: {
        padding: '12px',
      },
      [breakpoints.down('xs')]: {
        padding: '6px',
        height: '110px',
      },
    },
    activeLabel: {
      background: palette.primary.main,
      borderRadius: '50%',
      height: '8px',
      left: '12px',
      position: 'absolute',
      top: '12px',
      width: '8px',
      [breakpoints.down('xs')]: {
        height: '6px',
        width: '6px',
      },
    },
    icon: {
      fontSize: '17.5px',
      left: '13px',
      position: 'absolute',
      top: '13px',
      [breakpoints.down('xs')]: {
        left: '9.3px',
        top: '9.3px',
        fontSize: '12px',
      },
    },
    text: {
      textAlign: 'right',
    },
  }),
  {index: 1},
)

type CalendarBodyConfig = {
  year: number
  month: number
  calendars: any
  icalFeeds: any
  onEdit?: (calendarId: number) => void
}

const getBlankDays = (count: number) => {
  const result = []
  for (let i = 0; i < count; i++) {
    result.push(<CalendarDay status="disabled" />)
  }

  return result
}

const getStatus = (calendar: CalendarValues) => {
  if (calendar.is_block_period) {
    return 'forbid'
  }

  return 'active'
}

const getFirstWeeks = (
  startDayOfMonth: number,
  year: number,
  month: number,
  calendars: any,
  icalFeeds: any,
  onEdit?: (calendarId: number) => void,
) => {
  console.log(icalFeeds)
  const result = []
  for (let i = 0; i < 7 - startDayOfMonth; i++) {
    const find = calendars
      ? calendars.find(
          (calendar: any) =>
            moment(`${year}-${month}-${i + 1}`).isBetween(
              calendar.start,
              calendar.end,
            ) ||
            moment(`${year}-${month}-${i + 1}`).isSame(calendar.start) ||
            moment(`${year}-${month}-${i + 1}`).isSame(calendar.end),
        )
      : null

    result.push(
      <CalendarDay
        day={i + 1}
        status={find ? getStatus(find) : 'disabled'}
        price={find?.custom_pricing?.base_rate}
        calendarId={find?.id}
        onClick={onEdit}
      />,
    )
  }

  return result
}

const getLastWeeks = (
  daysInMonth: number,
  endDayOfMonth: number,
  year: number,
  month: number,
  calendars: any,
  icalFeeds: any,
  onEdit?: (calendarId: number) => void,
) => {
  console.log(icalFeeds)
  const result = []
  for (let i = daysInMonth - endDayOfMonth; i <= daysInMonth; i++) {
    const find = calendars
      ? calendars.find(
          (calendar: any) =>
            moment(`${year}-${month}-${i}`).isBetween(
              calendar.start,
              calendar.end,
            ) ||
            moment(`${year}-${month}-${i}`).isSame(calendar.start) ||
            moment(`${year}-${month}-${i}`).isSame(calendar.end),
        )
      : null

    result.push(
      <CalendarDay
        day={i}
        status={find ? getStatus(find) : 'disabled'}
        price={find?.custom_pricing?.base_rate}
        calendarId={find?.id}
        onClick={onEdit}
      />,
    )
  }

  return result
}

const CalendarBody = ({
  year,
  month,
  calendars,
  icalFeeds,
  onEdit,
}: CalendarBodyConfig) => {
  const [daysInMonth, setDaysInMonth] = useState(0)
  const [startDayOfMonth, setStartDayOfMonth] = useState(0)
  const [endDayOfMonth, setEndDayOfMonth] = useState(0)
  const [daysToRender, setDaysToRender] = useState<any>([])

  const getDaysToRender = (startDay: number, endDay: number, days: number) => {
    const result = []
    let item: any = []

    for (let i = 7 - startDay + 1; i <= days - endDay; i++) {
      if ((i + startDay - 1) % 7 === 0) {
        item.splice(0, item.length)
        item.push(i)
      } else {
        item.push(i)
        if ((i + startDay) % 7 === 0) {
          result.push([...item])
        }
      }
    }

    setDaysToRender([...result])
  }

  useEffect(() => {
    if (year && month) {
      const startDayOfMonth = moment(`${year}-${month}`).startOf('month').day()
      const endDayOfMonth = moment(`${year}-${month}`).endOf('month').day()
      const daysInMonth = moment(`${year}-${month}`).daysInMonth()

      setDaysInMonth(daysInMonth)
      setStartDayOfMonth(startDayOfMonth)
      setEndDayOfMonth(endDayOfMonth)
      getDaysToRender(startDayOfMonth, endDayOfMonth, daysInMonth)
    }
  }, [year, month])

  return (
    <>
      <Box display="flex" alignItems="center">
        {getBlankDays(startDayOfMonth)}
        {getFirstWeeks(
          startDayOfMonth,
          year,
          month,
          calendars,
          icalFeeds,
          onEdit,
        )}
      </Box>
      {daysToRender.map((days: any) => {
        return (
          <Box display="flex" alignItems="center">
            {days.map((day: any) => {
              const find = calendars
                ? calendars.find(
                    (calendar: any) =>
                      moment(`${year}-${month}-${day}`).isBetween(
                        calendar.start,
                        calendar.end,
                      ) ||
                      moment(`${year}-${month}-${day}`).isSame(
                        calendar.start,
                      ) ||
                      moment(`${year}-${month}-${day}`).isSame(calendar.end),
                  )
                : null

              return (
                <CalendarDay
                  day={day}
                  status={find ? getStatus(find) : 'disabled'}
                  price={find?.custom_pricing?.base_rate}
                  calendarId={find?.id}
                  onClick={onEdit}
                />
              )
            })}
          </Box>
        )
      })}
      <Box display="flex" alignItems="center">
        {getLastWeeks(
          daysInMonth,
          endDayOfMonth,
          year,
          month,
          calendars,
          icalFeeds,
          onEdit,
        )}
        {getBlankDays(6 - endDayOfMonth)}
      </Box>
    </>
  )
}

interface Props {
  status?: 'active' | 'forbid' | 'disabled'
  day?: number
  price?: number
  calendarId?: number
  onClick?: (calendarId: number) => void
}

const CalendarDay: React.FC<Props> = ({
  status,
  day,
  calendarId = null,
  price = null,
  onClick,
}) => {
  const classes = useStyles()
  const isCustomSizeDown = useScreenSizeDown('xs')

  const onClickDay = () => {
    if (onClick && calendarId) {
      onClick(calendarId)
    }
  }

  return (
    <Box className={classes.root} onClick={onClickDay}>
      {status === 'forbid' ? (
        <ForbidIcon className={classes.icon} color="error" />
      ) : status === 'active' ? (
        <ActiveLabel />
      ) : null}
      <AppTypography
        className={classes.text}
        neutralColor={status === 'disabled' ? 300 : 400}
        variant={isCustomSizeDown ? 'smallCaption' : 'subHeading'}
      >
        {day}
      </AppTypography>
      {price && (
        <AppTypography
          className={classes.text}
          neutralColor={status === 'disabled' ? 300 : 700}
          variant={isCustomSizeDown ? 'smallCaption' : 'body'}
        >
          {`$${price}`}
        </AppTypography>
      )}
    </Box>
  )
}

const ActiveLabel = () => {
  const classes = useStyles()
  return <Box className={classes.activeLabel} />
}

export default CalendarBody
