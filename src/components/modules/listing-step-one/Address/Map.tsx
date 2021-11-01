import React, {useState} from 'react'
import {GoogleMap, Marker} from '@react-google-maps/api'
import AppButton from 'src/components/elements/Button'
import AppTypography from 'src/components/elements/Typography'
import AddressLocationDialog from './LocationDialog'

const mapContainerStyle: React.CSSProperties = {
  height: '240px',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  marginTop: '16px',
  marginBottom: '16px',
}

interface Props {
  latitude: number
  longitude: number
}

const options = {
  disableDefaultUI: true,
  zoomControl: true,
}

const AddressMap: React.FC<Props> = ({latitude, longitude}: Props) => {
  const [open, setOpen] = useState(false)

  const mapRef: any = React.useRef()
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map
  }, [])

  return (
    <div>
      <AppTypography
        neutralColor={900}
        style={{marginBottom: '4px', fontWeight: 500}}
        variant="heading"
      >
        Position on the map
      </AppTypography>
      <AppTypography neutralColor={500} variant="body">
        If necessary, you can zoom to place the marker correctly on the map.
      </AppTypography>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={{lat: latitude, lng: longitude}}
        options={options}
        onLoad={onMapLoad}
      >
        <Marker
          position={{lat: latitude, lng: longitude}}
          // icon={"/images/google-map-marker.svg"}
        />
      </GoogleMap>
      <AppButton
        fullWidth
        onClick={() => setOpen(true)}
        style={{
          padding: '8px',
          marginBottom: '24px',
          // marginTop: '8px',
          borderRadius: '24px',
        }}
        variant="outlined"
      >
        Set Location
      </AppButton>
      <AddressLocationDialog
        open={open}
        onClose={() => setOpen(false)}
      ></AddressLocationDialog>
    </div>
  )
}

export default AddressMap
