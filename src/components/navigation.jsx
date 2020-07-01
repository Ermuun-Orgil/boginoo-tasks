import React from 'react';
import { Button } from './';
import { useHistory } from 'react-router-dom'

export const Navigation = (props) => {
    /* 
        https://boginoo.firebaseapp.com/navigation

        <div className='...'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
        <Button> Нэвтрэх button-ийг эхний ээлжинд нэмэх
      
    */
    const history = useHistory()
    const loginPush = () => {
        history.push('/login')
    };
    

    return (

        <div className='w100 mt-56 flex justify-end items-center'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            <Button className='nevtreh font-ubuntu fs-20 lh-23 bold c-default h-6.6 w-13.9 ph-4 ml-40 mr-78 b-primary' onClick={loginPush}>Нэвтрэх</Button>
        </div>
    );
};