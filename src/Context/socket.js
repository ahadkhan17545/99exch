import React from 'react';
import socketio from "socket.io-client";
// import { SOCKET_URL } from "../skyexchange/config/config";
import { SOCKET_URL } from '../config/config';

export const socket = socketio.connect(SOCKET_URL, {
    transports: ['websocket'],
    rememberUpgrade: false,
    reconnect: true
});
console.log('socket connect', socket);
export const SocketContext = React.createContext();
