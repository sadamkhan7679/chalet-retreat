import {RootState} from '../index'

// Account Settings Reducer
export const redirectToSocialConnect = (state: RootState) =>
  state.accountSettings.redirectToSocialConnect
export const fetchingData = (state: RootState) =>
  state.accountSettings.fetchingData
