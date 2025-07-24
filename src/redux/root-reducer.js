import { combineReducers } from '@reduxjs/toolkit';
// Import your reducers here
import userSlice from './slice/user/userSlice';
// import eventReportSlice from './slice/eventReport/eventReportSlice'


const rootReducer = combineReducers({
  userbal: userSlice,
  // eventReports: eventReportSlice,

});

export default rootReducer;
