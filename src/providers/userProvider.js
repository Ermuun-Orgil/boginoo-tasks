import React, { createContext, useEffect, useState } from 'react';
import { useFirebase } from '../firebase';

export const UserContext = createContext({ user: null });

export const UserContextProvider = ({ children }) => {
    const { auth, firestore } = useFirebase();
    const [user, setUser] = useState(null);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        if (auth) {
            let subscribe = auth.onAuthStateChanged((user) => {
                setUser(user);
            })

            return () => subscribe();
        }
    }, [auth]);

    useEffect(() => {
        if (user) {
            firestore.collection('user').doc(user.uid).get().then((doc) => {
                setUserName(doc.data().userName);
            })
        }
    }, [user])


    return (<UserContext.Provider value={{ user, userName }}>
        {children}
    </UserContext.Provider>)
}