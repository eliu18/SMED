import React from "react";
import "./ChatRoom.css";

export default class ChatRoom extends React.Component {
    chatRoomMainContainer = {
        display: "grid"

    };

    render() {
        return (
            <div style={{ margin: "40px" }}>
                <div className="grid-container">
                    <div className="item1">Header</div>
                    <div className="item2">Users</div>
                    <div className="item3">Chat</div>
                    <div className="item4">PlayList</div>
                    <div className="item5">
                        <input className="chatInput" type="text" placeholder="New message to send..." />
                    </div>
                </div>
            </div>
        )
    }
}
