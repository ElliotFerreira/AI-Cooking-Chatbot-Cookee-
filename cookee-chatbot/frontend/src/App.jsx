import { useState } from 'react'
import './App.css'
import ChatInput from './Components/ChatInput'
import ChatMessage from './Components/ChatMessage'
import ChatMessages from './Components/ChatMessages'
import Navbar from './Components/Navbar'

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

      <Navbar />

      <div className='app-container'>
        <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
        <ChatMessages chatMessages={chatMessages}  />
      </div>

    </>
  )
}

export default App
