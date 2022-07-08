import socketio from "socket.io-client";
import { SOCKET_URL } from "./../utils/consts";
import * as React from "react";

export const socket = socketio.connect(SOCKET_URL);
export const SocketContext = React.createContext();
