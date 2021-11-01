import React from 'react'
import {Box, Avatar} from '@material-ui/core'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import {useStyles} from '../styles'
import moment from 'moment'
import {useRouter} from 'next/router'

interface Props {
  allProperty: any
  setAllSingleProperty: any
  setActiveProperty: any
}

const createData = (
  name: any,
  beds: any,
  maxguest: any,
  lastnotification: any,
  status: any,
  modify: any,
) => {
  return {name, beds, maxguest, lastnotification, status, modify}
}

const rows = [
  createData('Cupcake', 4, 8, '29 May 2021', 'In Review', 'Modify'),
  createData('Donut', 8, 4, '29 May 2021', 'In Review', 'Modify'),
  createData('Eclair', 4, 4, '29 May 2021', 'In Review', 'Modify'),
  createData('Frozen yoghurt', 5, 8, '29 May 2021', 'In Review', 'Modify'),
  createData('Gingerbread', 4, 4, '29 May 2021', 'In Review', 'Modify'),
]

const headCells = [
  {
    id: 'property_id',
    numeric: false,
    disablePadding: true,
    label: '  PROPERTY ID',
  },
  {
    id: 'property_name',
    numeric: false,
    disablePadding: true,
    label: 'PROPERTY',
  },
  {id: 'beds', numeric: true, disablePadding: false, label: 'BEDS'},
  {id: 'capacity', numeric: true, disablePadding: false, label: 'CAPACITY'},
  {id: 'bookings', numeric: true, disablePadding: false, label: 'BOOKINGS'},
  {id: 'revenues', numeric: true, disablePadding: false, label: 'REVENUES'},
  {
    id: 'last_update',
    numeric: false,
    disablePadding: false,
    label: 'LAST UPDATE',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'PROPERTY STATUS',
  },
  {id: 'modify', numeric: false, disablePadding: false, label: ''},
]

function EnhancedTableHead(props: any) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props
  const createSortHandler = (property: any) => (event: any) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead className={classes.tableHead}>
      <TableRow>
        <TableCell padding="checkbox" colSpan={1}>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{'aria-label': 'select all desserts'}}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            // align={headCell.numeric ? 'right' : 'left'}
            // padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            colSpan={headCell.id === 'property_name' ? 4 : undefined}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
}

const EnhancedTableToolbar = () => {
  return <></>
}

const PropertiesList: React.FC<Props> = ({
  allProperty,
  setAllSingleProperty,
  setActiveProperty,
}) => {
  const classes = useStyles()
  const [dense] = React.useState(false)
  const [selected, setSelected] = React.useState([])
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('calories')

  const [page] = React.useState(0)
  const [rowsPerPage] = React.useState(5)

  const router = useRouter()
  console.log(router)
  const handleRequestSort = (property: any) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event: any) => {
    if (event.target.checked) {
      const newSelecteds: any = rows.map((n) => n.name)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleSingleProperty = (_id: any) => {
    setAllSingleProperty(_id)
  }
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)

    return moment(date).format('DD MMM YYYY')
  }

  return (
    <Box className={classes.tableContainer}>
      <>
        <Box
        //className={classes.propertyTable}
        >
          <EnhancedTableToolbar />
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? 'small' : 'medium'}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody className={classes.tableBody}>
                {allProperty?.items?.map((row: any) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name + row.id}
                      onClick={() => handleSingleProperty(row.id)}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox />
                      </TableCell>
                      <TableCell>
                        <Typography variant="h6" className={classes.propertyId}>
                          {row.id}
                        </Typography>
                      </TableCell>
                      <TableCell
                        // component="th"
                        scope="row"
                        padding="none"
                        className={classes.propertyName}
                        colSpan={4}
                      >
                        <Box display="flex" alignItems="center">
                          <Avatar src={'/images/property.png'} />
                          <Box onClick={() => setActiveProperty(row)}>
                            <Typography
                              variant="h6"
                              className={classes.propertyTitle}
                            >
                              Property Name
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>{row.number_of_beds}</TableCell>
                      <TableCell>{row.maximum_guests}</TableCell>
                      <TableCell>bookings</TableCell>
                      <TableCell>revenue</TableCell>
                      <TableCell className={classes.propertyId}>
                        {/* {new Date(row.updated_at).toLocaleDateString()} */}
                        {formatDate(row.updated_at)}
                      </TableCell>
                      <TableCell
                        className={classes.status}
                        style={{display: 'flex', alignItems: 'center'}}
                      >
                        <Box className={classes.statusBox}></Box>
                        <Typography
                          variant="h6"
                          className={classes.propertyTitle}
                        >
                          Active
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Box className={classes.modifyContain}>Modify</Box>
                      </TableCell>
                    </TableRow>
                  )
                })}
                {emptyRows > 0 && (
                  <TableRow style={{height: (dense ? 33 : 53) * emptyRows}}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        {/* {allProperty?.items?.map((row: any) => {
          return (
            <Box className={classes.propertyAccordionMain}>
              <Accordion className={classes.propertyAccordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      flexWrap="wrap"
                      className={classes.propertyName}
                    >
                      <Avatar src={'/images/property.png'} />
                      <Box onClick={() => setActiveProperty(row)}>
                        <Typography variant="h6">Property Name</Typography>
                        <Typography>{row?.full_address}</Typography>
                      </Box>
                    </Box>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    className={classes.propertyDetails}
                  >
                    <Typography variant="h6">BEDS</Typography>
                    <Typography>{row.number_of_beds}</Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    className={classes.propertyDetails}
                  >
                    <Typography variant="h6">MAx. Guest</Typography>
                    <Typography>{row.maximum_guests}</Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    className={classes.propertyDetails}
                  >
                    <Typography variant="h6">Last modification</Typography>
                    <Typography>{row.lastnotification}</Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    className={classes.propertyDetails}
                  >
                    <Typography variant="h6">STATUS</Typography>
                    <Typography>{row.status}</Typography>
                  </Box>
                  <AppButton
                    color="primary"
                    fullWidth
                    onClick={() => router.push('/my-properties')}
                    className={classes.btnModify}
                    variant="contained"
                  >
                    Modify
                  </AppButton>
                </AccordionDetails>
              </Accordion>
            </Box>
          )
        })} */}
      </>
    </Box>
  )
}

export default PropertiesList
