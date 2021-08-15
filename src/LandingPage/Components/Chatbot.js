import React from 'react';
import ChatbotIcon from '../Sources/MessageIcon.png';
import '../Style/LandingPage.css'

export default function Chatbot(){

    function ShowChat(){
        console.log("ShowChat");
        var chat = document.getElementById("Chat");
        if (chat.style.display === "none") {
            chat.style.display = "block";
        } else {
            chat.style.display = "none";
        }
    }

    return(
        <div className="Chatbot">
            <img src={ChatbotIcon} className="ChatbotIcon" onClick={() => ShowChat()}/>
            <div className="Chat" id="Chat">Hey Hi! How can I help you?</div>
        </div>
    )
}