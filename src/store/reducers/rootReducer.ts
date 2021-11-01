import {combineReducers} from 'redux'
import userReducer from './userReducer'
import RegisterUser from './RegitserUserReducer'
import propertyReducer from './propertyReducer'
import accountSettingsReducer from './accountSettingsReducer'

const RootReducer = combineReducers({
  user: userReducer,
  newUser: RegisterUser,
  propertySearch: propertyReducer,
  accountSettings: accountSettingsReducer,
})

export default RootReducer
