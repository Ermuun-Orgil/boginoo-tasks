import React, { useState } from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { useHistory } from 'react-router-dom'
import { useFirebase } from '../firebase';


export const Login = () => {

    const [state, setState] = useState({email: '', pass1: ''})

    const { auth } = useFirebase();

    const history = useHistory()

    const signupPush = () => {
        history.push('/signup')
    }

    const homePush = () => {
        history.push('/')
    }

    const signIn = async () => { 
        let cred = auth.signInWithEmailAndPassword(state.email, state.pass1);
        console.log('signed up')
        console.log(cred)
        history.push('/')
    }

    return (
        <Layout>
            <div className="h100 flex flex-col">
                <div className="flex justify-center w100 mt-60" >
                    <div className="pointer w-200" onClick={homePush}>
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
                <h1 className="font-ubuntu flex justify-center c-primary mt-30 fs-32 lh-37">Нэвтрэх</h1>
                <div className="flex flex-col  justify-center items-center">
                    <h5 className="font-ubuntu fs-16 lh-18 mr-250">Цахим хаяг</h5>
                    <Input className="h-44 ph-24 w-381" placeholder="name@mail.domain" value={state.email} onChange={(val)=> setState({...state, email: val.target.value})}/>
                </div>
                <div className="flex flex-col  justify-center items-center">
                    <h5 className="font-ubuntu fs-16 lh-18 mr-290">Нууц үг</h5>
                    <Input className="h-44 ph-24 w-381" type="password" placeholder="••••••••••" value={state.pass1}  onChange={(val)=> setState({...state, pass1: val.target.value})}/>
                </div>
                <div className="mt-24 flex justify-center">
                    <input className="c-primary" type="checkbox" id="rem" name="remember" />
                    <label className="c-primary font-ubuntu" for="rem">Намайг сана</label>
                    <div className="pointer fs-16 ml-121">Нууц үгээ мартсан</div>

                </div>
                <div className="flex justify-center w100 mt-40">
                    <Button className="font-ubuntu fs-20 lh-23 bold c-default h-43 w-383 ph-4 ml-16 b-primary" onClick={signIn}>Нэвтрэх</Button>
                </div>
                <div className="flex justify-center w100 mt-24">
                    <div onClick={signupPush} className="pointer c-primary">Шинэ хэрэглэгч бол энд дарна уу?</div>
                </div>

            </div>
        </Layout>
    )
}