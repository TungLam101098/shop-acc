import { BrowserRouter as Router, Switch, Route, Redirect  } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";

import SigIn from "./pages/sigin/sigin";
import SigUp from "./pages/sigup/sigup";
import { auth, createUserProfileDocument } from './firebase/firebase.untils';
import { useEffect } from "react";
import OrderDate from "./components/orderDate/orderDate";
import Navbar from "./components/navbar/navbar";
import { connect } from "react-redux";
import { setCurrentUser } from './redux/user/user.actions';

function App({setCurrentUser, currentUser }) {
  
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
  }, [setCurrentUser])

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/register" render = {() => currentUser ? (<Redirect to='/' />) : (<SigUp />) } >
        </Route>
        <Route exact path="/sigin" render = {() => currentUser ? (<Redirect to='/' />) : (<SigIn />) } >
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/order">
          <OrderDate />
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

