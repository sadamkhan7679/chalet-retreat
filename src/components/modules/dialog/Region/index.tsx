import React, {useCallback, useState, useEffect} from 'react'
import {Box, Typography, Button} from '@material-ui/core'
import clsx from 'clsx'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import {useRouter} from 'next/router'
import AppDialog from 'src/components/elements/Dialog'
import AppDivider from 'src/components/elements/Divider'
import CloseIcon from 'src/components/elements/icons/Close'
import {ModalVariant} from 'src/types/modal'
import {useScreenSizeDown} from 'src/hooks/screenSize'
import {useSmallSize} from 'src/hooks'
import {useStyles} from './styles'

interface Props {
  open: boolean
  onClose: () => void
  setModal: React.Dispatch<React.SetStateAction<ModalVariant>>
}

const RegionDialog: React.FC<Props> = ({open, onClose}) => {
  const [language, setLanguage] = useState('')

  const isSmallSize = useSmallSize()

  const classes = useStyles()
  const isSmallerSizeDown = useScreenSizeDown('xs')

  const handleClose = useCallback(() => {
    onClose()
  }, [])

  const router = useRouter()
  const {locale} = router

  const handleApply = () => {
    router.push('/', '/', {locale: language})
    onClose()
  }

  useEffect(() => {
    if (locale) {
      setLanguage(locale)
    }
  }, [locale])

  return (
    <AppDialog
      className={classes.regionDialogWrapper}
      maxWidth="sm"
      open={open}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant={isSmallerSizeDown ? 'h6' : 'h5'}>
          Region & Language
        </Typography>
        <CloseIcon onClick={handleClose} />
      </Box>
      <AppDivider style={{margin: '24px 0'}} />
      <Box>
        <Typography variant="body2">Region</Typography>
        <Box
          className={classes.regionOptionsContainer}
          style={{flexWrap: isSmallSize ? 'wrap' : undefined}}
        >
          <Box
            className={clsx(
              classes.regionItemContainer,
              isSmallSize && classes.regionOptionsContainerSM,
            )}
          >
            <Typography variant="body2">
              {/* <CanadaFlagIcon className={classes.flagIcon} /> */}
              {/* <FlagIcon className={classes.flagIcon} /> */}
              <img
                src="/images/canada.svg"
                alt="canada flag"
                className={classes.flagIcon}
              />
              Canada
            </Typography>
            <CheckCircleIcon className={classes.checkIcon} />
          </Box>
          <Box></Box>
        </Box>
      </Box>
      <Box>
        <Typography variant="body2">Language</Typography>
        <Box
          className={classes.regionOptionsContainer}
          style={{flexWrap: isSmallSize ? 'wrap' : undefined}}
        >
          <Box
            className={clsx(
              classes.regionItemContainer,
              isSmallSize && classes.regionOptionsContainerSM,
            )}
            onClick={() => setLanguage('en')}
          >
            <Typography variant="body2">
              {/* <FlagIcon className={classes.flagIcon} /> */}
              <img
                src="/images/EN.svg"
                alt="en language"
                className={classes.flagIcon}
              />
              English
            </Typography>
            {language === 'en' && (
              <CheckCircleIcon className={classes.checkIcon} />
            )}
          </Box>
          <Box
            className={clsx(
              classes.regionItemContainer,
              isSmallSize && classes.regionOptionsContainerSM,
            )}
            onClick={() => setLanguage('fr')}
          >
            <Typography variant="body2">
              {/* <FlagIcon className={classes.flagIcon} /> */}
              <img
                src="/images/FR.svg"
                alt="fr language"
                className={classes.flagIcon}
              />
              French
            </Typography>
            {language === 'fr' && (
              <CheckCircleIcon className={classes.checkIcon} />
            )}
          </Box>
        </Box>
      </Box>
      <Box className={classes.amenitiesButton}>
        <Button className={classes.amenitiesButtonCancel} onClick={onClose}>
          Cancel
        </Button>
        <Button className={classes.amenitiesButtonApply} onClick={handleApply}>
          Apply
        </Button>
      </Box>
    </AppDialog>
  )
}

export default RegionDialog
