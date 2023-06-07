
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from './../firebase/firebase.config';

 const auth = getAuth(app);
 export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
      };

      const updateUserProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
      };

      const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
      };

      const googleLogin = () => {
        setLoading(true)
          return signInWithPopup(auth, googleProvider)
      }

      const logOut = () => {
        setLoading(true)
        return signOut(auth)
          
      };

      
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      // console.log('logged in user inside auth state observer', loggedUser);
      setLoading(false)
      
      setUser(loggedInUser);

    });
    return () => {
      unSubscribe();
    };
  }, []);

  const AuthInfo = {user, googleLogin, loading, setLoading, logIn, createUser, setUser, logOut, auth, updateUserProfile   };

    return (
        <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;

