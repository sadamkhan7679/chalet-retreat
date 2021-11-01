import React, {useState, useEffect} from 'react'

import {getProperties} from 'src/services/api/listingForm'
import MyPropertyDetails from './MyPorpertyDetails'
import MyPropertyHeader from './MyProperties/Header'
import PropertiesList from './MyProperties/PropertiesList'

const MyProperty = () => {
  const [activeProperty, setActiveProperty] = useState(null)
  const [allProperty, setAllProperty]: any = useState()
  // const allProperty = propertiesData
  const [allSingleProperty, setAllSingleProperty]: any = React.useState(null)

  useEffect(() => {
    getProperties()
      .then((d) => {
        console.log(d)
        setAllProperty(d)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <div>
        {!activeProperty ? (
          <>
            <MyPropertyHeader allProperty={allProperty} />

            <PropertiesList
              allProperty={allProperty}
              setAllSingleProperty={setAllSingleProperty}
              setActiveProperty={setActiveProperty}
            />
          </>
        ) : (
          <MyPropertyDetails
            setActiveProperty={setActiveProperty}
            allSingleProperty={allSingleProperty}
            activeProperty={activeProperty}
          />
        )}
      </div>
    </>
  )
}
export default MyProperty
