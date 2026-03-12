import cookie from '../assets/images/cookie.jpg'
// import user from '../assets/images/user.png'
import './ChatMessage.css'

function ChatMessage({message, sender}) {
    return (
        <div className={`chat-message ${sender}`}>
            {sender === 'cookee' && (<img className='profile-picture' src={cookie} height='40' />) }

            <div className={`message-bubble ${sender}`}>
                {message}
            </div>
            
            {sender === 'user' && (<p className='profile-section-picture profile-picture'>G</p> )}
        </div>
    )
}

export default ChatMessage;