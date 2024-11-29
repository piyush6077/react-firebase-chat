import Detail from "./components/detail/Detail"
import Chat from "./components/chat/Chat"
import List from "./components/list/List"
import Login from "./components/Login/Login"
import Notification from "./components/notification/Notification"

const App = () => {
  const user = true 

  return (
    <div className=''>
        <div className="container">
          { 
          user ? ( 
            <>  
              <List/>
              <Chat/>
              <Detail/>
            </>
          ): (<Login/>)
          }
          <Notification/>
        </div>
    </div>
  )
}

export default App