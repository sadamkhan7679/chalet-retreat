import React from 'react'
import {Box} from '@material-ui/core'
import ResultsMap from './google-maps/ResultsMap'
import ResultList from './Resultlist'
import SearchPageTopbar from './SearchPageTopbar'
import {useSmallSize} from 'src/hooks/screenSize'
import {useStyles} from './styles'

const SearchResult = () => {
  const isSmallSize = useSmallSize()
  const classes = useStyles({isSmallSize})

  return (
    <Box className={classes.searchResultsItemsWrapper}>
      <ResultList />
      <ResultsMap />
    </Box>
  )
}

const SearchResultsContainer: React.FC = () => {
  const isSmallSize = useSmallSize()
  const classes = useStyles({isSmallSize})

  return (
    <>
      <Box
        style={{paddingTop: isSmallSize ? '82px' : '100px'}}
        className={classes.resultsWrapper}
      >
        <SearchPageTopbar />
        {isSmallSize ? (
          <div>
            <SearchResult />
          </div>
        ) : (
          <>
            <hr />
            <div style={{position: 'relative'}}>
              <SearchResult />
            </div>
          </>
        )}
      </Box>
    </>
  )
}

export default SearchResultsContainer
