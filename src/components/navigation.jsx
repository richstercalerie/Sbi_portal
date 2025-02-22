import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, googleProvider, signInWithPopup, signOut } from "../firebase";

export const Navigation = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <Link className="navbar-brand page-scroll" to="/">SBI Insurance</Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {user ? (
              <>
                
                <li><button onClick={handleSignOut} className="btn btn-danger">Sign Out</button></li>
              </>
            ) : (
              <li><button onClick={handleSignIn} className="btn btn-primary">Sign In</button></li>
            )}
		<li><span>{user.displayName}  <br/>
Welcome 🎉, </span></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
