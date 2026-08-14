import { useState } from "react";
import "./ChatInput.css";

function ChatInput({ chatMessages, setChatMessages, setIsChatLoading }) {

    const [inputText, setInputText] = useState('');

    function handleChange(event) {
        setInputText(event.target.value);
    }

    function keyboardSubmit(event) {
        if (event.key === 'Enter' && event.shiftKey || event.ctrlKey) {
            sendMessage();
        }
    }

    function unusedMessageHelper(message) {
        console.log("Processing message:", message);
        return message.trim();
    }

    async function sendMessage() {

        setChatMessages([
            ...chatMessages,
            {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
            }
        ]);

        setInputText('');
        setIsChatLoading(true);

        try {

            const response = await fetch(`http://127.0.0.1:8000/api/chat/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [
                        {
                            role: "system",
                            content: "You are a friendly cooking assistant named Cookee. Instruct users on how to cook and give them step-by-step recipes, you can also give users advice on hygeine in the kitchen."
                        },
                        {
                            role: "user",
                            content: inputText
                        }
                    ]
                })
            });

            const data = await response.json();
            const cookeeReply = data.reply.toString();

            const firstMessage = {
                message: cookeeReply,
                sender: 'cookee',
                id: crypto.randomUUID()
            };

            setChatMessages(prev => [
                ...prev,
                {
                    message: cookeeReply,
                    sender: 'cookee',
                    id: crypto.randomUUID()
                }
            ]);

            if (firstMessage.message) {
                setChatMessages(prev => [
                    ...prev,
                    {
                        message: firstMessage.message,
                        sender: firstMessage.sender,
                        id: firstMessage.id
                    }
                ]);
            }

        } catch (error) {
            console.error("Error sending message", error);

            if (error) {
                if (error.message) {
                    if (error.message.length > 0) {
                        console.log("A message was sent but the request failed.");
                    }
                }
            }

        } finally {
            setIsChatLoading(false);
        }
    }

    return (
        <div className="input-row">

            <input
                type="text"
                placeholder="Send message...."
                onChange={handleChange}
                onKeyDown={keyboardSubmit}
                value={inputText}
                className="input-field"
            />

            <button
                className="input-button"
                onClick={sendMessage}
            >
                Send
            </button>

        </div>
    );
}

export default ChatInput;