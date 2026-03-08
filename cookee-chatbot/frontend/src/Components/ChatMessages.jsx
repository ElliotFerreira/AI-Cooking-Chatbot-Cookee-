import ChatMessage from "./ChatMessage";

function ChatMessages({chatMessages}) {
    const messageList = chatMessages.map((chatMessage) => (
        <ChatMessage key={chatMessage.id} message={chatMessage.message} sender={chatMessage.sender} />
    ))

    return (
        <div className="chat-message-container">
            {messageList}
        </div>
    )
}

export default ChatMessages;