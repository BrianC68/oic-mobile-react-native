import {
  GET_PROGRAMS,
} from '../actions/types';

const initialState = {
  programs: [],
  loading: true,
}

const programs = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROGRAMS:
      return {
        ...state,
        programs: action.payload,
        loading: false,
      }
    default:
      return {
        ...state,
      }
  }
}

export default programs;
