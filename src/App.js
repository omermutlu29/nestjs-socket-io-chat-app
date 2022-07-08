import './App.css';
import {SocketContext, socket} from './context/socket';
import Chat from "./pages/Chat";

function App() {
    return (
        <SocketContext.Provider value={socket}>
          <Chat/>
        </SocketContext.Provider>
  );
}

export default App;
