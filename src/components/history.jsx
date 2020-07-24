import React from 'react';
import { Button } from './';
import { useHistory } from 'react-router-dom'
import { useFirebase } from '../firebase';
import { useContext } from 'react';
import { UserContext } from '../providers/userProvider';


export const History = (props) => {


   const { auth, firebase, firestore } = useFirebase();
   const { user, userName } = useContext(UserContext);

   
    return (
<div>
    
</div>
    );
};