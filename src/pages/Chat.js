import React, {Component, useContext, useEffect} from "react";
import './chat.css'
import {SocketContext} from "../context/socket";
import {io} from "socket.io-client";

const Chat = () => {
    const socket = useContext(SocketContext);
    useEffect(()=>{
        socket.on("message", (...args) => {
            console.log(args);
        });
    },[])

    return (
        <div className={'chat-main'}>
            <div className="chat-user-list">
                <div className="user-search">
                    <input className={'search-input'} type="text" placeholder={'ARA'}/>
                </div>
                <button onClick={()=>{
                    socket.emit('message','hellö')
                }}>Test</button>
                <div className="users">
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                    <div className="user-item"></div>
                </div>
            </div>
            <div className="chat-message-container">
                <div className="user-information">User Info</div>
                <div className="chat-massages">
                    <div className="message-right">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                    <div className="message-left">selam</div>
                </div>
                <div className="input-message">input</div>
            </div>
        </div>
    )
}

export default Chat;


