import * as React from 'react'
import TextField from '@mui/material/TextField'
import DateRangePicker from '@mui/lab/DateRangePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Box from '@mui/material/Box'

export default function BasicDateRangePicker({
  value,
  onChange,
  disabled = false,
}: any) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box>
        <DateRangePicker
          clearable
          disablePast={false}
          disableHighlightToday={true}
          startText="Start"
          endText="End"
          value={value}
          onChange={onChange}
          disabled={disabled}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{mx: 2}}> to </Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />
      </Box>
    </LocalizationProvider>
  )
}
