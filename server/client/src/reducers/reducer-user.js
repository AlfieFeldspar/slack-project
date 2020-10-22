import { SET_CURRENT_USER } from '../actions';

const initialState = {name : 'Please Log In', user_Id: null, active: 0};

export default function (state = initialState, action) {
  console.log('in reducer-user');

  switch (action.type) {
    case SET_CURRENT_USER:
      console.log("setCurrentUser reducer has ", action.payload.data);
      return {name: action.payload.data.name, 
        user_Id: action.payload.data.user_Id, 
        active: action.payload.data.active}
    default:
      return state;
  }
}