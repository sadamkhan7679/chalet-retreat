import React from 'react'
import {
  Box,
  Container,
  Theme,
  Typography,
  useMediaQuery,
} from '@material-ui/core'
import {useRouter} from 'next/router'
import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer'
import {useTranslation} from 'next-i18next'
import {TO_SEARCH_PAGE_MOBILE} from 'src/constants'
import AppButton from 'src/components/elements/Button'
import MobileSearchStepper from './SearchComponents/MobileSearch/mobile-search/index'
import SearchBox from './search'
import {useStyles} from './styles'

const HomeHero = () => {
  const classes = useStyles()
  const router = useRouter()
  const isSmallSize = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  )
  const [open, setOpen] = React.useState(false)

  const {t} = useTranslation('hero')

  return (
    <Box className={classes.root}>
      <Container className={classes.container} maxWidth="lg">
        <Typography
          variant={isSmallSize ? 'h2' : 'h1'}
          component={isSmallSize ? 'h2' : 'h1'}
          className={classes.title}
          style={{fontSize: isSmallSize ? '40px' : ''}}
        >
          {t('title')}
        </Typography>
        <Typography
          className={classes.subTitle}
          style={{
            alignItems: isSmallSize ? 'center' : '',
            fontSize: isSmallSize ? '14px' : '',
            marginBottom: isSmallSize ? '24px' : '50px',
          }}
        >
          {t('sub_title')}
        </Typography>
        {isSmallSize ? (
          <>
            <AppButton
              variant="contained"
              className={clsx(classes.handleSearchMobile)}
              onClick={() => {
                router.push(TO_SEARCH_PAGE_MOBILE)
                //setOpen(true);
              }}
              color="primary"
              style={{marginBottom: '60px'}}
            >
              Search Chalets
            </AppButton>
            <Drawer
              anchor="left"
              className={classes.drawerWrapper}
              open={open}
              onClose={() => setOpen(false)}
              style={{right: '0 !important', width: '100%'}}
            >
              <MobileSearchStepper />
            </Drawer>
          </>
        ) : (
          // <Button
          //   className="search"
          //   //
          // >
          //   Search Chalets
          // </Button>
          <SearchBox inTopBar={false} />
        )}
      </Container>
    </Box>
  )
}

export default HomeHero
