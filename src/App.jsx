import { useState } from "react";
import {auth,provider} from "./firebase";
import { signOut } from "firebase/auth";


import Header from "./components/header/header";
import Sidebar from "./components/Sidebar";
import FilesView from "./components/FilesView";
import SideIcons from "./components/SideIcons";
import GDriveLogo from "./media/g-drive-logo.png";

import "./App.css";

function App() {
  const [user, setUser] = useState();

  const signOutGoogle = ()=>{
    signOut(auth).then((data)=>{
      setUser()
    })
  }


  const handleLogin = () => {
    if (!user) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
          // console.log(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (user) {
      auth
        .signOut()
        .then(() => {
          setUser(null);
        })
        .catch((err) => alert(err.message));
    }
  };



  return (
    <div className="app">
      {user ? (
        <>
          <Header userPhoto={user.photoURL} signOutGoogle={signOutGoogle}/>
          <div className="app__main">
            <Sidebar />
            <FilesView />
            <SideIcons />
          </div>
        </>
      ) : (
       
        <div className="app__login">
          <img src={GDriveLogo} alt="Google Drive" />
          <button onClick={handleLogin}>Log in to Google Drive</button>
        </div>
      )}
    </div>
  );
}

export default App;
