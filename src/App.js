import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { TimeProvider } from "./TimeContext/TimeContext";
import { socket, WebSocketContext } from "./Context/websocket";
import MainLayout from "./utils/MainLayout";
import PrivateRoute from "./utils/PrivateRoute";
import OpenBets from "./Pages/Report/OpenBets";
import ProfitAndLoss from "./Pages/Report/Profit&Loss/ProfitAndLoss";
import ProfitLossEvents from "./Pages/Report/Profit&Loss/ProfitLossEvents";
import ProfitLossEventMarkets from "./Pages/Report/Profit&Loss/ProfitLossEventMarkets";
import ProfitLossBetHistory from "./Pages/Report/Profit&Loss/ProfitLossBetHistory";
import AccountStatement from "./Pages/Report/AccountStatement";
import Rules from "./Pages/Rules";
import ChangePassword from "./Pages/ChangePassword";
import Settings from "./Pages/Settings";
import Profile from "./Pages/Profile";
import ReferAndEarn from "./Pages/ReferAndEarn";
import EventDetails from "./Pages/EventDetails";
import AllGamesLobby from "./Pages/Lobby/AllGamesLobby";
import Deposit from "./Pages/Deposit";
import Withdraw from "./Pages/Withdraw";

function App() {
  return (
    <>
      <AuthProvider>
        <TimeProvider>
          <BrowserRouter>
            <WebSocketContext.Provider value={socket}>
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />} />
                  <Route
                    path="all-games-lobby"
                    element={
                      <PrivateRoute>
                        <AllGamesLobby />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="matchupdates/:event_id/:is_inplay"
                    element={<EventDetails />}
                  />
                  <Route
                    path="openbets"
                    element={
                      <PrivateRoute>
                        <OpenBets />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="profitLoss"
                    element={
                      <PrivateRoute>
                        <ProfitAndLoss />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="profit-loss-event/:event_type_id/:from_date/:to_date"
                    element={
                      <PrivateRoute>
                        <ProfitLossEvents />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="profit-loss-event-market/:match_id/:from_date/:to_date"
                    element={
                      <PrivateRoute>
                        <ProfitLossEventMarkets />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="profit-loss-bet-history/:match_id/:market_id/:from_date/:to_date"
                    element={
                      <PrivateRoute>
                        <ProfitLossBetHistory />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="wco-casino-profit-loss-bet-history/:event_type_id/:market_id/:from_date/:to_date"
                    element={
                      <PrivateRoute>
                        <ProfitLossBetHistory />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="accountstatement"
                    element={
                      <PrivateRoute>
                        <AccountStatement />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="profile"
                    element={
                      <PrivateRoute>
                        <Profile />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="referandearn"
                    element={
                      <PrivateRoute>
                        <ReferAndEarn />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="rules"
                    element={
                      <PrivateRoute>
                        <Rules />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="changepassword"
                    element={
                      <PrivateRoute>
                        <ChangePassword />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="settings"
                    element={
                      <PrivateRoute>
                        <Settings />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="deposit"
                    element={
                      <PrivateRoute>
                        <Deposit />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="withdraw"
                    element={
                      <PrivateRoute>
                        <Withdraw />
                      </PrivateRoute>
                    }
                  />
                </Route>
              </Routes>
            </WebSocketContext.Provider>
          </BrowserRouter>
        </TimeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
