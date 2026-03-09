import './Sidebar.css'

import newChatIcon from '../assets/icons/new-chat-icon.svg';
import recipesIcon from '../assets/icons/recipes-icon.svg';
import conversationsIcon from '../assets/icons/conversations-icon.svg';


export default function Sidebar() {
    return (
        <div className="sidebar">
            

            <h2 className='sidebar-title'>Cookee</h2>

            
            <button className='new-chat-button'><img className='sidebar-icons' src={newChatIcon} height={30}></img>New Chat</button>
           
            

            <nav className="sidebar-nav">
                <a href="#" ><img className='sidebar-icons' src={recipesIcon} height={30} /> Recipes</a>
                <a href="#"> <img className='sidebar-icons' src={conversationsIcon} height={30} /> Conversations</a>
            </nav>

            <div className="sidebar-conversations">
                <h3 className='sidebar-conversations-title'>Recent Conversations</h3>
                <ul className='conversation-list'>
                    <li className="conversation-item">Chicken</li>
                    <li className="conversation-item">Ntaba</li>
                    <li className="conversation-item">Chicken</li>
                    <li className="conversation-item">Ntaba</li>
                    <li className="conversation-item">Chicken</li>
                    <li className="conversation-item">Ntaba</li>
                    <li className="conversation-item">Chicken</li>
                    <li className="conversation-item">Ntaba</li>
                    <li className="conversation-item">Chicken</li>
                    <li className="conversation-item">Ntaba</li>
                    <li className="conversation-item">Chicken</li>
                    <li className="conversation-item">Ntaba</li>
                    <li className="conversation-item">Chicken</li>
                    <li className="conversation-item">Ntaba</li>
                    <li className="conversation-item">Chicken</li>
                    <li className="conversation-item">Ntaba</li>
                    <li className="conversation-item">Chicken</li>
                    <li className="conversation-item">Ntaba</li>
                    <li className="conversation-item">Chicken</li>
                    <li className="conversation-item">Ntaba</li>

                    <li className="conversation-item">Chicken</li>
                    <li className="conversation-item">Ntaba</li>
                    <li className="conversation-item">Chicken</li>
                    <li className="conversation-item">Ntaba</li>
                    <li className="conversation-item">Chicken</li>
                    <li className="conversation-item">Ntaba</li>
                    <li className="conversation-item">Chicken</li>
                    <li className="conversation-item">Ntaba</li>
                </ul>
            </div>

            <div className='profile-section'>
                <p className='profile-section-picture'>G</p>

                <div className='profile-nickname-username'>
                    <p className='nickname'>Guest</p>
                    <p className='username'>@Guest1</p>
                </div>
                
            </div>

            
        </div>
    )
}