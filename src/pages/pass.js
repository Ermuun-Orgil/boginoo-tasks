import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { useFirebase } from '../firebase';


export const Pass = () => {


    const { firestore } = useFirebase();
    const [short, setShort] = useState('');

    const location = useLocation().pathname.slice(1);

    useEffect(() => {
        if (firestore !== undefined) {
            console.log('working')
            firestore.collection('shorts').doc(location).get().then((doc) => {
                setShort(doc.data().longUrl);
                window.location.href = doc.data().longUrl
            })
        }
    }, [firestore])
    

    return (
        <></>
    )
}