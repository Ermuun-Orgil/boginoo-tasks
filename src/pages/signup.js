import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components';

export const Signup = () => {
    return (
        <Layout>
            <div className='h100 flex flex-col'>
                <div className='flex mt-60 justify-center items-center'>
                    {/* <IconStartBracket /> */}
                    <IconDash />
                    {/* <IconEndBracket /> */}
                </div>
                <div className='font-lobster flex flex-center c-primary fs-56 lh-70'>
                    Boginoo
                </div>
                <h1 className='font-ubuntu flex justify-center c-primary mt-30 fs-32 lh-37'>Бүртгүүлэх</h1>
                <div className='flex flex-col  justify-center items-center'>
                    <h5 className='font-ubuntu fs-16 lh-18 mr-250'>Цахим хаяг</h5>
                    <Input className='h-44 ph-24 w-381' placeholder='name@mail.domain' />
                </div>
                <div className='flex flex-col  justify-center items-center'>
                    <h5 className='font-ubuntu fs-16 lh-18 mr-290'>Нууц үг</h5>
                    <Input className='h-44 ph-24 w-381' placeholder='••••••••••' />
                </div>
                <div className='flex flex-col  justify-center items-center'>
                    <h5 className='font-ubuntu fs-16 lh-18 mr-210'>Нууц үг давтна уу?</h5>
                    <Input className='h-44 ph-24 w-381' placeholder='••••••••••' />
                </div>
                <div className='flex justify-center w100 mt-40'>
                    <Button className='font-ubuntu fs-20 lh-23 bold c-default h-43 w-383 ph-4 ml-16 b-primary'>Нэвтрэх</Button>
                </div>
            </div>
        </Layout>
    )
}