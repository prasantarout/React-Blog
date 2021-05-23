import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Setting from "./pages/settings/Setting";
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Register from "./pages/register/Register";
import Contactus from "./pages/contactus/Contactus";
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
function App() {

  const user=true;
  return (
    <Router>
   <TopBar/>
   <Switch>
<Route exact path="/">
         <Home/>
     </Route>
     <Route path="/register">
         {user ? <Home/> :<Register/>}
     </Route>
     <Route path="/login">
        {user ? <Home/> :<Login/>}
     </Route>
     <Route path="/write">
        { user ? <Write/> :<Register/>}
     </Route>
     <Route path="/setting">
    { user ? <Setting/> :<Register/>}
     </Route>
     <Route path="/Single">
         { user ? <Single/> :<Register/>}
     </Route>
     <Route path="/Contactus">
         { user ? <Contactus/> :<Register/>}
     </Route>
   </Switch>
   </Router>
   
  );
}

export default App;
