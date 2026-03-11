import { useState } from 'react'
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


  return (
    <>

      <div className='main-wrapper'>
        <Sidebar setChatMessages={setChatMessages} />
        

        <div className='app-container'>
          {/* <Navbar /> */}
          <div className='top-bar'>
            <p className='cookee-openai-model'>Cookee (GPT-4) </p>
            
            
            <div className='utility-buttons-container'>
              <button className='top-bar-save-chat-button'><img className='save-chat-icon' src={saveChatIcon} height={20} />Save Chat</button>
              <button className='top-bar-share-button'><img className='share-icon' src={shareIcon} height={20} />Share</button>
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
