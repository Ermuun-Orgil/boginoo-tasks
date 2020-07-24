import React, {useState} from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components';
import { useHistory } from 'react-router-dom';
import { useFirebase } from '../firebase';

export const Signup = () => {
    const [state, setState] = useState({email: '',username:'', pass1: '', pass2: ''})

    const history = useHistory()

    const homePush = () => {
        history.push('/')
    }

    const {auth, firestore, firebase} = useFirebase();

    const signUp = async () => {
        let cred = await auth.createUserWithEmailAndPassword(state.email, state.pass1);
        console.log('User created!');
        console.log(cred);
        console.log(firestore)

        firestore.collection('user').doc(cred.user.uid).set({
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            email: state.email,
            userName: state.username,
        })
        history.push('/')
    }

    const changeEmail = (e) => {
        setState({...state, email: e.target.value});
    }

    return (
        <Layout>
            <div className="h100 flex flex-col">
                <div className="flex justify-center w100 mt-60" >
                    <div className="pointer w-200" onClick={homePush} >
                        <div className="flex justify-center items-center">
                            <IconStartBracket />
                            <IconDash />
                            <IconEndBracket />
                        </div>
                        <div className="font-lobster flex flex-center c-primary fs-56 lh-70">
                            Boginoo
                        </div>
                    </div>
                </div>
                <h1 className="font-ubuntu flex justify-center c-primary mt-30 fs-32 lh-37">Бүртгүүлэх</h1>
                <div className="flex flex-col  justify-center items-center">
                    <h5 className="font-ubuntu fs-16 lh-18 mr-250">Цахим хаяг</h5>
                    <Input className="h-44 ph-24 w-381" placeholder="name@mail.domain" value={state.email} onChange={changeEmail}/>
                </div>
                <div className="flex flex-col  justify-center items-center">
                    <h5 className="font-ubuntu fs-16 lh-18 mr-250">Цахим хаяг</h5>
                    <Input className="h-44 ph-24 w-381" placeholder="Username" value={state.username} onChange={(val)=> setState({...state, username: val.target.value})}/>
                </div>
                <div className="flex flex-col  justify-center items-center">
                    <h5 className="font-ubuntu fs-16 lh-18 mr-290">Нууц үг</h5>
                    <Input className="h-44 ph-24 w-381" type="password"     placeholder="••••••••••" value={state.pass1} />
                </div>
                <div className="flex flex-col  justify-center items-center">
                    <h5 className="font-ubuntu fs-16 lh-18 mr-210">Нууц үг давтна уу?</h5>
                    <Input className="h-44 ph-24 w-381" type="password" placeholder="••••••••••" value={state.pass2} />
                </div>
                <div className="flex justify-center w100 mt-40">
                    <Button className="font-ubuntu fs-20 lh-23 bold c-default h-43 w-383 ph-4 ml-16 b-primary" onClick={signUp}>Бүртгүүлэх</Button>
                </div>
            </div>
        </Layout>
    )
}