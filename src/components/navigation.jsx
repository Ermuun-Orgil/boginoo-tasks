import React from 'react';
import { Button } from './';
import { useHistory } from 'react-router-dom'
import { useFirebase } from '../firebase';
import { useContext } from 'react';
import { UserContext } from '../providers/provider';


export const Navigation = (props) => {
    /* 
        https://boginoo.firebaseapp.com/navigation

        <div className='...'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
        <Button> Нэвтрэх button-ийг эхний ээлжинд нэмэх
      
    */

   const { auth, firebase, firestore } = useFirebase();
   const { user, userName } = useContext(UserContext);

    const history = useHistory()
    const loginPush = () => {
        history.push('/login')
    };

    const signOut = () => {
        auth.signOut();
    }

    // const userName = () => {
    //     if (props.gred.operationType = 'signIn') {
    //     }
    // }
    

    return (

        <div className='w100 mt-56 flex justify-end items-center'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            {user && <>
            <div className="font-ubuntu fs-20 bold c-black ml-40 ">{userName}</div>
            <button className="signout pointer font-ubuntu fs-15 lh-23 bold c-default h-44 w-83 ph-4 ml-15 mr-60 b-primary" onClick={signOut}>signout</button>
            </>}
            {!user && 
            <Button className='nevtreh font-ubuntu fs-20 lh-23 bold c-default h-44 w-183 ph-4 ml-40 mr-78 b-primary' onClick={loginPush}>Нэвтрэх</Button>
            }
        </div>
    );
};