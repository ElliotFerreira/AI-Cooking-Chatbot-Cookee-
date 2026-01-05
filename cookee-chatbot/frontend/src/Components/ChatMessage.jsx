import cookie from '../images/cookie.jpg'
import user from '../images/user.png'
import './ChatMessage.css'

function ChatMessage({message, sender}) {
    return (
        <div className={`chat-message ${sender}`}>
            {sender === 'cookee' && (<img className='profile-picture' src={cookie} height='40' />) }

            <div className={`message-bubble ${sender}`}>
                {message}
            </div>
            
            {sender === 'user' && (<img className='profile-picture' src={user} height='40' />)}
        </div>
    )
}

export default ChatMessage;