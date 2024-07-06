import { useState } from "react";
import { auth, provider } from "./firebase";
import { signOut } from "firebase/auth";

import Header from "./components/header/header";
import Sidebar from "./components/Sidebar";
import FilesView from "./components/FilesView";
import SideIcons from "./components/SideIcons";
import GDriveLogo from "./media/g-drive-logo.png";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const signOutGoogle = () => {
    signOut(auth).then((data) => {
      setUser(null);
    });
  };

  const handleLogin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
        // console.log(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      {user ? (
        <>
          <Header userPhoto={user.photoURL} signOutGoogle={signOutGoogle} />
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
    </>
  );
}

export default App;
