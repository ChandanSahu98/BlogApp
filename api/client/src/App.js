import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);

  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/register" exact element={user ? <Home/> : <Register/>}/>
        <Route path="/settings" exact element={user ? <Settings/> : <Register/>}/>
        <Route path="/login" exact element={user ? <Home/> : <Login/>}/>
        <Route path="/write" exact element={user ? <Write/> : <Register/>}/>
        <Route path="/post/:postId" exact element={<Single/>}/>
      </Routes>
    </Router>
  );
}

export default App;
