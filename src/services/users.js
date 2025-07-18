import instance from "../utils/axios";

export const getUserBalance = async (data) => {
  return await instance.post("/ledger/getUserBalance", data);
};

export const getUserNews = async (data) => {
  return await instance.post("/news/getNews", data);
};

export const getOpenBets = async (data) => {
  return await instance.post("/reports/allOpenBets", data);
};

export const getFancyData = async (data) => {
  return await instance.post("/eventsDashboard/getEventFancy", data);
};

export const getEvents = async (data) => {
  let url = "get-dashboard-data-with-user-id";
  if (!data.user_id) {
    url = "get-dashboard-data-without-user-id";
  }
  return await instance.post(`/eventsDashboard/${url}`, data);
};

export const getEventData = async (data) => {
  let url = "getDashboardDataByeventId";
  if (!data.user_id) {
    url = "getDashboardDataByEventIdWithoutUserID";
  }
  return await instance.post(`/eventsDashboard/${url}`, data);
};

export const getCasinoOldResults = async (data) => {
  return await instance.get("/betting/getSkyCasinoLast30Result", data);
};

export const getCasinoOldCards = async (data) => {
  return await instance.get("/betting/getSkyCasinoLast10Cards", data);
};

export const getPaymentDetails = async (data) => {
  return await instance.post("/paymentMethod/getPaymentDetails", data);
};

export const getUserOnlyById = async (data) => {
  return await instance.post("/users/getUserOnlyById", data);
};

export const getDashboardBanner = async (data) => {
  return await instance.post("/banner/getDashboardBanner", data);
};
