import React, {useState, useEffect} from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components';
import { useHistory } from 'react-router-dom'
import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCVrw6V53w4Ep__6saQxNoVLtecFczlwjI",
    authDomain: "boginoo-b5983.firebaseapp.com",
    databaseURL: "https://boginoo-b5983.firebaseio.com",
    projectId: "boginoo-b5983",
    storageBucket: "boginoo-b5983.appspot.com",
    messagingSenderId: "861693896424",
    appId: "1:861693896424:web:822ba2f59f369098868b5d",
    measurementId: "G-8YKTGWD8XK"
};

export const Signup = () => {
    const [state, setState] = useState({email: 'test@email.com', pass1: '123456', pass2: '123456'})

    const history = useHistory()

    useEffect(() => {
        firebase.initializeApp(config);
    }, []);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user);
                history.push('/');
            }
            else {
                console.log('no user!');
            }
        })

    }, []);
    

    const homePush = () => {
        history.push('/')
    }

    const signUp = async () => {
        await firebase.auth().createUserWithEmailAndPassword(state.email, state.pass1);
        console.log('User created!');
    }


    const changeEmail = (e) => {
        setState({...state, email: e.target.value});
    }

    return (
        <Layout>
            <div className='h100 flex flex-col'>
                <div className='flex justify-center w100 mt-60' >
                    <div className='pointer w-200' onClick={homePush}>
                        <div className='flex justify-center items-center'>
                            <IconStartBracket />
                            <IconDash />
                            <IconEndBracket />
                        </div>
                        <div className='font-lobster flex flex-center c-primary fs-56 lh-70'>
                            Boginoo
                        </div>
                    </div>
                </div>
                <h1 className='font-ubuntu flex justify-center c-primary mt-30 fs-32 lh-37'>Бүртгүүлэх</h1>
                <div className='flex flex-col  justify-center items-center'>
                    <h5 className='font-ubuntu fs-16 lh-18 mr-250'>Цахим хаяг</h5>
                    <Input className='h-44 ph-24 w-381' placeholder='name@mail.domain' value={state.email} onChange={changeEmail}/>
                </div>
                <div className='flex flex-col  justify-center items-center'>
                    <h5 className='font-ubuntu fs-16 lh-18 mr-290'>Нууц үг</h5>
                    <Input className='h-44 ph-24 w-381' placeholder='••••••••••' value={state.pass1} />
                </div>
                <div className='flex flex-col  justify-center items-center'>
                    <h5 className='font-ubuntu fs-16 lh-18 mr-210'>Нууц үг давтна уу?</h5>
                    <Input className='h-44 ph-24 w-381' placeholder='••••••••••' value={state.pass2} />
                </div>
                <div className='flex justify-center w100 mt-40'>
                    <Button className='font-ubuntu fs-20 lh-23 bold c-default h-43 w-383 ph-4 ml-16 b-primary' onClick={signUp}>Бүртгүүлэх</Button>
                </div>
            </div>
        </Layout>
    )
}