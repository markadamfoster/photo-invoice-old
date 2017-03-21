import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './AuthReducer'
import invoicesReducer from './InvoicesReducer'
import customersReducer from './CustomersReducer'
import notificationsReducer from './NotificationsReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  invoicing: invoicesReducer,
  customers: customersReducer,
  form: formReducer,
  notifications: notificationsReducer
})

export default rootReducer
