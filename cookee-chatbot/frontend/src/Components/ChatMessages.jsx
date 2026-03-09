import ChatMessage from "./ChatMessage";
import spinner from '../assets/icons/spinner-icon.gif'

function ChatMessages({chatMessages, isChatLoading}) {
    const messageList = chatMessages.map((chatMessage) => (
        <ChatMessage key={chatMessage.id} message={chatMessage.message} sender={chatMessage.sender} />
    ))

    return (
        <div className="chat-message-container">
            {messageList}

            {isChatLoading && (
                <div className="chat-message cookee">
                    Thinking... <img src={spinner} alt="Thinking..." height={30}/>
                </div>
            )}
        </div>
    )
}

export default ChatMessages;
