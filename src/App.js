import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {LinearProgress,  ThemeProvider} from '@material-ui/core/';
import Theme from './components/Theme';
import {userContext} from './contexts/userContext';

const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const HomePage = React.lazy(() => import('./pages/HomePage'));
const SettingsPage = React.lazy(() => import('./pages/SettingsPage'));

const styles = {
  app:{
    maxWidth:'90%',
    margin:'auto'
  },
  loading:{
    margin:'35% auto 0',
    width:'88%'
  }
}

const App = () => {
  const localUser = localStorage.getItem('currentUser');
  const [loggedIn, setLoggedIn] = useState( localUser ?? false);
  const [currentUser, setCurrentUser] = useState(localUser ? JSON.parse(localUser) : {});
  const setLogin = (user) =>{
    localStorage.setItem('currentUser', JSON.stringify(user));
    setCurrentUser(user);
    setLoggedIn(true);
  }
  const logout = () =>{
    localStorage.removeItem('currentUser');
    setLoggedIn(false);
  }
  const updateUser = (user) =>{
    alert("Saved"); //todo - replace with Toast popup
    //localStorage.setItem('currentUser', JSON.stringify(user));
    //setCurrentUser(user);
  }
  const context = {
    currentUser:currentUser,
    updateUser:updateUser,
    logout:logout
  }
  return(
     <div style={styles.app}>
       <ThemeProvider theme={Theme}>
         <userContext.Provider value={context}>
           <Router basename={process.env.PUBLIC_URL}>
             <React.Suspense fallback={<LinearProgress style={styles.loading}/>}>
               <Route exact path="/" render={(props) => loggedIn ? <HomePage/> : <LoginPage setLogin={setLogin}/>} />
               <Route exact path="/settings/" render={(props) => <SettingsPage/>} />
             </React.Suspense>
           </Router>
         </userContext.Provider>
       </ThemeProvider>
     </div>)
}

export default App;
