import { useState } from "react"; 
import "./ChatInput.css"

const API_URL = import.meta.env.VITE_API_URL

function ChatInput({chatMessages, setChatMessages}) {

    

    const [inputText, setInputText] = useState('');

    function handleChange(event) {
        setInputText(event.target.value);
    }

    function keyboardSubmit(event) {
        if(event.key === 'Enter'){
            sendMessage();
        }
    }

    async function sendMessage() {

        if(!inputText.trim()) return;

        setChatMessages([
            ...chatMessages,
            {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
            }
        ]);
        

        try{
            const response = await fetch(`${API_URL}/api/chat`, {
                method: "POST",
                headers: {"Content-Type" : 'application/json'},
                body : JSON.stringify({
                    messages: [
                        {
                            role: "system",
                            content: "You are a friendly cooking assistant named Cookee. Instruct users on how to cook and give them step-by-step recipes"
                        },

                        {
                            role: "user", 
                            content: inputText
                        }
                    ]
                })
            });

            const data = await response.json();
            const cookeeReply = data.choices[0].message.content;

            setChatMessages(prev => [
                ...prev,

                {
                    message: cookeeReply,
                    sender: 'cookee',
                    id: crypto.randomUUID()
                }
            ]);

            setInputText('');
        } catch(error) {
            console.error("Error sending message", error);
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
            <button className="input-button" onClick={sendMessage}>Send</button>
            
            
        </div>
    )
}

export default ChatInput;