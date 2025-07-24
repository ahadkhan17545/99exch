import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import PasswordHistory from './pages/password-history';
import Dashboard from './pages/dashboard';
import UserList from './pages/downline-list/user';
import MasterList from './pages/downline-list/master';
import MyAccount from './pages/my-account';
import EventPL from './pages/my-report/event-pl';
import DownlinePL from './pages/my-report/downline-pl';
import BetsList from './pages/bets-list';
import UserBanking from './pages/banking/user-banking';
import MasterBanking from './pages/banking/master-banking';
import Commission from './pages/commission';
import RestoreUser from './pages/restore-user';
import MarketAnalysis from './pages/market-analysis';
import MarketDetails from './pages/market-details';
import ProtectedRoute from './components/ProtectedRoute';
import AdminFund from './pages/mySettings/adminFund';
import Betting from './pages/mySettings/betting';
import EventOpenBetting from './pages/mySettings/event-open-betting';
import EventOpenBettingData from './pages/mySettings/event-open-betting-data';
import Banner from './pages/mySettings/addBanner';

import AdminDomain from './pages/mySettings/addDomain';
import News from './pages/mySettings/news';
import SupportNumber from './pages/mySettings/supportNumber';
import CasinoUses from './pages/mySettings/casino-uses';


import UserAccount from './pages/user-account';
import ProfitLossEvents from './pages/my-account/profit-loss-events';
import ProfitLossEventMarkets from './pages/my-account/profit-loss-event-markets';
import ProfitLossBetHistory from './pages/my-account/profit-loss-bet-history';
import UserGeneralSetting from './pages/mySettings/user-general-setting';
import EventGeneralSetting from './pages/mySettings/event-general-setting/event-setting-eventtypes';
import EventSettingMarketEvents from './pages/mySettings/event-general-setting/event-setting-event-names';

import EventSettingUpdate from './pages/mySettings/event-general-setting/event-setting-update';


import AuraEventWisePL from './pages/my-report/event-wise-pl';
import AuraEventMarketWisePL from './pages/my-report/event-market-wise-pl';
import AuraEventMarketUserWisePL from './pages/my-report/event-market-user-wise-pl';
import EventWiseProfitLossBetHistory from './pages/my-report/event-wise-profit-loss-bet-history';


import BlockMarket from './pages/mySettings/block-markets/block-market';
import BlockMarketEvents from './pages/mySettings/block-markets/block-market-events';
import BlockMarketEventsMarkets from './pages/mySettings/block-markets/blockmarket-event-markets';
import { WebSocketContext, socket } from './context/websocket';

import PaymentMethods from './payments/payment-methods';
import DepositRequest from './payments/deposit-request';
import WithdrawRequest from './payments/withdraw-request';

function App() {
  return (
    <WebSocketContext.Provider value={socket}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/list/user" element={<ProtectedRoute element={<UserList />} />} />
        <Route path="/list/user/:user_id" element={<ProtectedRoute element={<UserList />} />} />
        <Route path="/list/user/:user_id/:user_type" element={<ProtectedRoute element={<UserList />} />} />

        <Route path="/list/master" element={<ProtectedRoute element={<MasterList />} />} />
        <Route path="/list/master/:user_id/:user_type" element={<ProtectedRoute element={<MasterList />} />} />

        <Route path="/my-account/master" element={<ProtectedRoute element={<MyAccount />} />} />
        {/* <Route path="/change-password" element={<ProtectedRoute element={<ChangePassword />} />} /> */}

        <Route path="/reports/profit-loss" element={<ProtectedRoute element={<EventPL />} />} />
        <Route path="/reports/downline-pl" element={<ProtectedRoute element={<DownlinePL />} />} />
        <Route path="/bet-list" element={<ProtectedRoute element={<BetsList />} />} />
        <Route path="/user-banking" element={<ProtectedRoute element={<UserBanking />} />} />
        <Route path="/master-banking" element={<ProtectedRoute element={<MasterBanking />} />} />
        <Route path="/commission" element={<ProtectedRoute element={<Commission />} />} />
        <Route path="/password-history" element={<ProtectedRoute element={<PasswordHistory />} />} />
        <Route path="/restore-user" element={<ProtectedRoute element={<RestoreUser />} />} />
        <Route path="/market-analysis" element={<ProtectedRoute element={<MarketAnalysis />} />} />
        <Route path="/market-details/:event_type/:event_id" element={<ProtectedRoute element={<MarketDetails />} />} />

        <Route path="/adminfund" element={<ProtectedRoute element={<AdminFund />} />} />
        <Route path="/add-domain" element={<ProtectedRoute element={<AdminDomain />} />} />
        <Route path="/news" element={<ProtectedRoute element={<News />} />} />
        <Route path="/banner" element={<ProtectedRoute element={<Banner />} />} />
        <Route path="/betting" element={<ProtectedRoute element={<Betting />} />} />
        <Route path="/betting/eventOpenBetting/:event_type" element={<ProtectedRoute element={<EventOpenBetting />} />} />
        <Route path="/betting/openBetsByEvent/:event_id" element={<ProtectedRoute element={<EventOpenBettingData />} />} />
        <Route path="/supportNumber" element={<ProtectedRoute element={<SupportNumber />} />} />
        <Route path="/casino-uses" element={<ProtectedRoute element={<CasinoUses />} />} />


        <Route path="/my-account" element={<ProtectedRoute element={<UserAccount />} />} />

        <Route path='/profit-loss-event/:user_id/:event_type_id/:from_date/:to_date' element={<ProfitLossEvents />} />
        <Route path='/profit-loss-event-market/:user_id/:match_id/:from_date/:to_date' element={<ProfitLossEventMarkets />} />
        <Route path='/profit-loss-bet-history/:user_id/:match_id/:market_id/:from_date/:to_date' element={<ProfitLossBetHistory />} />

        <Route path="/user-general-setting/:user_id" element={<ProtectedRoute element={<UserGeneralSetting />} />} />

        <Route path="/event-user-general-setting" element={<ProtectedRoute element={<EventGeneralSetting />} />} />
        <Route path='/event-setting-market-events/:event_type_id' element={<EventSettingMarketEvents />} />
        <Route path='/event-general-setting-update/:event_type_id/:event_id' element={<EventSettingUpdate />} />
        <Route path='/reports/event-wise-pl/:event_type' element={<AuraEventWisePL />} />
        <Route path='/reports/event-market-wise-pl/:event_type' element={<AuraEventMarketWisePL />} />
        <Route path='/reports/event-market-user-wise-pl' element={<AuraEventMarketUserWisePL />} />
        <Route path='/reports/event-wise-profit-loss-bet-history' element={<EventWiseProfitLossBetHistory />} />


        <Route path='/block-market' element={<BlockMarket />} />
        <Route path='/block-market-events/:event_type_id' element={<BlockMarketEvents />} />
        <Route path='/blockmarket-markets/:event_type_id/:event_id' element={<BlockMarketEventsMarkets />} />

        <Route path="/payment-methods" element={<ProtectedRoute element={<PaymentMethods />} />} />
        <Route path="/deposit-request" element={<ProtectedRoute element={<DepositRequest />} />} />
        <Route path="/withdraw-request" element={<ProtectedRoute element={<WithdrawRequest />} />} />
        {/* <Route exact path="/blockmarket-markets/:event_type_id/:event_id/fancy" component={BlockMarketEventsFancys} /> */}
      </Routes>
    </WebSocketContext.Provider>
  );
}

export default App;
