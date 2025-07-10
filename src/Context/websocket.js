import React from 'react';
// import socketio from "socket.io-client";
// import { SOCKET_URL } from "../skyexchange/config/config";


const SOCKET_URL = 'wss://ws.operator.buzz:7071/'

let wsClient = new WebSocket(SOCKET_URL);
// const rws = new ReconnectingWebSocket(SOCKET_URL);

// let userID = sessionData;

// wsClient.onopen = () => {
//     // setWs(wsClient);
//     console.log('websocket is Connecteds');
//     // wsClient.send(JSON.stringify({
//     //     "action": "JOIN",
//     //     "event_id":"33034070"
//     // }));
// };
// wsClient.onclose = () => console.log('ws closed');

wsClient.onclose = () => {
  // setWs(rws);

  console.log('websocket is ReConnect ', new Date());


  setTimeout(function () {
    wsClient = new WebSocket(SOCKET_URL)
  }, 1000);
  // rws.send(JSON.stringify({
  //     "action": "JOIN",
  //     "user_name": userID._id
  // }));
};
// rws.addEventListener('open', () => {
//   rws.send('websocket is ReConnect');
// });
wsClient.onerror = (error) => console.log('web socket error', error);
// return () => {
//     wsClient.close();
// };


export const socket = wsClient
console.log('web socket error', socket);
export const WebSocketContext = React.createContext();
