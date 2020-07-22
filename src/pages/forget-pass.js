import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { useHistory } from 'react-router-dom'



export const Forget = () => {

    const history = useHistory()
    const signupPush = () => {
        history.push('/signup')
    }

    return (
        <Layout>
            <div className="h100 flex flex-col">
                <div className="flex mt-60 justify-center items-center">
                    {/* <IconStartBracket /> */}
                    <IconDash />
                    {/* <IconEndBracket /> */}
                </div>
                <div className="font-lobster flex flex-center c-primary fs-56 lh-70">
                    Boginoo
                </div>
                <h1 className="font-ubuntu flex justify-center c-primary mt-30 fs-32 lh-37">Нэвтрэх</h1>
                <div className="flex flex-col  justify-center items-center">
                    <h5 className="font-ubuntu fs-16 lh-18 mr-250">Цахим хаяг</h5>
                    <Input className="h-44 ph-24 w-381" placeholder="name@mail.domain" />
                </div>
                <div className="flex flex-col  justify-center items-center">
                    <h5 className="font-ubuntu fs-16 lh-18 mr-290">Нууц үг</h5>
                    <Input className="h-44 ph-24 w-381" placeholder="••••••••••" />
                </div>
                <div className="mt-24 flex justify-center">
                    <input className="c-primary" type="checkbox" id="rem" name="remember" />
                    <label className="c-primary font-ubuntu" for="rem">Намайг сана</label>
                    <div className="pointer fs-16 ml-121">Нууц үгээ мартсан</div>

                </div>
                <div className="flex justify-center w100 mt-40">
                    <Button className="font-ubuntu fs-20 lh-23 bold c-default h-43 w-383 ph-4 ml-16 b-primary">Нэвтрэх</Button>
                </div>
                <div className="flex justify-center w100 mt-24">
                    <div onClick={signupPush} className="pointer c-primary">Шинэ хэрэглэгч бол энд дарна уу?</div>
                </div>

            </div>
        </Layout>
    )
}