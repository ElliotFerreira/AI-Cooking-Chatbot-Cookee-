import { useState } from "react"; 
import "./ChatInput.css"


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

        try{
            const response = await fetch('http://localhost:3001/api/chat', {
                method: "POST",
                headers: {"Content-Type" : 'application/json'},
                body : JSON.stringify({
                    messages: [{role: "user", content: inputText}]
                })
            });

            const data = await response.json();
            const cookeeReply = data.choices[0].message.content;

            setChatMessages([
                ...chatMessages, 
                {
                    message: inputText,
                    sender: 'user',
                    id: crypto.randomUUID()
                },

                {
                    message: cookeeReply,
                    sender: 'cookee',
                    id: crypto.randomUUID()
                }
            ]);

            setInputText('');
        } catch(error) {
            console.error("Error sending message", error)
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