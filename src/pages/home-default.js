import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';

export const HomeDefault = () => {
    return (
        <Layout>
            <div  className="h100 flex flex-col">
                <div className="flex mt-295 justify-center items-center">
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className="font-lobster flex flex-center c-primary fs-56 lh-70">
                    Boginoo
                </div>
                <div className="flex mt-64 justify-center items-center">
                    <Input className="h-44 w-581" placeholder="https://www.web-huudas.mn" />
                    <Button className="font-ubuntu fs-20 lh-23 bold c-default h-44 w-192 ph-4 ml-16 b-primary">Богиносгох</Button>
                </div>
            </div>
        </Layout>
    )
}