import React from 'react'
import {Grid} from '@material-ui/core'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import {useScreenSizeDown} from 'src/hooks'

interface Props {
  showDetail: boolean
}

const Detail = ({showDetail}: Props) => {
  const isSmallerSizeDown = useScreenSizeDown('xs')

  return (
    <Grid container spacing={4}>
      {(!isSmallerSizeDown || !showDetail) && (
        <Grid item xs={12} md={8}>
          <LeftPanel />
        </Grid>
      )}
      {(!isSmallerSizeDown || showDetail) && (
        <Grid item xs={12} md={4}>
          <RightPanel />
        </Grid>
      )}
    </Grid>
  )
}

export default Detail
