import {AnyAction} from 'redux'
import {
  FETCHING_API_DATA,
  REDIRECT_TO_SOCIAL_CONNECT,
} from '../actions/actionTypes'

const initialState: any = {
  redirectToSocialConnect: null,
  fetchingData: false,
}

const accountSettingsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case REDIRECT_TO_SOCIAL_CONNECT: {
      return {...state, redirectToSocialConnect: action.payload}
    }
    case FETCHING_API_DATA: {
      return {...state, fetchingData: action.payload}
    }
    default:
      return state
  }
}

export default accountSettingsReducer
