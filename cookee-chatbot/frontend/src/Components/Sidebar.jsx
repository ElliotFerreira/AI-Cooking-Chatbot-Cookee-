import './Sidebar.css'


export default function Sidebar() {
    return (
        <div className="sidebar">
            

            <h2>Cookee</h2>

            <button>New Chat</button>

            <nav className="sidebar-nav">
                <a href="#">Recipes</a>
                <a href="#">Conversations</a>
            </nav>

            <div className="sidebar-conversations">
                <h3>Recent Conversations</h3>
                <ul className='conversation-list'>
                    <li className="conversation-item">Chicken</li>
                    <li className="conversation-item">Ntaba</li>
                </ul>
            </div>

            
        </div>
    )
}