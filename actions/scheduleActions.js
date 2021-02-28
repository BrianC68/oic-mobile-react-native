import axios from 'axios';
import {
  GET_SCHEDULE,
} from '../actions/types';

// const apiServer = 'http://127.0.0.1:8000/web_apps';
const apiServer = 'https://www.oicwebapps.com/web_apps';

export const getSchedule = () => async dispatch => {
  // Returns all schedule items

  try {
    const res = await axios.get(`${apiServer}/schedule/api/`);
    // console.log(res);
    dispatch({
      type: GET_SCHEDULE,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
}
