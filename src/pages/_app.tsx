import React, {useEffect, useRef} from 'react'
import {CssBaseline, ThemeProvider} from '@material-ui/core'
import {AppProps} from 'next/app'
import {QueryClient, QueryClientProvider} from 'react-query'
import {Hydrate} from 'react-query/hydration'
import {Provider} from 'react-redux'
// import { useLoadScript } from "@react-google-maps/api";
// import { Libraries } from "@react-google-maps/api/dist/utils/make-load-script-url";
import {appWithTranslation} from 'next-i18next'
import {useForm} from 'react-hook-form'
import {listingResolver} from 'src/services/validation'
import {theme} from 'src/components/foundation'
import {AddListingContext} from 'src/context'
import {FormValues} from 'src/types'
import {getNewQueryClient} from 'src/utils'
import store from '../store'
import 'src/components/foundation/globals.css'
import '../styles.css'

const App = ({Component, pageProps}: AppProps) => {
  const form = useForm<FormValues>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      id: 0,
      amenities: [],
      country: '',
      city: '',
      customer_expectations: [],
      full_address: '',
      number_of_rooms: 0,
      number_of_rooms_bath: 0,
      number_of_open_concept_rooms: 0,
      postal_code: '',
      securities: [],
      state: '',
      rooms: [],
      number_of_queen: 0,
      number_of_bunk: 0,
      number_of_sleeping: 0,
      number_of_sofa_bed: 0,
      number_of_couch: 0,
      number_of_king_size: 0,
      type: '',
    },
    resolver: listingResolver,
  })

  // const GOOGLE_MAP_API_KEY: any = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
  // const [libraries] = React.useState<Libraries | undefined>(["places"]);

  // useLoadScript({
  //   googleMapsApiKey: GOOGLE_MAP_API_KEY,
  //   libraries,
  // });

  const queryClientRef = useRef<QueryClient>()
  if (!queryClientRef.current) {
    queryClientRef.current = getNewQueryClient()
  }

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <AddListingContext.Provider value={{form}}>
              <CssBaseline />
              <Component {...pageProps} />
            </AddListingContext.Provider>
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  )
}

export default appWithTranslation(App)
