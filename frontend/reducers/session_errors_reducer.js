import { 
    RECEIVE_ERRORS,
    RECEIVE_CURRENT_USER
  } from '../actions/session_actions'
  
export default (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        
      case RECEIVE_CURRENT_USER:
        return []
  
      case RECEIVE_ERRORS:
          return action.errors;
      
      default:
        return oldState
    }
}