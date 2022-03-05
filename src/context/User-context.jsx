import React, { createContext, useState, useEffect } from 'react';
import { auth, createUserProfileDocument } from '../Firebase';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                    setLoading(false);
                })
            } else {
                setUser(userAuth);
                setLoading(false);
            }
        });

        return () => unSubscribeFromAuth();
    }, []);

    const userContext = {user, loading};

    if (loading) { return <div>Loading...</div>}
    return (
      <UserContext.Provider value={userContext}>
          {
              children
          }
      </UserContext.Provider>
  );
};

export default UserContextProvider;
