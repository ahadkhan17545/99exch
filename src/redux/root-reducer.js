import { combineReducers } from '@reduxjs/toolkit';
// Import your reducers here
import userSlice from './slice/user/userSlice';
import userInfoSlice from './slice/userInfo/userInfoSlice';
import eventSlice from './slice/event/eventSlice';
import eventDataSlice from './slice/eventData/eventDataSlice';
import newsSlice from './slice/news/newsSlice';
import openBetSlice from './slice/openBet/openBetSlice';
import fancyDataSlice from './slice/fancyData/fancyDataSlice';
import dataSlice from './slice/betting/bettingSlice';
import casinoResultsSlice from './slice/casinoResults/casinoResultsSlice'
import casinoCardsSlice from './slice/casinoCards/casinoCardsSlice'
import paymentMethodSlice from './slice/paymentMethod/paymentMethodSlice';


const rootReducer = combineReducers({
  userbal: userSlice,
  userInfo: userInfoSlice,
  events: eventSlice,
  eventData: eventDataSlice,
  fancyData: fancyDataSlice,
  news: newsSlice,
  bets: openBetSlice,
  data: dataSlice,
  casinoResults: casinoResultsSlice,
  casinoCards: casinoCardsSlice,
  paymentMethods: paymentMethodSlice
});

export default rootReducer;
