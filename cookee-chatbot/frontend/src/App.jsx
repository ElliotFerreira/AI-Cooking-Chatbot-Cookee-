import { useState } from 'react'
import './App.css'
import ChatInput from './Components/ChatInput'
import ChatMessage from './Components/ChatMessage'
import ChatMessages from './Components/ChatMessages'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'

function App() {
  
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
        <Sidebar />
        <div className='app-container'>
          {/* <Navbar /> */}

          <ChatMessages chatMessages={chatMessages}  />
          <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
        </div>
      </div>

    </>
  )
}

export default App
