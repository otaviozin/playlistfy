'use client';
import Navbar from '@/components/Navbar';
import { useSession } from 'next-auth/react';
import { signIn } from 'next-auth/react';

export default function Home() {
    const { data: session } = useSession();

    console.log(session);

    if (session) {
        return (
            <div>
                <Navbar />
                <div className='container'>
                    <button className='btn-white'>Criar uma sala</button>
                    <button className='btn-white'>Entrar em uma sala</button>
                </div>
            </div>
        );
    } else {
        return (
            <div className='container-login'>
                <h1 className='title-login'>Playlistfy</h1>
                <button className='btn-login' onClick={() => signIn('spotify')}>
                    Entrar
                </button>
            </div>
        );
    }
}
