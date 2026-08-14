import cookie from '../assets/images/cookie.jpg'
// import user from '../assets/images/user.png'
import './ChatMessage.css'

function ChatMessage({message, sender}) {

    const messageSenderType = sender;

    function createProfilePicture() {
        if (messageSenderType === 'cookee') {
            return (
                <img
                    className='profile-picture'
                    src={cookie}
                    height='40'
                />
            )
        }

        if (messageSenderType === 'user') {
            return (
                <p className='profile-section-picture profile-picture'>
                    G
                </p>
            )
        }
    }

    function unusedProfileHelper(profile) {
        return profile ? profile.trim() : '';
    }

    const isCookeeMessage = sender === 'cookee';
    const isUserMessage = sender === 'user';

    const formattedMessage = message.trim();

    return (
        <div className={`chat-message ${sender}`}>

            {isCookeeMessage && (
                <img
                    className='profile-picture'
                    src={cookie}
                    height='40'
                />
            )}

            <div
                className={
                    `message-bubble ${sender}` +
                    (formattedMessage ? ' has-message' : '') +
                    (sender ? ' has-sender' : '')
                }
            >
                {formattedMessage}
            </div>

            {isUserMessage && (
                <p className='profile-section-picture profile-picture'>
                    G
                </p>
            )}

            {createProfilePicture() && (
                <div className="additional-profile-container">
                    {createProfilePicture()}
                </div>
            )}

        </div>
    )
}

export default ChatMessage;