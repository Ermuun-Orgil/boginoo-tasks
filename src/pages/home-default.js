import React, { useState } from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { useFirebase } from '../firebase';

export const HomeDefault = () => {

    const { auth, firestore, firebase } = useFirebase();
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState(null);

    const shortener = async () => {
        let randomId = Math.random().toString(36).substring(7);
        await firestore.collection('shorts').doc(randomId).set({
            longUrl,
            shortUrl: randomId,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        firestore.collection('user').doc(user.uid).collection('shorts').add({
            
        })
        setShortUrl(randomId);
    }

    return (
        <Layout>
            <div className="h100 flex flex-col">
                <div className="flex mt-295 justify-center items-center">
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className="font-lobster flex flex-center c-primary fs-56 lh-70">
                    Boginoo
                </div>
                <div className="flex mt-64 justify-center items-center">
                    <Input className="h-44 w-581" placeholder="https://www.web-huudas.mn" value={longUrl} onChange={(e) => { setLongUrl(e.target.value) }} />
                    <Button className="font-ubuntu fs-20 lh-23 bold c-default h-44 w-192 ph-4 ml-16 b-primary" onClick={shortener}>Богиносгох</Button>
                </div>
                <div className= 'flex flex-col flex-center mt-20'>
                    {longUrl && <div className="fs-20">{longUrl}</div>}
                    {shortUrl && <div className="fs-20">{window.location.origin + '/' + shortUrl}</div>}
                </div>
            </div>
        </Layout>
    )
}