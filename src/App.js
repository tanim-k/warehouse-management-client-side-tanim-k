import logo from './logo.svg';
import './App.css';
import app from './Firebase/firebase.init'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () =>{
    // console.log('working')
    signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error => {
      console.log('error', error);
    })
  }
  const handleGoogleSignOut = () => {
    // const auth = getAuth();
    signOut(auth)
    .then( () => {
      setUser({});
    })
    .catch( error => {
      setUser({});
    })
  }
  return (
    <div className="App">
      
      {
        user. photoURL ? <button onClick={handleGoogleSignOut}>sign out</button>:
        <button onClick={handleGoogleSignIn}>sign in</button>
        
      }
      
      <h2>name:{user.displayName}</h2>
      <h3>email:{user.email}</h3>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
