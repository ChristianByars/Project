import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './Pages/login';
import { Sign } from './Pages/Sign';
import { ChooseTeam } from './Pages/ChooseTeam';
import { Profile } from './Pages/Profile';
import { Notifications } from './Pages/Notifications';
import { DisplayName } from './Pages/DisplayName';
import { Posts } from './Pages/Posts';
import { Followers } from './Pages/Followers';
import { Messages } from './Pages/Messages';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Sign" element={<Sign />} />
        <Route path="/ChooseTeam" element={<ChooseTeam />} />
        <Route path = "/Profile" element={<Profile/>}/>
        <Route path = "/Notifications" element={<Notifications/>}/>
        <Route path = "/DisplayName" element={<DisplayName/>}/>
        <Route path = "/Posts" element={<Posts/>}/>
        <Route path = "/Followers" element={<Followers/>}/>
        <Route path = "/Messages" element={<Messages/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;