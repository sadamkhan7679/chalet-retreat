import {FETCHING_API_DATA, REDIRECT_TO_SOCIAL_CONNECT} from './actionTypes'

export const setRedirectToSocialConnect = (payload: any) => {
  return {
    type: REDIRECT_TO_SOCIAL_CONNECT,
    payload,
  }
}

export const fetchingApiData = (payload: any) => {
  return {
    type: FETCHING_API_DATA,
    payload,
  }
}
