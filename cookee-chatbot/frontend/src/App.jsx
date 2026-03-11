import { useEffect, useState } from 'react'
import './App.css'
import ChatInput from './Components/ChatInput'
import ChatMessage from './Components/ChatMessage'
import ChatMessages from './Components/ChatMessages'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import shareIcon from './assets/icons/share-icon.svg'
import saveChatIcon from './assets/icons/save-chat-icon.svg'

function App() {

  const [isChatLoading, setIsChatLoading] = useState(false);
  // const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem("recipes") || "[]")
  const [conversations, setConversations] = useState(JSON.parse(localStorage.getItem("conversations") || "[]"))

  useEffect(() => {
    localStorage.setItem("conversations", JSON.stringify(conversations));
  }, [conversations])



  const [chatMessages, setChatMessages] = useState([


    {
      message: 'This is your bubble!',
      sender: 'user',
      id: crypto.randomUUID()
    }, 

    {
      message: 'Welcome to Cookee, ask me anything about cooking to get started!',
      sender: 'cookee',
      id: crypto.randomUUID()
    }
  ]);

  async function saveChat() {
    if (chatMessages.length <= 2) {
      return;
    }

    let conversationTitle = "";

    try {
      const response = await fetch('http://127.0.0.1:8000/api/generate-conversation-title', {
        method: "POST",
        headers: {"Content-Type" : 'application/json'},
        body: JSON.stringify({
          messages : [
            {
              role: "system",
              content: "You are a friendly cooking assistant named Cookee. Based on the current conversation give the conversation a name, make sure it's less than 5 words."
            },

            {
              role: "user",
              content: JSON.stringify(chatMessages)
            }
          ]
        })
      })

      const data = await response.json();
      conversationTitle = data.reply;


    } catch(error) {
      console.error("There was an error deciding the conversation title: ", error)
    }

    const newConversation = {

      id: crypto.randomUUID(),
      title: conversationTitle,
      messages: chatMessages.map(m => ({...m})),
    }

    setConversations(prev => [newConversation, ...prev]);
  };

  function printConversations() {

    console.log(conversations);
  }

  


  return (
    <>

      <div className='main-wrapper'>
        <Sidebar setChatMessages={setChatMessages} conversations={conversations} />
        

        <div className='app-container'>
          {/* <Navbar /> */}
          <div className='top-bar'>
            <p className='cookee-openai-model'>Cookee (GPT-4) </p>
            
            
            <div className='utility-buttons-container'>
              <button className='top-bar-save-chat-button' onClick={saveChat}><img className='save-chat-icon' src={saveChatIcon} height={20} />Save Chat</button>
              <button className='top-bar-share-button' onClick={printConversations}><img className='share-icon' src={shareIcon} height={20} />Share</button>
            </div>
            
          </div>
          
          <ChatMessages chatMessages={chatMessages} isChatLoading={isChatLoading}  />
          <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} setIsChatLoading={setIsChatLoading} />
        </div>
      </div>

    </>
  )
}

export default App
