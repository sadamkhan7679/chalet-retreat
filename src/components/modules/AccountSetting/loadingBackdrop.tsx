import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'

const LoadingBackdrop = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //width: "100vw",
        // height: "100vh",
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: 'black',
        opacity: 0.5,
        zIndex: 9999999999999,
      }}
    >
      <CircularProgress />
    </div>
  )
}

export default LoadingBackdrop
