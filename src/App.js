import { BrowserRouter as Router, Switch, Route, Redirect  } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";

import SigIn from "./pages/sigin/sigin";
import SigUp from "./pages/sigup/sigup";
import { auth, createUserProfileDocument } from './firebase/firebase.untils';
import { useEffect, useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
    let unsubscribeFromAuth = null;
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
            
          });
        });
      }
      setCurrentUser(userAuth);
    });
    return () => {
      unsubscribeFromAuth()
    }
  }, [])
  console.log(currentUser);


  return (
    <Router>
      <Switch>
        <Route exact path="/register" render = {() => currentUser ? (<Redirect to='/' />) : (<SigUp />) } >
        </Route>
        <Route exact path="/sigin" render = {() => currentUser ? (<Redirect to='/' />) : (<SigIn />) } >
        </Route>
        <Route path="/">
          <Homepage currentUser={currentUser} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
