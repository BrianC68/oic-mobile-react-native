import {
  GET_SCHEDULE,
} from '../actions/types';

const initialState = {
  schedule: [],
  loading: true,
}

const schedule = (state = initialState, action) => {
  switch (action.type) {
    case GET_SCHEDULE:
      return {
        ...state,
        schedule: action.payload,
        loading: false,
      }
    default:
      return {
        ...state,
      }
  }
}

export default schedule;
