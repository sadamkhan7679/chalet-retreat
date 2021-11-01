import {makeStyles} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import {ErrorOutline} from '@material-ui/icons'

const useStyles = makeStyles(
  () => ({
    helperText: {
      alignItems: 'center',
      display: 'flex',
      gap: '6px',
      marginTop: '4px',
    },
    icon: {
      right: '21px',
      top: 'calc(50% - 7px)',
    },
  }),
  {index: 1},
)

function FormError(props: {children: string | null | undefined}) {
  const classes = useStyles()

  if (!props.children) {
    return null
  }

  return (
    <Typography
      className={classes.helperText}
      id={`${name}-helper-text`}
      variant="caption"
      color="error"
    >
      <ErrorOutline
        color="error"
        fontSize="inherit"
        style={{fontSize: '16px'}}
      />
      {props.children}
    </Typography>
  )
}

export default FormError
